import React from 'react'
import {Description, Header, Section, SectionBody, Title} from '../src/styles'
import {ContentListContainer} from '../src/components/ContentList'
import {Skill} from '../src/types'
import {StaticImage} from 'gatsby-plugin-image'

interface ProjectsProps {
  projects: Skill[]
}
const Projects: React.FC<ProjectsProps> = ({projects}) => (
  <>
    <Header>
      <Title>Projects</Title>
      <Description>What I do or have done</Description>
    </Header>
    <Section>
      <SectionBody>
        <ContentListContainer content={projects} />
      </SectionBody>
    </Section>
  </>
)

export default Projects
