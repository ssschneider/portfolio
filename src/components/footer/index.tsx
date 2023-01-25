import { Copyright } from "phosphor-react"
import { Name, Wrapper } from "./styles"

const Footer = () => {
    return (
        <Wrapper>
            <Copyright size={16} />
            <Name>
                2023 | Sarah Schneider | Todos os direitos reservados
            </Name>
        </Wrapper>
    )
}

export default Footer