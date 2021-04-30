# Basic counter app that uses Redux

## Notes
- Redux is a library to easily manage state in your JavaScript Apps
- Let's say you have some DATA that is your required in many components of our React App. As we know that React App can be visualised like having a tree like data  structure, `<App />` being at the root.
- Let's say we have N levels of this Tree. And there can be different number of childrens at each individual level. And assuming different combinations of these children taken together require some DATA. And they combinations of children can view this data or even update it. [data is stored in state, so these children can get the current state or even update it]. So how can we do this ?   

1 - Either by a concept called lifting the state up. In simple terms let's say `<App />` component has 2 child components called `<Child1 />` & `<Child2 />`.And both these require DATA. So we can create a state variable in App compontent and then `<App />` component can pass the DATA and functions to child components as props so that they can update these. 

2 - We can also use [useContext](https://reactjs.org/docs/hooks-overview.html) hook to access state variables of App inside any Nth level Child of App component. Advantage of this his we don't need to pass props at all N levels so that Nth level child can finally use them
- So above 2 methods can  solve most of the problems. And in situations where the App is too big and complex in terms of managing the state. [Redux](https://redux.js.org/) comes to the rescue to simplify things.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

