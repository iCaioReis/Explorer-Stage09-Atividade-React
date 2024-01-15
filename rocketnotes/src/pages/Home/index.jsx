import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';

import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';

export function Home() {

  return (
    <Container>
        <Brand>
            <h1>RocketNotes</h1>
        </Brand>

        <Header/>

        <Menu>
          <li><ButtonText title={"Todos"} $isactive/></li>
          <li><ButtonText title={"React"}/></li>
          <li><ButtonText title={"Node"}/></li>

        </Menu>

        <Search>

        </Search>

        <Content>

        </Content>

        <NewNote>
          <FiPlus/>
          Criar nota
        </NewNote>
    </Container>
  )
}