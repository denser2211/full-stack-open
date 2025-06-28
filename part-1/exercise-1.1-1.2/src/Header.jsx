const Header = (props) => {
    // This component receives props and displays the course name
    return (
        <>
        <h1>{props.course_name}</h1>
        </>
    )
}

export default  Header