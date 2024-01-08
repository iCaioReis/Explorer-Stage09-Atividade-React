import { Container, Profile } from "./styles";

export function Header (){
    return (
        <Container>
            <Profile>
                <img src="https://github.com/iCaioReis.png" alt="Imagem do usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Caio Reis</strong>
                </div>
            </Profile>

        </Container>
    );
};