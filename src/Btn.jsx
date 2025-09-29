const Btn = (props) => {
    const {titolo, index} = props

    return (
        <button id={index}  className="btn">{titolo}</button>

    )
}

export default Btn