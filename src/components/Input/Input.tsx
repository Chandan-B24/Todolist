type InputProps = {
    className ? : string,
    onChange : (value : string) => void,
    type : string,
    placeholder : string,
    [key : string] : any
}

const Input = (props : InputProps) => {

  const { className, onChange, type, placeholder, ...rest } = props;

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    onChange(e.target.value)
  }


  return (
    <input type={`${type}`} className={`${className}`} placeholder={`${placeholder}`} onChange={handleChange} {...rest}/>
  )
}

export default Input