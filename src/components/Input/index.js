import { InputContainer } from "./style"
const Input = ({value, color}) => {

  const inputStyle = {
    backgroundColor: color || "#40E0D0",
    textAlign: "center",
  };

  return (
    <InputContainer> 
      <input disabled style={inputStyle} value={value} />
    </InputContainer>
  );
}

export default Input;