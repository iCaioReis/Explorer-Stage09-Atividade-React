import { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { api } from '../../services/api.js';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if(tagName === "all"){
      return setTagsSelected("");
    }

    const alredySelected = tagsSelected.includes(tagName);

    if (alredySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const res = await api.get("/tags");
      setTags(res.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fethNotes() {
      const res = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(res.data);
    }
    console.log(notes)

    fethNotes();
  }, [tagsSelected, search]); //O useEffect é executado cada vez que as variáveis tagsSelected ou search forem modificadas.

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
          tags && tags.map(tag => (
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
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title={"Minhas notas"}>
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }

        </Section>

      </Content>

      <NewNote to={"/new"}>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}