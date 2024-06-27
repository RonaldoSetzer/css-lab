import type { Meta, StoryObj } from '@storybook/react';
import Button from './press-effect-3d-button';

const meta = {
  title: 'Buttons/ Intermediate/ Press Effect 3D Button',
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

