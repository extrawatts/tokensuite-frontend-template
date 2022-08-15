import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckmarkIcon as Component } from 'src/components/ui/atoms/icons';

export default {
  title: 'UI/Atoms/Icons/Icons',
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div style={{ backgroundColor: '#f2f2f2', height: '100vh' }}>
    <Component width={11} height={18} {...args} />
  </div>
);

export const Icons = Template.bind({});

Icons.args = {};
