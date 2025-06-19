import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef } from 'react';
import React from 'react';

// Import the TypeScript version of the component
import '../components/HelloWorld';

// React wrapper component for the web component
const HelloWorldWrapper = ({ name }: { name?: string }) => {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    if (elementRef.current && name) {
      elementRef.current.setAttribute('name', name);
    }
  }, [name]);

  return React.createElement('hello-world', { ref: elementRef });
};

const meta: Meta<typeof HelloWorldWrapper> = {
  title: 'Components/HelloWorld',
  component: HelloWorldWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'The name to display in the greeting',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'World',
  },
};

export const WithCustomName: Story = {
  args: {
    name: 'Lit Framework',
  },
};

export const WithRandomAnimal: Story = {
  args: {},
  render: () => {
    const animals = [
      'Elephant', 'Giraffe', 'Penguin', 'Dolphin', 'Kangaroo', 
      'Panda', 'Tiger', 'Lion', 'Zebra', 'Gorilla'
    ];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    return React.createElement(HelloWorldWrapper, { name: randomAnimal });
  },
}; 