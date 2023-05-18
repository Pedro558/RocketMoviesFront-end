import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
  return(
    <Container>
        <Brand>
          <h1>RocketNotes</h1>
        </Brand>

        <Header/>

        <Menu>
          <li><ButtonText title='Todxs'></ButtonText></li>
          <li><ButtonText  isActive={true} title='Todos'></ButtonText></li>
          <li><ButtonText title='Todas'></ButtonText></li>
        </Menu>

        <Search>
          <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
        </Search>

        <Content>
          <Section title='Minhas notas'>
            <Note data={{
              title: 'React',
              tags: [
                {id: '1', name: 'TagName'},
                {id: '2', name: 'TagName'},
                {id: '3', name: 'TagName'}
              ]
            }}/>

          <Note data={{
              title: 'React',
              tags: [
                {id: '1', name: 'TagName'},
                {id: '2', name: 'TagName'},
                {id: '3', name: 'TagName'}
              ]
            }}/>

          <Note data={{
              title: 'React',
              tags: [
                {id: '1', name: 'TagName'},
                {id: '2', name: 'TagName'},
                {id: '3', name: 'TagName'}
              ]
            }}/>
            
          </Section>

          
        </Content>

        <NewNote to='/new'>
          <FiPlus/>
          Criar Nota
        </NewNote>
    </Container>
  )
}