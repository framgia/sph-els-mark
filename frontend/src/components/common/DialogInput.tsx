interface DialogInputProps {
  id: string;
  defaultValue: string;
  value: string;
  type: string;
}

const DialogInput: React.FC<DialogInputProps> = ({
  defaultValue,
  type,
  value,
  id,
}) => {
  return (
    <>
      <fieldset className="mb-[15px] flex items-center gap-5">
        <label
          className=" w-[100px] text-right text-[13px] font-bold   text-gray-800"
          htmlFor={id}
        >
          {value}
        </label>
        <input
          className="border-b-[1px] p-2  border-gray-500 text-gray-800  outline-none"
          type={type}
          id={id}
          defaultValue={defaultValue}
        />
      </fieldset>
    </>
  );
};
export default DialogInput;
