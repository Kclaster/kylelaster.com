// Internal Dependencies
import Header from "./Header"
import styled from "@emotion/styled"
import { HEADER_DIMENSIONS } from "../constants/sizes"
import { BASE_COLORS } from "../constants/styles";

// Local Props
interface Props {
  children: any;
}

// Local Typings
const Wrapper = styled.div({
  paddingTop: HEADER_DIMENSIONS.HEIGHT,
  backgroundImage: 'url(https://res.cloudinary.com/dtmnev3wn/image/upload/v1573534943/kylelaster.com/patrick-robert-doyle-yUvZYHV2Zbw-unsplash_mnlb1l.jpg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh'
});

// Component Definition
const Page: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Wrapper>
        {props.children}
      </Wrapper>
    </>
  )
}

export default Page;