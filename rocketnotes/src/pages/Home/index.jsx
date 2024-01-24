import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';

export function Home() {

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title={"Todos"} $isactive /></li>
        <li><ButtonText title={"React"} /></li>
        <li><ButtonText title={"Node"} /></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title={"Minhas notas"}>
          <Note data={{
            title: 'React', tags: [
              {id: '1', name: 'React'},
              {id: '2', name: 'JavaScript'},
            ]
          }} />

        </Section>

      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}