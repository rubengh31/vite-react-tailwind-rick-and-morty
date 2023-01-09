export default function GenericInput(props: any) {
  return (
    <>
      <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.name}
      </label>
      <input
        name={props.name}
        id={props.id}
        className={props.className}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
      />
    </>
  );
}
