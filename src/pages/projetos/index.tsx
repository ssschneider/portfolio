import ProjectCard from "../../components/card"
import * as projectsFile from "../../projects.json"
import { SectionTitle, Wrapper } from "./styles"

const Projetos = () => {
    return (
        <>
        <SectionTitle>Projetos</SectionTitle>
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
        </>
    )
}

export default Projetos