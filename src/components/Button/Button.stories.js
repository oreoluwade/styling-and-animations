// YourComponent.stories.js

import React from 'react';

import Button from '.';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Atomic/Button',
  component: Button
};

//👇 We create a “template” of how args map to rendering
const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  secondary: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Round Edged Button',
  rounded: true
};

export const Large = Template.bind({});
Large.args = {
  children: 'Enormous Button',
  large: true
};

export const Small = Template.bind({});
Small.args = {
  children: 'Miniature Button',
  small: true
};
