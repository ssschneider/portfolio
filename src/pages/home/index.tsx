import Interaction from "../../components/interaction"
import { Play } from "phosphor-react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/sobre")
    }

    return (
        <>
            <Interaction 
                text="Pressione Play para começar a navegar"
                label={<Play size={40} weight="bold"/>}
                onClick={handleClick}
            />
            
        </>
    )
}

export default Home