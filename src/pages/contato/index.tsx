import ContactPopOver from "../../components/contact";
import { Alien } from "phosphor-react"
import Interaction from "../../components/interaction";
import { Wrapper } from "./styles";
import { useState } from "react";

const Contato = () => {
    const [ openPopOver, setOpenPopover] = useState(false)

    const handleClosePopOver = () => {
        setOpenPopover(false)
    }

	return (
		<Wrapper>
            <Interaction 
                text="Pressione o alien para falar comigo" 
                label={<Alien size={40} weight="bold"/>} 
                onClick={() => setOpenPopover(true)}
                />

            {openPopOver ? <ContactPopOver onClick={handleClosePopOver}/> : null}
		</Wrapper>
	);
};

export default Contato;
