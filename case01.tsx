// Import React and the type for functional components
import React from 'react';

// 1️⃣ Define a TypeScript interface for the component's props
interface GreetingProps {
  name: string; // 'name' is expected to be a string
}

// 2️⃣ Add the prop type to the component using React.FC
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; // 3️⃣ Uses the typed 'name' prop
};

export default Greeting;
