// Internal Dependencies
import Header from "./Header"
import styled from "@emotion/styled"
import { BASE_COLORS } from "../constants/styles";
import { PADDING_SIZES } from "../constants/sizes";

// Local Props
interface Props {
  children: any;
}

// Local Typings
const Wrapper = styled.div({
  background: BASE_COLORS.PRIMARY.DARK,
  minHeight: '100vh',
  padding: `${PADDING_SIZES.md} ${PADDING_SIZES.xl}`,
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