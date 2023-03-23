import React, { useState } from 'react'
import { Container } from './styles'

export function Button({title, ...rest}){
  const [loading, setLoading] = useState(false);

  function handleClick(){
    setLoading(true);
  }
  
  return(
    <Container
      type='button'
      disabled={loading}
      onClick={handleClick}
      {...rest}
     >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}