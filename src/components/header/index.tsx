import { useNavigate } from "react-router-dom"
import { Btn, Menu, Wrapper } from "./styles"

const Header = () => {
    const navigate = useNavigate()

    const handleClick = (navigateTo: string) => {
        navigate(`${navigateTo}`)
    }

    return (
        <Wrapper>
            <Btn onClick={() => handleClick("/")}>Home</Btn>

            <Menu>
                <Btn onClick={() => handleClick("/sobre")}>Sobre</Btn>
                <Btn onClick={() => handleClick("/projetos")}>Projetos</Btn>
                <Btn onClick={() => handleClick("/contato")}>Contato</Btn>
            </Menu>
        </Wrapper>
    )
}

export default Header