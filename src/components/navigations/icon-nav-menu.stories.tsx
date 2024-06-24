import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './icon-nav-menu';

const meta = {
  title: 'Navigation/ Icon Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

