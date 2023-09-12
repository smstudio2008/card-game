import type { Meta, StoryObj } from '@storybook/angular';
import { CgButtonComponent } from './cg-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CgButtonComponent> = {
  component: CgButtonComponent,
  title: 'Button',
};
export default meta;
type Story = StoryObj<CgButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cg-button works!/gi)).toBeTruthy();
  },
};
