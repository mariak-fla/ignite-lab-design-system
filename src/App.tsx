import { Brain, Envelope, Key, Lock } from 'phosphor-react';
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
          Beyond<span className="text-green-500">.</span>
        </Heading>
        
        <Text size="lg" className="text-gray-400 mt-1">
          Find a mothership to sweep you off your feet.
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="autologin" className="flex flex-col gap-3">
        <Text className="font-semibold">Auto-login</Text>
          <button className="flex w-full h-12 rounded px-4 items-center place-items-center gap-4 bg-green-300 hover:bg-[#a855f7] text-gray-800 text-xs font-semibold focus:ring-2 ring-white">
          <Brain className="w-6 h-6"/>
          Login with BRAIN-UPLOAD™
          </button>
        </label>

        <Text className="font-semibold text-center"><span className="text-green-500">•••</span> OR <span className="text-green-500">•••</span></Text>

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

        <Button type="submit" className="mt-4 rounded-full">Take me!</Button>
      </form>

      <footer className="flex flex-col items-center gap-2 mt-8">
        <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-gray-200">Forgot your password?</a>
        </Text>
        <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-gray-200">New here? Sign up now!</a>
        </Text>
      </footer>
    </div>
  )
}