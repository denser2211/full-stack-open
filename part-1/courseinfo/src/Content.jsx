import Part from './Part'

const Content = (props) => {
    // This component receives props and passes the content_info to Part component
    console.log(props.parts)
    const content = props.parts
    return (
        <>
        <Part name={content[0].name} exercises={content[0].exercises} />
        <Part name={content[1].name} exercises={content[1].exercises} />
        <Part name={content[2].name} exercises={content[2].exercises} />
        </>
    )
}

export default  Content