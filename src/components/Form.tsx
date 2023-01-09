export default function Form(props: any) {
  return (
    <>
      <form className={props.className} onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </>
  );
}
