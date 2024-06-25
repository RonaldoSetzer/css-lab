import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './responsive-nav-menu';

const meta = {
  title: 'Navigation/ Responsive Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

