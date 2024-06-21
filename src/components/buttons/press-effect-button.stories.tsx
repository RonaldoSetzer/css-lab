import type { Meta, StoryObj } from '@storybook/react';
import Button from './press-effect-button';

const meta = {
  title: 'Button/ Press Effect Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Press Effect Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Press Effect Button',
  },
};


