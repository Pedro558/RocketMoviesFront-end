import './styles.js'
import { Container, Links } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

export function Details(){
  return(
    <Container>
      <Header></Header>
      <Section title='Links úteis'>
        <Links>
          <li><a href="#">Item x</a></li>
          <li><a href="#">Item x</a></li>
          <li><a href="#">Item x</a></li>
        </Links>
      </Section>
      <Button title = 'Voltar' loading></Button>
      
    </Container>
  )
}