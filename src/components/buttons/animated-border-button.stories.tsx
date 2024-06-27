import type { Meta, StoryObj } from '@storybook/react';
import Button from './animated-border-button';

const meta = {
  title: 'Button/ Animated Border Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Animated Border Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Animated Border Button',
  },
};

