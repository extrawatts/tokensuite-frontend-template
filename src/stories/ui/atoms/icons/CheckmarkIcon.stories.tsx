import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckmarkIcon as Component } from 'src/components/ui/atoms/icons';

export default {
  title: 'UI/Atoms/Icons/CheckMark',
  argTypes: {
    width: 100,
    height: 100,
    color: { control: 'color' },
  },
} as unknown as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div style={{ backgroundColor: '#f2f2f2', height: '100vh' }}>
    <Component style={{ color: args.color }} {...args} />
  </div>
);

export const CheckMark = Template.bind({});

CheckMark.args = {
  width: 100,
  height: 100,
};
