import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

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

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
};