import type { Meta, StoryObj } from '@storybook/react';
import Button from './shadow-effect-button';

const meta = {
  title: 'Buttons/ Intermediate/ Shadow Effect Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Shadow Effect Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Shadow Effect Button',
  },
};

