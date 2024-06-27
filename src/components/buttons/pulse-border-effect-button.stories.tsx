import type { Meta, StoryObj } from '@storybook/react';
import Button from './pulse-border-effect-button';

const meta = {
  title: 'Buttons/ Advanced/ Pulse Border Effect Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Pulse Border Effect Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Pulse Border Effect Button',
  },
};

