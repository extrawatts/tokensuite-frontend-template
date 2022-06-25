import { ModalProps } from 'types';
import { IProcess } from 'types/store/process';

export interface ProcessModalProps extends ModalProps {
  processData?: {
    processes: IProcess[];
    step: number;
  };
}
