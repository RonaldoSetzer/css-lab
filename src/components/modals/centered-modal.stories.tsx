import type { Meta, StoryObj } from '@storybook/react';
import Modal from './centered-modal';

const meta = {
  title: 'Modals/ Beginner/ Centered Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

