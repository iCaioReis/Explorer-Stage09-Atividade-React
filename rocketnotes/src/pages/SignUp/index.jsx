import { useState } from "react"; //Criar estados para capturar dados digitados
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom"; //useNavigate para ir para outra rota automaticamente.

export function signUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handlesignUP (){
        if(!name || !name || !password){
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível cadastrar. Tente novamente!")
            }
        })
    }

    return(
        <Container>
            <Background></Background>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={ event => setName(event.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={ event => setEmail(event.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={ event => setPassword(event.target.value)}
                />

                <Button title={"Criar"} onClick={handlesignUP}/>

                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>
        </Container>
    );
}