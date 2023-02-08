## Description

Simple apllication with a context based on Refs and subscriber pattern, provides data with use of getters, setters and subscribers.
The `context` folder contains one file with context provider and hook for using the context (all in one file).
The context is utilixed in `<TextInput>` components and `<DisplayValue>` components with the use of useStore custom hook.
This hook requires a function as an argument, a selector that would select the value from the store (exactly similar to the one in Redux / useSelector hook).

## Optimization

Because the contsext is based on refs and only the useStore hook uses state, only `<TextInput>` and `<DisplayValue>` components re-render with change;

## Special components

src
|_ context
|   |_ storeContext.jsx <- here is the context provider and custom hook with selector option
|
|_ components
    |_ DisplayValue.jsx <- these components utilize the selector hook and only those re-render
    |_ TextInput.jsx
