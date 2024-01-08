import { Container } from './styles.js';

import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button';

export function Datails(){
  
  return(
    <Container>
      <Header></Header>
      <Button title="Voltar"/>
    </Container>
  )
}