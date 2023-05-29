import { useState } from 'react'

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')  

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")
  
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

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

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    try {
      if(!title){
        return alert('Digite o título da nota')
      }
      
      if(newLink){
        return alert('Link não preenchido adequadamente')
      }

      if(newTag){
        return alert('Tag não preenchida adequadamente')
      }


      await api.post('/notes', {
        title,
        description,
        tags,
        links
      })

      alert('Nota criada com sucesso')
      navigate('/')
    } catch (error) {
      console.log(error)
      alert(`Algo deu errado: ${error.message}`)
    }
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

          <Input 
            placeholder='Título' 
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea 
            placeholder='Observações' 
            onChange={e => setDescription(e.target.value)}
          />

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
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              
              <NoteItem 
                isNew
                placeholder='Nova tag'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title='Salvar' 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  );
}
