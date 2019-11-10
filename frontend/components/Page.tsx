// Internal Dependencies
import Header from "./Header"
import styled from "@emotion/styled"
import { HEADER_DIMENSIONS } from "../constants/sizes"

// Local Props
interface Props {
  children: any;
}

// Local Typings
const Wrapper = styled.div({
  marginTop: HEADER_DIMENSIONS.HEIGHT,
})

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