import { Envelope, Key, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        
        <Heading size="lg" className="mt-4">
          Beyond<span className="text-cyan-500">.</span>
        </Heading>
        
        <Text size="lg" className="text-gray-400 mt-1">
          Find a mothership to sweep you off your feet.
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">E-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Your e-mail address" />
          </TextInput.Root>
        </label>
        
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Key />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="terms" className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Text size="sm" className="text-gray-200">I accept terms and conditions</Text>
        </label>

        <Button type="submit" className="mt-4">Take me!</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-cyan-300">Forgot your password?</a>
        </Text>
        <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-cyan-300">New here? Sign up now!</a>
        </Text>
      </footer>
    </div>
  )
}