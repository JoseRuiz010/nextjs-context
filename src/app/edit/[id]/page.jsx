
const page = (props) => {
    console.log(props);
    return (
        <div>Editando {props.params.id}</div>
    )
}

export default page