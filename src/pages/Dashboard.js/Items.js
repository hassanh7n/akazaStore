import React from 'react'
import styled from 'styled-components'


const Items = ({name, amount, price, index, image}) => {
  return (
    <Wrapper>
            <h4>{index + 1}.</h4>
        <div className="center">
            <div className="first">
                <div className="item">
                    <h5>Name : {name}</h5>
                    <h5>Amount : {amount}</h5>
                    <h5>Price : {price + "$"}</h5>
                </div>
            </div>
            <div className="second">
                <img className='order-img' src={image} alt="" />
            </div>

        </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
border-bottom: 5px solid var(--primary-500);
margin-bottom: 1rem;
.item{
    width : 100%;
    justify-content : space-between;
    /* display : flex; */
}
.center{
    display : flex;
    width : 100%;
    justify-content : space-between;
}
.order-img{
    width : 120px;
    height : auto;
    border-radius:5px;
}
@media (min-width: 500px) {
    .order-img{
    width : 200px;
    height : auto;
    border-radius:5px;
}
}
`

export default Items