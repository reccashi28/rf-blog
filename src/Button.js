
const Button = (count, setCount) => {
    return(
        <button onClick={ () => {
            setCount()
        }}>Click Me!</button>
    );
}

export default Button;