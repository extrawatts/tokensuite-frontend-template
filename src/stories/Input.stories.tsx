import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input as Component } from 'src/components/ui/atoms/';

export default {
  title: 'UI/Atoms/Input',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Input = Template.bind({});

Input.args = {};
