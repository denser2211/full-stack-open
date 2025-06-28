const Total = (props) => {
    // This component receives props and displays the part and exercises
    const content = props.parts
    return (
        <>
        <p>Number of exercises {content[0].exercises + content[1].exercises + content[2].exercises}</p>
        </>
    )
}

export default  Total