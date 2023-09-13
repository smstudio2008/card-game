import type { Meta, StoryObj } from '@storybook/angular';
import { CgButtonComponent } from './cg-button.component';


const meta: Meta<CgButtonComponent> = {
  component: CgButtonComponent,
  title: 'Button',
  argTypes: {
    buttonStyle: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};
export default meta;
type Story = StoryObj<CgButtonComponent>;

export const Primary: Story = {
  args: {
    buttonStyle: 'primary',
    buttonLabel: 'Lets Play',
  },
};

export const Secondary: Story = {
  args: {
    buttonStyle: 'secondary',
    buttonLabel: 'Find',
  },
};
