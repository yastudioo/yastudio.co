import React from 'react'
import styled, {css} from 'styled-components'
import {addRemToProperty} from '../../styles'

interface WrapperProps {
  fixed: boolean
}

const Wrapper = styled.div<WrapperProps>`
  pointer-events: none;
  font-size: ${props => props.theme.fontSizes.medium};
  max-width: 44rem;
  line-height: 1.3em;
  ${props => props.theme.media.max.md`
    max-width: 44rem;
  `}
  ${props => props.theme.media.max.sm`
    max-width: 100%;
    font-size: 1rem;
  `}
  ${props => props.theme.media.max.xs`
    font-size: 1rem;
  `}

  ${props =>
    props.fixed
      ? css`
          ${addRemToProperty('padding')};
          position: absolute;
          top: 0;
          right: 0;
          text-align: right;
          ${props => props.theme.media.max.md`
          left: auto;
      `}
        `
      : css`
        `}
`

const Title = styled.h1`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0px;
  font-family: Samim;
  font-size: inherit;
  span {
    color: ${props => props.theme.colors.secondary};
    text-decoration: line-through;
  }
`

interface IntroProps {
  fixed: boolean
  title: string
}

const Intro: React.FC<IntroProps> = ({fixed, title}) => {
  return (
    <Wrapper fixed={fixed}>
      <Title>{title} </Title>
    </Wrapper>
  )
}

export default Intro
