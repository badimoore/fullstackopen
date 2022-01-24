import React from "react";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  );
}

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
  </>
)

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Content = ({ parts }) => (
  <>
    {parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id} />)}
  </>
)

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

/*
const Total = ({ parts }) => (
  <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
)
*/

export default App;
