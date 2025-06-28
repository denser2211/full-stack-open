import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const content_info = [{part:'Fundamentals of React', exercises: 10},
                        {part:'Using props to pass data', exercises: 7},
                        {part:'State of a component', exercises: 14}] 

  return (
    <div>
      <Header course_name={course} />
      <Content content_info={content_info} />
      <Total content_info={content_info} />
    </div>
  )
}

export default App
