import Part from './Parts'

const Content = (props) => {
    // This component receives props and passes the content_info to Part component
    const content = props.parts
    return (
        <div>
            {content.map((part) => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

export default  Content

