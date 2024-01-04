import { Container } from './styles.js';
import { Button } from '../../components/Button';

export function Datails(){
  
  return(
    <Container>
      <h1>Hello Word</h1>
      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}