

type HeadingProps = {
    children : string,
    className ?: string
}

const Heading  = (props : HeadingProps) => {
  return (
    <h2 className={`${props.className}`}>{props.children}</h2>
  )
}

export default Heading