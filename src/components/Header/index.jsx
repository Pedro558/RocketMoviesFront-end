import { Container, Profile } from './styles'

export function Header(){
  return(
    <Container>
      <Profile>
        <img
          src='https://github.com/Pedro558.png'
          alt='Foto de perfil do usuário'
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Nome do Usuário</strong>
        </div>
      </Profile>
    </Container>
  )
}