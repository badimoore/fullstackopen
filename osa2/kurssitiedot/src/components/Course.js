import React from "react"

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

const Header = ({ course }) => (
  <h2>{course}</h2>
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

export default Course