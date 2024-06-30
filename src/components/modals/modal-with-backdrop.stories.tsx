import type { Meta, StoryObj } from '@storybook/react';
import Modal from './modal-with-backdrop';

const meta = {
  title: 'Modals/ Intermediate/ Modal with Backdrop',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
