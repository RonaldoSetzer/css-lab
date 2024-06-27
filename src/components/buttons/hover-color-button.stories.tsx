import type { Meta, StoryObj } from '@storybook/react';
import Button from './hover-color-button';

const meta = {
  title: 'Buttons/ Beginner/ Hover Color Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Hover Color Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Hover Color Button',
  },
};
