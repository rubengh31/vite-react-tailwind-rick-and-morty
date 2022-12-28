export function Image (props:any) {
  return (
    <>
      <img src={props.src} width={props.width} alt={props.name} className={props.className}/>
    </>
  )
}
