import styled from "@emotion/styled";
import { PADDING_SIZES } from "../constants/sizes";
import { BASE_COLORS } from "../constants/styles";

// Local Variables
const StyledLabel = styled.label({
  display: 'flex',
  flexDirection: 'column',
  margin: `${PADDING_SIZES.sm} 0`
})

const StyledInput = styled.input({
  width: '100%',
  padding: PADDING_SIZES.sm,
  marginTop: PADDING_SIZES.sm,
  boxShadow: `1px 2px 3px 2px ${BASE_COLORS.BLACK}`,
})

// Local Typings
interface Props {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange: (e: any) => void;
}

// Component Definition
const Input: React.FC<Props> = ({
  name,
  label,
  type = "text",
  required = false,
  value,
  onChange,
}) => {
  return (
    <StyledLabel htmlFor={name}>
      {label}
      <StyledInput
        type={type}
        id={name}
        name={name}
        placeholder={label}
        required={required}
        value={value}
        onChange={onChange}
      />
    </StyledLabel>
  )
};

export default Input;