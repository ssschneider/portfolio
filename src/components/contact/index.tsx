import { BtnClose, SocialMediaInfo, SocialMediaWrap, SocialMediaWrapper, Wrapper } from "./styles"
import { WhatsappLogo, ChatText, LinkedinLogo, GithubLogo, DownloadSimple, XCircle } from "phosphor-react"

interface Props {
    onClick: () => void;
}

const ContactPopOver = ({ onClick }: Props) => {
    return (
        <Wrapper>
            <BtnClose onClick={onClick}>
                <XCircle size={30}  weight="bold" color="#000"/>
            </BtnClose>

            <SocialMediaWrap>
                <SocialMediaWrapper href="https://wa.me/5522999405400" target="_blank">
                    <WhatsappLogo size={55} weight="bold"/>
                    <SocialMediaInfo>Whatsapp</SocialMediaInfo>
                </SocialMediaWrapper>

                <SocialMediaWrapper href="mailto:mureb_rosa@hotmail.com" target="_blank">
                    <ChatText size={55} weight="bold"/>
                    <SocialMediaInfo>mureb_rosa@ <br />hotmail.com</SocialMediaInfo>
                </SocialMediaWrapper>

                <SocialMediaWrapper href="https://www.linkedin.com/in/sarahmurebs/" target="_blank">
                    <LinkedinLogo size={55} weight="bold"/>
                    <SocialMediaInfo>sarahmurebs</SocialMediaInfo>
                </SocialMediaWrapper>

                <SocialMediaWrapper href="https://github.com/ssschneider" target="_blank">
                    <GithubLogo size={55} weight="bold"/>
                    <SocialMediaInfo>ssschneider</SocialMediaInfo>
                </SocialMediaWrapper>

                <SocialMediaWrapper href="#" target="_blank">
                    <DownloadSimple size={55} weight="bold"/>
                    <SocialMediaInfo>Baixar currículo</SocialMediaInfo>
                </SocialMediaWrapper>
            </SocialMediaWrap>
        </Wrapper>
    )
}

export default ContactPopOver