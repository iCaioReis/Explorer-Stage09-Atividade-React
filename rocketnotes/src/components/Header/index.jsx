import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header (){
    const { signOut } = useAuth();
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/iCaioReis.png" alt="Imagem do usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Caio Reis</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
};