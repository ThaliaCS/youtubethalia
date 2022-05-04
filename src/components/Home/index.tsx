import React from 'react'
import styled from 'styled-components'
import { Aside } from '../Aside'

export  function Home() {
  return (
    <HomeContainer>
        <Aside />
    </HomeContainer>
  )
}

export const HomeContainer = styled.div`

    font-family: 'Bebas Neue', cursive;
    color: #fff;
  
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #140001 0%, #200001 23.44%, #280102 37.5%, #270302 50%, #210202 63.02%, #1E0102 75.52%, #170102 80.79%, #110000 87.5%, #120000 100%);
`
