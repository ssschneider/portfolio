import { ProfilePhoto, Wrapper } from "./styles"
import ProfilePicture from "../../assets/images/profile-picture.svg"
import AboutMeText from "../../components/aboutMeText"

const Sobre = () => {
    return (
        <Wrapper>
            <ProfilePhoto src={ProfilePicture}/>
            <AboutMeText />
        </Wrapper>
    )
}

export default Sobre