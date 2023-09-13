import type { Meta, StoryObj } from '@storybook/angular';
import { CgNavComponent } from './cg-nav.component';


const meta: Meta<CgNavComponent> = {
  component: CgNavComponent,
  title: 'Navigation Bar',
};
export default meta;
type Story = StoryObj<CgNavComponent>;

export const Primary: Story = {
  args: {
    navLabel: "CARD GAME SCORE CALCULATOR"
  }
};

