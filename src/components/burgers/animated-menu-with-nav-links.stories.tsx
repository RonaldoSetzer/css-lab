import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './animated-menu-with-nav-links';

const meta = {
  title: 'Menu/ Intermediate/ Animated Menu with Nav Links',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

