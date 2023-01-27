import ProjectCard from "../../components/card"
import * as projectsFile from "../../projects.json"
import { BtnMoreProjects, SectionTitle, Wrapper } from "./styles"
import { GithubLogo } from "phosphor-react"

const Projetos = () => {
    return (
        <>
        <SectionTitle>Principais Projetos</SectionTitle>
        <Wrapper>
            {projectsFile.projects.map(project => {
                return (
                    <ProjectCard
                        key={project.title}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        stacks={project.stacks}
                        linkCode={project.linkCode}
                        linkDeploy={project.linkDeploy}
                    />
                )
            })}
        </Wrapper>
        <BtnMoreProjects href="https://github.com/ssschneider" target="_blank">
            <GithubLogo size={24} weight="bold"/>
            Mais projetos
        </BtnMoreProjects>
        </>
    )
}

export default Projetos