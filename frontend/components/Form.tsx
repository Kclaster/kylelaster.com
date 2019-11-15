import styled from "@emotion/styled";
import isMobile from 'react-device-detect'
import { BORDERS } from "../constants/styles";

const Form = styled.form({
  border: BORDERS.STANDARD,
  display: 'flex',
  flexDirection: 'column',
  width: isMobile ? '90vw' : '35vw'
})

export default Form;