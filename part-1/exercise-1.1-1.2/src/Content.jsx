import Part from './Part'

const Content = (props) => {
    // This component receives props and passes the content_info to Part component
    const content = props.content_info
    return (
        <>
        <Part name={content[0].part} exercises={content[0].exercises} />
        <Part name={content[1].part} exercises={content[1].exercises} />
        <Part name={content[2].part} exercises={content[2].exercises} />
        </>
    )
}

export default  Content