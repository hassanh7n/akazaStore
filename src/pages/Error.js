import { Link } from 'react-router-dom';
import img from '../images/undraw_page_not_found_re_e9o6(6).svg';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;
export default Error;
