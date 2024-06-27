import type { Meta, StoryObj } from '@storybook/react';
import Button from './interactive-button';

const meta = {
  title: 'Buttons/ Advanced/ Interactive Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Interactive Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Interactive Button',
  },
};

