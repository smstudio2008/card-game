import type { Meta, StoryObj } from '@storybook/angular';
import { CgScoreDisplayComponent } from './cg-score-display.component';

const meta: Meta<CgScoreDisplayComponent> = {
  component: CgScoreDisplayComponent,
  title: 'Score Display',
};
export default meta;

type Story = StoryObj<CgScoreDisplayComponent>;

export const Primary: Story = {
  args: {
    countTo: 100,
  },
};
