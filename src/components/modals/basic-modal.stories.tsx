import type { Meta, StoryObj } from '@storybook/react';
import Modal from './basic-modal';

const meta = {
  title: 'Modals/ Beginner/ Basic Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };


