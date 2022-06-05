import React from 'react'
import styled from 'styled-components'

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.colors.lighter};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`

const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
      Photography was a subject that had my mind particularly involved since i was 15.

With passing of the years, i became more interested in the photography of peoples life.

The fact that photos capture all memories, colors, images, makes me wonder how could it be possible to show our dreariness and delights in the absence of it.

With getting older i didn't get my parents consent for studying arts, therefore i got my degree in biomedical engineering.

Though my admiration for art did not diminish. I worked everywhere since 2014, gaining knowledge and experience.

Our society don't express their beliefs freely,
Thus I decided to establish a place where people are not only encouraged for their admiration for art, but also have others involved and create a team for their experiences too.

All leading to establishing yastudios at 2019. A place where folks gather to take part in giving ideas and making everything happen.
      </p>

      <p>
        I built this website with&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React,&nbsp;
        </a>
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby,
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        &nbsp;among other technologies. I use it as a place to share what I
        learn and do. I believe in an open source world and&nbsp;
        <a
          href="https://github.com/yastudio/Yastudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          you can find this site code on GitHub.
        </a>
      </p>
      <p>
        <a
          href="../../../files/Yass-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>
        &nbsp;in case you want to have a look.
      </p>
      <p> Sometimes I&nbsp;
        <a
          href="https://twitter.com/Yastudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet
        </a>
        &nbsp;and share&nbsp;
        <a
          href="https://www.instagram.com/yastudio.official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          moments
        </a>
        &nbsp;on Instagram. You can contact me through them or sending an email to&nbsp;
        <a
          rel="noopener"
          href="mailto:hey@yastudio.co?subject=Hi%20there!"
        >
          hey@yastudio.co
        </a>
      </p>
    </Content>
  )
}

export default AboutMe
