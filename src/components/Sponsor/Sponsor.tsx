import { StyledLogo } from './Sponsor.styles';

interface Props {
  id: number;
  image: string;
}
const Sponsor = ({ id, image }: Props) => {
  return (
    <StyledLogo>
      <img src={image} alt={`sponsor-${id}`} />
    </StyledLogo>
  );
};

export default Sponsor;
