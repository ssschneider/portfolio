import { ProjectBtn, ProjectDescription, ProjectImage, ProjectLinks, ProjectStacks, ProjectTitle, Wrapper } from "./styles"
import { Code, Browser } from "phosphor-react"

interface Props {
    image: string;
    stacks: string;
    title: string;
    description: string;
    linkCode: string;
    linkDeploy: string;
}

const ProjectCard = ({ image, stacks, title, description, linkCode, linkDeploy }: Props) => {
    return (
        <Wrapper>
            <ProjectImage src={image} alt={title}/>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>
                {description}
            </ProjectDescription>
            <ProjectStacks>
                Stacks: {stacks}
            </ProjectStacks>
            <ProjectLinks>
                <ProjectBtn href={linkCode} target="_blank">
                    <Code size={32} weight="bold"/>
                    Código
                </ProjectBtn>
                <ProjectBtn href={linkDeploy} target="_blank">
                    <Browser size={32} weight="bold"/>
                    Deploy
                </ProjectBtn>
            </ProjectLinks>
        </Wrapper>
    )
}

export default ProjectCard