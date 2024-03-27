import { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { api } from '../../services/api.js';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName){
    const alredySelected = tagsSelected.includes(tagName);

    if(alredySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    }else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags (){
      const res =  await api.get("/tags");
      setTags(res.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText 
          title={"Todos"}
          $isactive={tagsSelected.length === 0}
          onClick={() => handleTagSelected("all")}
        /></li>
        {
          tags && tags.map( tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
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

      <NewNote to={"/new"}>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}