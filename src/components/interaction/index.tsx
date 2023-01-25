import { Play } from "phosphor-react"
import { Wrapper, Text, Btn } from "./styles"

interface InteractionProps {
    text: string;
    label: string;
    icon: any;
}

const Interaction = ({ text, label, icon }: InteractionProps) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
            <Btn>
                {<Play size={40} weight="bold"/>}
                {label}
            </Btn>
        </Wrapper>
    )
}

export default Interaction