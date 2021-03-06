import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Link from "./Link"

const Content = styled.div`
  padding: 1.5rem;
`

const Description = styled.p`
  opacity: 0.8;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.cardGradient};
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
  min-height: 260px;
`

const Image = styled(Img)`
  width: 100%;
  max-width: 372px;
  max-height: 257px;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 311px;
  }
`

const Card = styled(Link)`
  flex: 1 1 372px;
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 14px 66px rgba(0, 0, 0, 0.07),
    0px 10px 17px rgba(0, 0, 0, 0.03), 0px 4px 7px rgba(0, 0, 0, 0.05);
  margin: 1rem;

  &:hover {
    border-radius: 4px;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme.colors.tableBackgroundHover};
    transition: transform 0.1s;
    transform: scale(1.02);
    }
  }

`

const ActionCard = ({
  to,
  alt,
  image,
  title,
  description,
  children,
  className,
}) => {
  return (
    <Card to={to} className={className}>
      <ImageWrapper>
        <Image fixed={image} alt={alt} />
      </ImageWrapper>
      <Content>
        <h3>{title}</h3>
        <Description>{description}</Description>
        {children}
      </Content>
    </Card>
  )
}

export default ActionCard
