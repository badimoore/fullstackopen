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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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
    <Total parts={course.parts} />
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


const Total = ({ parts }) => (
  <p><b>
    total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
  </b></p>
)

export default App;
