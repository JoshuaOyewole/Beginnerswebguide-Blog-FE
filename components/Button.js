const Button = (props) => {
    const {text, cName,link} = props
    return (
        <>
            <a className={cName} to={link}>{text}</a>
        </>
    )
}

export default Button