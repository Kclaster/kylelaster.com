import styled from "@emotion/styled";
import isMobile from 'react-device-detect'
import { BORDERS } from "../../constants/styles";
import { PADDING_SIZES } from "../../constants/sizes";

const Form = styled.form({
  border: BORDERS.STANDARD,
  display: 'flex',
  flexDirection: 'column',
  width: isMobile ? '90vw' : '35vw',
  padding: PADDING_SIZES.sm
})

export default Form;