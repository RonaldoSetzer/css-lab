import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './color-change-hamburger-menu';

const meta = {
  title: 'Menu/ Beginner/ Color Change Hamburger Menu',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

