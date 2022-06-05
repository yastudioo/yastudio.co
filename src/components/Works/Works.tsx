import React from 'react'
import {Description, Header, Section, SectionBody, Title} from '../../styles'
import {ContentListContainer} from '../ContentList'
import {Work} from '../../types'
import styled from 'styled-components'
import {Link} from 'gatsby'

const SectionHeader = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
`

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`

const MoreLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.light + '40'};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  padding: 0.4rem 0.6rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  margin: 0.2rem 0 0.2rem 1rem;
  transition: 0.4s ease;

  &:hover {
    color: ${props => props.theme.colors.darkest};
    background-color: ${props => props.theme.colors.light};
    border-bottom: none;
  }
`

interface WorksProps {
  posts: Work[]
  projects: Work[]
}

const Works: React.FC<WorksProps> = ({posts, projects}) => (
  <>
    <Header>
      <Title>Activities:</Title>
      <Description></Description>
    </Header>
    <Section>
      <SectionHeader>
        <SectionTitle>01 : Photography</SectionTitle>
        <MoreLink to="/blog">All Photography</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>02 : graphic design</SectionTitle>
        <MoreLink to="/projects">All graphic design</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>03 : NFTs</SectionTitle>
        <MoreLink to="/projects">All NFTs development</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>04 : Websites</SectionTitle>
        <MoreLink to="/projects">All website development</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>05 : Posters</SectionTitle>
        <MoreLink to="/projects">All website development</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>06 : Logos</SectionTitle>
        <MoreLink to="/projects">All website development</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>07 : Packaging</SectionTitle>
        <MoreLink to="/projects">All website development</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>08 : Instagram</SectionTitle>
        <MoreLink to="/projects">All website development</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
  </>
)

export default Works