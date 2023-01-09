export default function GenericInput(props: any) {
  return (
    <input className={props.className} onClick={props.onClick} placeholder={props.placeholder} type={props.type} value={props.value} />
  );
}
