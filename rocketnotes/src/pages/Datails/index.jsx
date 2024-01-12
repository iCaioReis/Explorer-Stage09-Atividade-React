import { Container, Links } from './styles.js';

import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section/index.jsx';

export function Datails(){
  
  return(
    <Container>
      <Header></Header>
      <Section title={"Links úteis"}>
        <Links>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 1</a></li>
        </Links>
        
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}