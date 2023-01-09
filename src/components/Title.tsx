export default function Title(props: any) {
  let title;

  if (props.type === 'h1') title = <h1 className={props.className}>{props.title}</h1>;
  if (props.type === 'h2') title = <h2 className={props.className}>{props.title}</h2>;
  if (props.type === 'h3') title = <h3 className={props.className}>{props.title}</h3>;
  return <>{title}</>;
}
