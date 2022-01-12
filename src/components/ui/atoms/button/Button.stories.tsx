import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as Component } from '../index';

export default {
  title: 'Components/ui/atoms/Button',
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Component>;

const DefaultTemplate: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Button = DefaultTemplate.bind({});

Button.args = {
  className: 'btn-primary',
  children: 'Button',
};
