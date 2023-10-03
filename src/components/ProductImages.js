import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const ProductImages = ({ images = [[]] }) => {

  const [main, setMain] = useState(images[0]?.src)

  
  
  return (
    <Wrapper>
      <img src={main || images[0]?.src} alt='' className='main ' />
      
      <div className='gallery'>
        {images.map((image, index) => {
          
          return (
            <img
              src={image.src}
              alt=''
              key={index}
              className= 'active'
              onClick={() => setMain(images[index].src)}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    width : 100%;
    height : auto;
  }
  img {
    width: 80%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      width : 100%;
      height : auto;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      width : 100%;
    height : auto;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
