import {
  FeaturedProduct,
  New,
  Price,
  StyledBox,
  StyledImg,
  StyledProduct,
  Title,
} from './Product.styles';

interface Props {
  title: string;
  image: string;
  price: number;
}
const Product = ({ title, image, price }: Props) => {
  return (
    <StyledProduct>
      <StyledBox>
        <New className='featured__new'>new</New>
        <StyledImg src={image} alt={title} />
      </StyledBox>

      <FeaturedProduct>
        <Title className='featured__name'>{title}</Title>
        <Price className='featured__price'>${price}</Price>
      </FeaturedProduct>
    </StyledProduct>
  );
};

export default Product;
