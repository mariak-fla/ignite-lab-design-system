import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { SignIn } from './SignIn'

export default {
    title: 'Pages/Sign in', 
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText("Your e-mail address"), "mariak.fla@gmail.com")
        userEvent.type(canvas.getByPlaceholderText("********"), "senha123")

        userEvent.click(canvas.getByDisplayValue('submit'))

        await waitFor(() => {
            return expect(canvas.getByText("Login successful!")).toBeInTheDocument()
        })
    }
}