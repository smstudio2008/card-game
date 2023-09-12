import type { Meta, StoryObj } from '@storybook/angular';
import { CgFooterComponent } from './cg-footer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CgFooterComponent> = {
  component: CgFooterComponent,
  title: 'Footer',
};
export default meta;
type Story = StoryObj<CgFooterComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cg-footer works!/gi)).toBeTruthy();
  },
};
