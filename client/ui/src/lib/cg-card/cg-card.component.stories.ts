import type { Meta, StoryObj } from '@storybook/angular';
import { CgCardComponent } from './cg-card.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CgCardComponent> = {
  component: CgCardComponent,
  title: 'CgCardComponent',
};
export default meta;
type Story = StoryObj<CgCardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cg-card works!/gi)).toBeTruthy();
  },
};
