# Lit Web Component Example

This project demonstrates how to create a Lit web component that integrates with a Next.js application. The web component displays "Hello [Animal]!" where the animal name is randomly selected and passed via a custom event.

## Features

- **Lit Web Component**: A beautiful, styled web component built with Lit framework
- **Next.js Integration**: Seamless integration with Next.js using client-side loading
- **Event Communication**: Custom events for communication between Next.js and the web component
- **Storybook**: Complete Storybook setup for component development and testing
- **Tailwind CSS**: Modern styling with Tailwind CSS
- **JavaScript**: Clean JavaScript implementation avoiding Babel decorator issues

## Project Structure

```
├── app/
│   ├── components/
│   │   └── HelloWorldLoader.tsx    # Client component that loads the web component
│   ├── globals.css                 # Global styles with Tailwind CSS
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page
├── components/
│   └── HelloWorld.js               # Lit web component (JavaScript)
├── stories/
│   └── HelloWorld.stories.ts       # Storybook stories
├── .storybook/
│   ├── main.ts                     # Storybook configuration
│   ├── preview.ts                  # Storybook preview settings
│   └── test-runner.ts              # Storybook test runner
├── package.json                    # Dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── next.config.js                 # Next.js configuration
└── tsconfig.json                  # TypeScript configuration (for Next.js)
```

## How It Works

1. **Web Component**: The `HelloWorld` component is a Lit web component that displays a greeting
2. **Event Listening**: The component listens for `update-hello-world` events
3. **Next.js Integration**: The `HelloWorldLoader` component loads the web component and dispatches events
4. **Random Animal**: On page load, a random animal name is selected and sent via a custom event
5. **Dynamic Updates**: The web component updates its display when it receives the event

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Storybook

Run Storybook to view and interact with the web component:

```bash
npm run storybook
```

This will open Storybook at [http://localhost:6006](http://localhost:6006)

## Building for Production

```bash
npm run build
npm start
```

## Key Technologies

- **Lit**: Web component framework
- **Next.js**: React framework for production
- **JavaScript**: Clean implementation avoiding TypeScript decorator issues
- **Tailwind CSS**: Utility-first CSS framework
- **Storybook**: Component development environment

## Event Communication

The application uses custom events for communication:

- **Event Name**: `update-hello-world`
- **Event Detail**: `{ name: string }`
- **Direction**: Next.js → Web Component

Example:
```javascript
const event = new CustomEvent('update-hello-world', {
  detail: { name: 'Elephant' }
});
window.dispatchEvent(event);
```

## Customization

You can easily customize the web component by:

1. Modifying the styles in `components/HelloWorld.js`
2. Adding new properties to the component
3. Creating new stories in `stories/HelloWorld.stories.ts`
4. Changing the animal list in `app/components/HelloWorldLoader.tsx`

## Technical Notes

- The Lit component is written in JavaScript to avoid Babel decorator configuration issues
- Storybook is configured to work seamlessly with the JavaScript component
- The project maintains TypeScript support for Next.js components while using JavaScript for the Lit component 