import Header from './Headers'
import Content from './Contents'
import Total from './Total'

const Course = ({ course }) =>  {

  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </div>
  )

}

export default Course
