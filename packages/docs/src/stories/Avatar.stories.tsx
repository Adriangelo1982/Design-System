import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@cadritech-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Adriangelo1982.png',
    alt: 'Adriangelo1982',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as unknown as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
