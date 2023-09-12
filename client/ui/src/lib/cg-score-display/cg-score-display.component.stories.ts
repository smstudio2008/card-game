import type { Meta, StoryObj } from '@storybook/angular';
import { CgScoreDisplayComponent } from './cg-score-display.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CgScoreDisplayComponent> = {
  component: CgScoreDisplayComponent,
  title: 'Score Display',
};
export default meta;
type Story = StoryObj<CgScoreDisplayComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cg-score-display works!/gi)).toBeTruthy();
  },
};
