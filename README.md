# IT313 React State and Hooks

## Student
Tifanny Hadap

## Course
IT313 - Mobile Programming

## Project
React State & Hooks in Action

## Problem

This project demonstrates how React state and hooks can be used to create an interactive practice tracker and stopwatch. The practice tracker counts solved tasks, while the stopwatch tracks the time while practicing.

## Approach

The application uses React Native functional components and manages shared state in the LabScreen component.

The project includes:

- A PracticeTracker component
- A Stopwatch component
- A custom useStopwatch hook
- State management using useState
- Side effects using useEffect
- Conditional rendering
- Event handling
- Effect cleanup using clearInterval
- Lifting state up

The PracticeTracker and Stopwatch receive their data and event handlers from the parent LabScreen component.

## React Concepts Used

### useState

useState is used to store the solved count, stopwatch seconds, and running status.

### useEffect

useEffect is used to control the stopwatch interval when the timer is running.

### Custom Hook

The useStopwatch custom hook contains the stopwatch logic and tracks the elapsed time.

### Conditional Rendering

The application displays "Great job!" when five or more tasks are solved and changes the stopwatch status between "Running..." and "Paused."

### Event Handling

Button presses use function references to trigger actions such as solving, resetting, starting, and stopping.

### Lifting State Up

The shared state is managed by LabScreen and passed to the PracticeTracker and Stopwatch components through props.

### Cleanup

clearInterval is used to stop the timer interval when the stopwatch is stopped or the component is unmounted.

## How to Run

Install the project dependencies:

```bash
npm install