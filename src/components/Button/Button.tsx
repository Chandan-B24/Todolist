type ButtonProps = {
    children : string,
    className : string,
    handleClick ? : () => void;
}


const Button = (props : ButtonProps) => {
  return (
    <button className={`${props.className}`} onClick= {props.handleClick}>{props.children}</button>
  )
}

export default Button