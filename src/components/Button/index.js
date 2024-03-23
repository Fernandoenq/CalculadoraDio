import { ButtonContainer } from "./style"

{ /* dentro do () se chama props */ }
const Button = ({label, onClick}) => {
    
  return (
    <ButtonContainer onClick={onClick}> 
      {label}
    </ButtonContainer>
  )
}

export default Button;