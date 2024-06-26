import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './iconed-nav-menu';

const meta = {
  title: 'Navigation/ Iconed Nav Menu',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
