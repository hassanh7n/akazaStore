import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill className='icon' />
        ) : stars > index ? (
          <BsStarHalf className='icon' />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: rgb(104, 103, 100);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  .icon{
    color : black;
  }
  margin-bottom: 0.5rem;
`
export default Stars
