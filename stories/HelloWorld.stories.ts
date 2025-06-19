import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Import the JavaScript version of the component
import '../components/HelloWorld.js';

// Simple story that directly renders the web component
const meta: Meta = {
  title: 'Components/HelloWorld',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return React.createElement('div', {}, 
      React.createElement('hello-world', { name: 'World' })
    );
  },
};

export const WithCustomName: Story = {
  render: () => {
    return React.createElement('div', {}, 
      React.createElement('hello-world', { name: 'Lit Framework' })
    );
  },
};

export const WithRandomAnimal: Story = {
  render: () => {
    const animals = [
      'Elephant', 'Giraffe', 'Penguin', 'Dolphin', 'Kangaroo', 
      'Panda', 'Tiger', 'Lion', 'Zebra', 'Gorilla'
    ];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    return React.createElement('div', {}, 
      React.createElement('hello-world', { name: randomAnimal })
    );
  },
}; 