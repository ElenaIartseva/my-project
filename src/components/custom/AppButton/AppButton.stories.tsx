import type { Meta, StoryObj } from '@storybook/react';
import AppButton, { AppButtonVariant, ComponentType } from './AppButton';

const meta: Meta<typeof AppButton> = {
  component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Text: Story = {
  args: {
    text: 'Text',
    variant: AppButtonVariant.TEXT,
    componentType: ComponentType.button,
  },
};

export const TextDisabled: Story = {
  args: {
    text: 'TextDisabled',
    variant: AppButtonVariant.TEXT,
    isDisabled: true,
    componentType: ComponentType.button,
  },
};

export const Outlined: Story = {
  args: {
    text: 'Outlined',
    variant: AppButtonVariant.OUTLINED,
    componentType: ComponentType.button,
  },
};

export const Contained: Story = {
  args: {
    text: 'Contained',
    variant: AppButtonVariant.CONTAINED,
    componentType: ComponentType.button,
  },
};

export const TextLink: Story = {
  args: {
    text: 'Link`s Text',
    variant: AppButtonVariant.TEXT,
    componentType: ComponentType.link,
    to: '/testPath',
    isTextVisible: true,
    hasPathIcon: true,
  },
};
