const Part = (props) => {
    // This component receives props and displays the part and exercises
    return (
        <>
        <p>
            {props.name} {props.exercises}
        </p>
        </>
    )
}

export default  Part