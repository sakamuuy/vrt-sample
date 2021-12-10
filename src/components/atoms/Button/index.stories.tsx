import { Story } from '@storybook/react'
import { Button, Props } from '.'


export default {
  title: 'components/atoms/Button',
  component: Button,
}

const Template: Story<Props> = (arg) => <Button {...arg}>label2</Button>

export const Normal = Template.bind({})
