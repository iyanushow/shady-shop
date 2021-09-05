import { useState } from 'react';
import { Section, StyledContainer, StyledForm, Box } from './NewsLetter.styles';

interface Props {}
const NewsLetter = ({}: Props) => {
  const [mail, setMail] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMail(e.target.value);
  };
  return (
    <Section id='subscribed'>
      <StyledContainer className='bd__grid'>
        <Box>
          <h2 className='section__title'>our newsletter</h2>
          <p className='description'>Promotions, new products and sales. Directly to your mail</p>
          <StyledForm action=''>
            <input
              type='text'
              value={mail}
              name='mail'
              onChange={handleChange}
              placeholder={'Enter your mail'}
            />
            <input type='submit' value='SUBSCRIBE' className='button__cta' />
          </StyledForm>
        </Box>
      </StyledContainer>
    </Section>
  );
};

export default NewsLetter;
