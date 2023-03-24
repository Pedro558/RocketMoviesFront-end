import './styles.js'
import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
      <Content>
        <ButtonText title='Excluir nota'/>

        <h1>Introdução ao React</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, omnis! Architecto deleniti quos qui obcaecati voluptates excepturi quasi ratione modi pariatur ut aut officiis totam exercitationem laboriosam corporis, est iusto!
        Repellat, quas! Amet id ipsam expedita exercitationem numquam quae odio rem sit accusamus nulla ducimus voluptatum, velit, fugiat a vel voluptates nisi iure excepturi ipsa quia ea animi sunt? Sint.
        Provident eaque itaque quasi! Pariatur saepe in consequuntur vero, atque nobis cupiditate repellendus soluta earum similique odio! Consequatur saepe libero modi tempore consequuntur, dolor, dolorem doloribus non tempora, commodi quisquam!
        Totam veritatis, doloremque autem quos quaerat sed accusantium soluta facere voluptatibus corrupti officia maiores aspernatur iusto est qui error aut velit placeat at rerum consequatur unde? Fugit veniam officiis suscipit?
        Deserunt hic quo reiciendis itaque, expedita dignissimos magnam fuga fugit perferendis quod vero, laudantium cumque commodi atque cum? Voluptatum dolores non ex cum quidem atque eos eligendi, tempora voluptatem laborum!
        </p>

        <Section title='Links úteis'>
          <Links>
            <li><a href="#">https://www.rocketseat.com.br/</a></li>
            <li><a href="#">https://www.rocketseat.com.br/</a></li>
          </Links>
        </Section>

        <Section title='Marcadores'>
          <Tag title='express'/>
          <Tag title='node'/>
        </Section>

        <Button title = 'Voltar' loading></Button>
      </Content>
      </main>
    </Container>
  )
}