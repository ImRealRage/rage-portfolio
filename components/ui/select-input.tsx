import { FC } from "react";

interface SelectInputProps {
  type: "checkbox" | "radio";
  id: string;
  text: string;
  selectedOptions: string[];
  setSelectedOptions: (newValue: string[]) => void;
  allowMultiple?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
  type,
  id,
  text,
  selectedOptions,
  setSelectedOptions,
  allowMultiple,
}) => {
  const handleOptionChange = (option: string) => {
    if (allowMultiple) {
      const curremtIndex = selectedOptions.indexOf(option);
      const newSelectedOptions = [...selectedOptions];
      if (curremtIndex === -1) {
        newSelectedOptions.push(option);
      } else {
        newSelectedOptions.splice(curremtIndex, 1);
      }
      setSelectedOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = [option];
      setSelectedOptions(newSelectedOptions);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectedOptions.includes(id)}
        onChange={() => handleOptionChange(id)}
        className="w-[15px] h-[15px] !rounded !bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default SelectInput;
