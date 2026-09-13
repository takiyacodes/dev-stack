# DevStack - Technology Stack Management

A modern web application built for managing and showcasing technology stacks efficiently.

## Features
- *Interactive Tech Stack Selection:* Easily add or remove technology cards to build custom stack lists.
- *Dynamic Toast Notifications:* Real-time feedback and state alerts integrated with React Toastify.
- *Responsive & Modern UI:* Styled using Tailwind CSS with gradient components for a smooth user experience.

## Technologies Used
- React.js
- TypeScript
- Tailwind CSS
- React Toastify
- Vite

## Live Site
- Live Link: https://dev-stack-ebon.vercel.app/

---

## React Questions & Answers

 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML code inside JavaScript. It makes creating and structuring UI components easier and more readable.

 2. What is the difference between props and state?
- *Props:* Data passed from a parent component to a child component (read-only/immutable).
- *State:* Data managed internally within a component that can change over time (mutable).

 3. What does the useState hook do, and where did you use it in this project?
useState manages dynamic state in functional components. In this project, it is used in App.tsx to keep track of selected tech stack items and handle loading states.

 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect performs side effects in components. It is used here to fetch the technology stack JSON data asynchronously when the component first mounts.

 5. Why does every item in a .map() list need a unique key prop?
The key prop helps React identify which items have changed, been added, or removed. It optimizes performance during the Virtual DOM re-rendering process.

 6. What is conditional rendering? Show one place you used it.
Conditional rendering displays elements based on specific conditions. In this project, it shows an "Empty Stack" message when no technologies are added to the list.

 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- *Parent to Child:* Data is passed down via props.
- *Child to Parent:* The parent passes a function via props, which the child component calls with data as arguments.

