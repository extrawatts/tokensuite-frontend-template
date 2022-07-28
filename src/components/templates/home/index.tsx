import React, { useState } from 'react';
import styles from './home.module.scss';
import cx from 'classnames';
import { HomeProps } from 'types/components/ui/organisms/home';
import useModalsStore from 'src/store/modals';
import Box from 'src/components/ui/atoms/box';
import Flex from 'src/components/ui/atoms/flex';
import Center from 'src/components/ui/atoms/center';
import Stack from 'src/components/ui/atoms/stack';
import { Input, Checkbox, Switch } from 'src/components/ui/atoms';

const Home: React.FC<HomeProps> = ({ className }) => {
  const { openModal } = useModalsStore();
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  return (
    <div className={cx(styles.home, className)}>
      <button onClick={() => openModal('login')}>modal</button>

      <Box>Testing box</Box>
      <Box>Testing box</Box>
      <Box>Testing box</Box>
      <Box>Testing box</Box>

      <Flex>
        <Box>Testing flex</Box>
        <Box>Testing flex</Box>
        <Box>Testing flex</Box>
        <Box>Testing flex</Box>
      </Flex>

      <Center>Testing center</Center>

      <Stack direction="row">
        <Box>Testing stack</Box>
        <Box>Testing stack</Box>
        <Box>Testing stack</Box>
        <Box>Testing stack</Box>
      </Stack>

      <Input label="Label" placeholder="Place Holder" />
      <Checkbox
        label="Checkbox"
        id={'asd'}
        value={checkboxValue}
        onClick={() => setCheckboxValue(!checkboxValue)}
      />
      <Switch checked={switchChecked} onClick={() => setSwitchChecked(!switchChecked)} />
    </div>
  );
};

export default Home;
