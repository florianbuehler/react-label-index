import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelIndex from './LabelIndex';
import { stockLabels } from '../../../.storybook/assets/data';

export default {
  title: 'Label Index',
  component: LabelIndex
} as ComponentMeta<typeof LabelIndex>;

const Template: ComponentStory<typeof LabelIndex> = (args) => <LabelIndex {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'title',
  labels: stockLabels
};
