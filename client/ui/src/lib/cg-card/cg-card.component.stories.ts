import type { Meta, StoryObj } from '@storybook/angular';
import { CgCardComponent } from './cg-card.component';

const meta: Meta<CgCardComponent> = {
  title: 'Card',
  component: CgCardComponent,
  argTypes: {
    card: {
      options: [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'JOKER',
        'Q',
        'K',
      ],
      control: { type: 'select' },
    },
    suit: {
      options: ['hearts', 'diamonds', 'clubs', 'joker', 'spades'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<CgCardComponent>;

export const Primary: Story = {
  args: {
    card: 'A',
    suit: 'hearts',
  },
};
