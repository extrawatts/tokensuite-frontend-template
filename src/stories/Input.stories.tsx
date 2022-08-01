import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import Input from 'src/components/ui/atoms/input';

import Input from 'src/components/ui/atoms/input';
// import { Button } from './Button';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
