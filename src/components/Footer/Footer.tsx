import { FacebookSquare, InstagramAlt, Twitter } from '@styled-icons/boxicons-logos';
import { Box, Section, StyledContainer } from './Footer.styles';
interface Props {}
const Footer = ({}: Props) => {
  return (
    <Section>
      <StyledContainer className='bd__grid'>
        <Box>
          <h3 className='footer__title'>SHADY</h3>
          <p className='footer__deal'>Fashion Store</p>
          <a href='#'>
            <img src='/images/footerstore1.png' className='footer__store' alt='' />
          </a>
          <a href='#'>
            <img src='/images/footerstore2.png' className='footer__store' alt='' />
          </a>
        </Box>

        <Box>
          <h3 className='footer__title'>explore</h3>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Featured</a>
            </li>
            <li>
              <a href='#'>New</a>
            </li>
            <li>
              <a href='#'>Subscribed</a>
            </li>
          </ul>
        </Box>

        <Box>
          <h3 className='footer__title'>our services</h3>
          <ul>
            <li>
              <a href='#'>best prices</a>
            </li>
            <li>
              <a href='#'>free shipping</a>
            </li>
            <li>
              <a href='#'>gift cards</a>
            </li>
          </ul>
        </Box>

        <Box>
          <h3 className='footer__title'>follow</h3>
          <a href='' className='footer__social'>
            <FacebookSquare size={20} />
          </a>
          <a href='' className='footer__social'>
            <InstagramAlt size={20} />
          </a>
          <a href='' className='footer__social'>
            <Twitter size={20} />
          </a>
        </Box>
      </StyledContainer>

      <p className='footer__copy'>&#169; 2021 copyright SHADY-DEV</p>
    </Section>
  );
};

export default Footer;
