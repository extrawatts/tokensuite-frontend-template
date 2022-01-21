import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginModal as Component } from 'src/components/ui/organisms';
import useModalsStore from 'src/store/modals';

export default {
  title: 'Components/ui/organisms/LoginModal',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const DefaultTemplate: ComponentStory<typeof Component> = (args) => {
  const { openModal } = useModalsStore();
  return (
    <>
      {' '}
      <button onClick={() => openModal('login')}>Open modal</button>
      <Component {...args} />
    </>
  );
};

export const LoginModal = DefaultTemplate.bind({});
