import type { Meta, StoryObj } from '@storybook/angular';
import { CgNavComponent } from './cg-nav.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CgNavComponent> = {
  component: CgNavComponent,
  title: 'Navigation Bar',
};
export default meta;
type Story = StoryObj<CgNavComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cg-nav works!/gi)).toBeTruthy();
  },
};
