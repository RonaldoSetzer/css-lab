import type { Meta, StoryObj } from '@storybook/react';
import Button from './confirm-button';

const meta = {
  title: 'Buttons/ Advanced/ Confirm Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Confirm Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Confirm Button',
  },
};
