import React from 'react'
import styled from 'styled-components'

export function Aside() {
    return (
        <AsideContainer>
            <Title>
                Youtube
            </Title>
        </AsideContainer>
    )
}


export const AsideContainer = styled.aside`

  background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(42px);
  width: 200px;
  height: 100%;
  border-radius: 0 16px 16px 0;

`

export const Title = styled.h2`
  text-align: center;


`


