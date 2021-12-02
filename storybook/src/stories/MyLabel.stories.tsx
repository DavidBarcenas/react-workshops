import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

export default {
  title: 'example/MyLabel',
  component: MyLabel
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Hello World!',
  size: 'normal',
  allCaps: false
}
export const AllCaps = Template.bind({})
AllCaps.args = {
  size: 'normal',
  allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'normal',
  color: 'red'
}