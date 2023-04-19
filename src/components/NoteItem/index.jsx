import { FiPlus, FiX } from 'react-icons';

import { Container } from './styles'

export function NoteItem({ isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button onClick={onClick}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}