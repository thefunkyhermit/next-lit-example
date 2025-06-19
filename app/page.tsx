import HelloWorldLoader from './components/HelloWorldLoader';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Lit Web Component Example
        </h1>
        
        <HelloWorldLoader />
        
        <div className="text-center text-gray-600">
          <p className="mb-4">
            This page loads a Lit web component that displays "Hello [Animal]!" 
            where the animal name is randomly selected and passed via a custom event.
          </p>
          <p className="text-sm">
            The component listens for the 'update-hello-world' event and updates 
            its display when the event is received.
          </p>
        </div>
      </div>
    </main>
  );
} 