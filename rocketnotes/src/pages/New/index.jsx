import { Container, Form } from "./styles";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>

                    <Section title={"Links úteis"}>
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem value="" isNew placeholder={"Novo Link"}/>
                    </Section>
                    <Button title={"Salvar"} />
                </Form>
            </main>

        </Container>
    );
};