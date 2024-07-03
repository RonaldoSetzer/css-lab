import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './slide-hamburger-menu';

const meta = {
  title: 'Menu/ Intermediate/ Slide Hamburger Menu',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

