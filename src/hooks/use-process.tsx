import { useEffect, useState } from 'react';
import { ProcessStatuses, Process } from 'types/hooks/use-process';

const useProcess = () => {
  const [status, setStatus] = useState(ProcessStatuses.IDLE);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [hash, setHash] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [running, setRunning] = useState(false);
  const [logItem, setLogItem] = useState('');

  useEffect(() => {
    if (!logItem) return;

    window.onbeforeunload = () => {
      localStorage['process'] = logItem;
      return 'You are leaving the page, process will be terminated';
    };
  }, [logItem]);

  const executeProcess = async (processes: Process[] | [] = [], index = 0) => {
    setStatus(ProcessStatuses.IN_PROGRESS);
    setRunning(true);
    const process = processes[index];
    if (!process) return;

    setDescription(process.description);
    setTitle(process.title);

    try {
      const tx = await process.transaction();
      console.log(tx);

      setLogItem(JSON.stringify({ type: process.type, step: index }));
      if (tx.hash) {
        await tx.wait();
        setHash(tx._hash);
      }
      setStatus(ProcessStatuses.DONE);

      const nextIndex = index + 1;

      if (processes[nextIndex]) {
        setHash('');
        executeProcess(processes, nextIndex);
      } else {
        setRunning(false);
        setLogItem('');
      }
    } catch (err: any) {
      if (err?.message && err.message.startsWith('execution reverted: ')) {
        setErrorMessage(err.message.split('\n')[0].slice(20));
      }
      setStatus(ProcessStatuses.ERROR);
      setLogItem(JSON.stringify({ type: process.type, step: index }));
    }
  };

  const execute = (processes: any, step = 0) => {
    executeProcess(processes, step);
  };

  const value = {
    execute,
    status,
    description,
    hash,
    setHash,
    running,
    setRunning,
    setStatus,
    title,
    errorMessage,
  };

  return value;
};

export default useProcess;
