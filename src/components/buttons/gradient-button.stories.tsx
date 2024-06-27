import type { Meta, StoryObj } from '@storybook/react';
import Button from './gradient-button';

const meta = {
  title: 'Buttons/ Intermediate/ Gradient Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Gradient Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Gradient Button',
  },
};
