import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './hamburger-3d-menu';

const meta = {
  title: 'Menu/ Advanced/ Hamburger 3D Menu',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

