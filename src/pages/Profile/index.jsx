import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Avatar } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'


export function Profile(){
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  return(
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Pedro558.png" alt="Foto de perfil do pedro" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input id='avatar' type="file" />
          </label>
        </Avatar>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder='E-mail'
          type='email'
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder='Senha Atual'
          type='password'
          icon={FiLock}
        />

        <Input
          placeholder='Nova Senha'
          type='password'
          icon={FiLock}
        />

        <Button title='Salvar'/>

      </Form>
    </Container>
  )
}