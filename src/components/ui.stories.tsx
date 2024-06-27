import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './ui';

const meta = {
  title: 'ui/ LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Link Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Link Button',
  },
};

