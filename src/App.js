import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row } from './styles'
import { useState, useEffect } from 'react'



const App = () => { 
  const [CurrentNumber, SetCurrentNumber] = useState('0');
  const [firstNumber, setfirstNumber] = useState('0');
  const [Operation, setOperation] = useState('');
  const [EnCount, setEnCount] = useState(false);
  const [Lastvalor, setLastvalor] = useState('Histório');

  const hanleOnClear = () => {
    SetCurrentNumber('0')
    setfirstNumber('0')
    setOperation('')
  }

  const hanleAddNumber = (num) => {
    if(EnCount){
      hanleOnClear();
      setEnCount(false);
    }
    SetCurrentNumber(prev => `${prev == '0' ? '': prev}${num}`)
  }

  const hanleSumNumbers = () => {
    if(firstNumber == '0'){ 
      setfirstNumber(String(CurrentNumber));
      SetCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(CurrentNumber);
      SetCurrentNumber(String(sum));
      setLastvalor(` ${firstNumber} + ${CurrentNumber}`)
      setOperation('');
      setEnCount(true);
    }
  }

  const hanleMinusNumbers = () => {
    if(firstNumber == '0'){
      setfirstNumber(String(CurrentNumber));
      SetCurrentNumber('0');
      setOperation('-');
    }else{
      const sum = Number(firstNumber) - Number(CurrentNumber);
      SetCurrentNumber(String(sum))
      setLastvalor(`${firstNumber} - ${CurrentNumber}`)
      setOperation('');
      setEnCount(true);
    }
  }

  const hanleDivsNumbers = () => {
    if(firstNumber == '0'){
      setfirstNumber(String(CurrentNumber));
      SetCurrentNumber('0');
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(CurrentNumber);
      SetCurrentNumber(String(sum))
      setLastvalor(`${firstNumber} / ${CurrentNumber}`)
      setOperation('');
      setEnCount(true);
    }
  }

  const hanleMultNumbers = () => {
    if(firstNumber == '0'){
      setfirstNumber(String(CurrentNumber));
      SetCurrentNumber('0');
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(CurrentNumber);
      SetCurrentNumber(String(sum))
      setLastvalor(`${firstNumber} * ${CurrentNumber}`)
      setOperation('')
      setEnCount(true);
    }
  }
  useEffect(() => {
    console.log(Lastvalor);
  }, [Lastvalor]);

  const handleEquals = () => {
    if(firstNumber != '0' && Operation != '' && CurrentNumber != '0'){
      switch(Operation){
        case '+':
          hanleSumNumbers();
          break;

        case '-':
          hanleMinusNumbers();
          break;
        
        case '/':
          hanleDivsNumbers();
          break;

        case '*':
          hanleMultNumbers();
          break;

        default: 
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={CurrentNumber}/>

        <Row>
          <Button label="x" onClick={hanleMultNumbers}/>
          <Button label="/" onClick={hanleDivsNumbers}/>
          <Button label="C" onClick={hanleOnClear}/>
        </Row>

        <Row>
          <Button label="7" onClick={() => hanleAddNumber('7')}/>
          <Button label="8" onClick={() => hanleAddNumber('8')}/>
          <Button label="9" onClick={() => hanleAddNumber('9')}/>
          <Button label="-" onClick={hanleMinusNumbers}/>
        </Row>

        <Row>
          
          <Button label="4" onClick={() => hanleAddNumber('4')}/>
          <Button label="5" onClick={() => hanleAddNumber('5')}/>
          <Button label="6" onClick={() => hanleAddNumber('6')}/>
          <Button label="+" onClick={hanleSumNumbers}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => hanleAddNumber('1')}/>
          <Button label="2" onClick={() => hanleAddNumber('2')}/>
          <Button label="3" onClick={() => hanleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>

        <Input value={Lastvalor} color={"#B0E0E6"}/>
        
      </Content>
    </Container>
  );
}

export default App;
