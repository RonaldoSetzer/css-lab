import type { Meta, StoryObj } from '@storybook/react';
import Modal from './modal-with-animation';

const meta = {
  title: 'Modals/ Advanced/ Modal with Animation',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

