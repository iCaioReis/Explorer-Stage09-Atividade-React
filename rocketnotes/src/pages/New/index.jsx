import { Container, Form } from "./styles";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

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


                    <Input placeholder="Titulo" />
                    <Input placeholder="Observações" />

                    <Section title={"Links úteis"} />

                    <Button title={"Salvar"} />
                </Form>
            </main>

        </Container>
    );
};