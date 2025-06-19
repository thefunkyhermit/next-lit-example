'use client';

import { useEffect, useRef } from 'react';

// List of random animals
const animals = [
  'Elephant', 'Giraffe', 'Penguin', 'Dolphin', 'Kangaroo', 
  'Panda', 'Tiger', 'Lion', 'Zebra', 'Gorilla',
  'Octopus', 'Butterfly', 'Eagle', 'Shark', 'Koala',
  'Polar Bear', 'Wolf', 'Fox', 'Deer', 'Rabbit'
];

export default function HelloWorldLoader() {
  const componentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Import the web component
    import('../../components/HelloWorld').then(() => {
      // Wait for the component to be defined
      customElements.whenDefined('hello-world').then(() => {
        // Post the update-hello-world event with a random animal
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        
        const event = new CustomEvent('update-hello-world', {
          detail: { name: randomAnimal }
        });
        
        window.dispatchEvent(event);
      });
    });
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <hello-world ref={componentRef}></hello-world>
    </div>
  );
} 