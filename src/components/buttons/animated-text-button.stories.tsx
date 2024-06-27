import type { Meta, StoryObj } from '@storybook/react';
import Button from './animated-text-button';

const meta = {
  title: 'Buttons/ Advanced/ Animated Text Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Animated Text Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Animated Text Button',
  },
};

