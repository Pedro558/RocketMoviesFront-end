import { useState } from 'react'

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom'

import { Container, Form } from "./styles";

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")
  
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')

  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to='/'>voltar</Link>
          </header>

          <Input placeholder='Título' />
          <Textarea placeholder='Observações' />

          <Section title='Links úteis'>
            {
              links.map((link, index) => (
                <NoteItem
                  key={index}
                  value={link}  
                  onClick={() => handleRemoveLink(link)}
                />
                )
              )
            }
            
            <NoteItem 
              isNew
              placeholder='Novo link'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              />
          </Section>

          <Section title='Marcadores'>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={index}
                    value={tag}
                    
                  />
                ))
              }

              <NoteItem value='react'/>
              <NoteItem 
                isNew
                placeholder='Nova tag'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title='Salvar'/>
        </Form>
      </main>
    </Container>
  );
}
