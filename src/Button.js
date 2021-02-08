
const Button = (props) => {
    return(
        <button onClick={ () => {
            setCount( count + 1 )
          }}>Click Me!</button>
    );
}