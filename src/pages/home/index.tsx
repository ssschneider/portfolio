import Interaction from "../../components/interaction"
import { Play } from "phosphor-react"

const Home = () => {
    return (
        <>
            <Interaction 
                text="Pressione Play para começar a navegar"
                label="Play"
                icon={<Play size={40} weight="bold"/>}
            />
            
        </>
    )
}

export default Home