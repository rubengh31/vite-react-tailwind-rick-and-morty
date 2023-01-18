export default function GenericInput({
  name = undefined,
  id = undefined,
  className = undefined,
  placeholder = undefined,
  type = undefined,
  value = undefined,
  onClick = undefined,
  onChange = undefined
}: any) {
  return (
    <>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {name}
      </label>
      <input
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onClick={onClick}
        onChange={onChange}
      />
    </>
  );
}
