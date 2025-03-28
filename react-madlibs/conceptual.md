### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library used to build the front end of an app or website. I would use this to build dynamic web applications or single page applications. 

- What is Babel?
Babel is a compiler that transforms JavaScript and JSX into backward compatible Javascript. This will allow you to write modern code without worrying about browser compatibility. 

- What is JSX?
JSX is a syntax extension that allows you to write HTML like code within React to describe what the UI should look like. 

- How is a Component created in React?
Its a JavaScript function that returns JSX.

- What are some difference between state and props?
State is managed within the component and controls its behavior using useState.
Props are passed from the parent component to a child. They are used to pass data and configurations, and are immutable. 

- What does "downward data flow" refer to in React?
This is refering to props passing down data. This can help with better control and predictability in how the UI updates. 

- What is a controlled component?
Its a form element whos value is managed by React state. 

- What is an uncontrolled component?
Its a form element that maintains its own state. Instead of using useState you would access the value by using useRef.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop helps React identify which items in a list have changed, been added, or removed. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using an array index as a key can cause issues when the list is reordered or modified, leading to incorrect updates, bugs and unintentional renders. 

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a React hook. Hooks allow you to perform side effects in a component. It runs after the render and be used to fetch date from an API, assigning or cleaning up listeners or updating the DOM. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef creates a mutable object that persists across renders. Changing a ref value does not cause a re-render.

- When would you use a ref? When wouldn't you use one?
You can use a ref to access DOM elements directly, storing values that do not require re-render and managing 3rd party libraries or animations. 

You should not use a ref for storing dynamic data that should update the UI, or replacing props and state. 

- What is a custom hook in React? When would you want to write one?
A custom hook is a reusable function that holds shared logic across components using React hooks. Its used to avoid code duplication and simplify complex functionality, such as managing forms or fetching data.
