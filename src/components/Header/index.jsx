import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

import { api } from '../../services/api'

import { useAuth } from '../../hooks/auth'

export function Header(){

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <Profile to='/profile'>
        <img
          src={avatarUrl}
          alt='Foto de perfil do usuário'
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Nome do Usuário</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}