import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './submenu-nav-menu.tsx';

const meta = {
  title: 'Navigation/ Menu with Submenu',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
