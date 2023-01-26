import { Play, Alien } from "phosphor-react"
import { Wrapper, Text, Btn } from "./styles"

interface InteractionProps {
    text: string;
    label: any;
    onClick?: () => void;
}

const Interaction = ({ text, label, onClick }: InteractionProps) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
            <Btn onClick={onClick}>
                {label}
            </Btn>
        </Wrapper>
    )
}

export default Interaction