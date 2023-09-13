import type { Meta, StoryObj } from '@storybook/angular';
import { CgFooterComponent } from './cg-footer.component';


const meta: Meta<CgFooterComponent> = {
  component: CgFooterComponent,
  title: 'Footer',
};
export default meta;
type Story = StoryObj<CgFooterComponent>;

export const Primary: Story = {
  args: {},
};

