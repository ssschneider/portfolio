import { ProfilePhoto, Wrapper } from "./styles"
import ProfilePicture from "../../assets/images/profile-picture.svg"
import AboutMeText from "../../components/aboutMeText"

const Sobre = () => {
    return (
        <Wrapper>
            <ProfilePhoto src={ProfilePicture} alt="Foto de Sarah Schneider"/>
            <AboutMeText />
        </Wrapper>
    )
}

export default Sobre