import React from 'react'
import styled from 'styled-components' 

function Detail() {
  return (
    <Container>
      <Background>
        <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
      </Background>
      <ImageTitle>
        <img src = "https://www.youtube.com/redirect?event=live_chat&redir_token=QUFFLUhqbkFLOGdnMFlWalNJVlBiZElvX0w5bGNZUlZ5d3xBQ3Jtc0tsd3hFZURmTkgzOTZvckVtdTRTQUlocGlXX0ZEOW5mS0NnRWRTRkR6QjA3VkYwZnM1cEp4OTJGdUQ0T2xTbGxiNFV4MFVfQ0Z6cVZ2anZ4dGpkbm5HeW1Kamk1UVR1SEh4ZHNBS2hJZmY5dnFVeWkzdw&q=https%3A%2F%2Fprod-ripcut-delivery.disney-plus.net%2Fv1%2Fvariant%2Fdisney%2FD7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2%2Fscale%3Fwidth%3D1440%26aspectRatio%3D1.78" />
      </ImageTitle>
      <Controls>
          <PlayButton>
            <img src = "/images/play-icon-black.png" />
            <span> PLAY </span>
          </PlayButton>
          <TrailerButton>
            <img src = "/images/play-icon-white.png" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            
          </GroupWatchButton>
      </Controls>
    </Container>
  )
}

export default Detail
const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative; 
`

const Background = styled.div`
  position: fixed;
  top: 0; 
  left: 0;
  bottom: 0;
  right: 0;
  z-index:-1;
  opacity: 0.8;

  img
  {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img{
    width: 100%:
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items:center;
`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249,249,249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198,198,198);
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color: rgb(249,249,249);
  text-transform: uppercase;
`

const AddButton = styled.button`
  width:44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span{
    color: white;
    font-size: 30px;
  }
`
const GroupWatchButton = styled.button`
`
