import styled from "@emotion/styled"
import { BOX_SHADOW, LINEAR_GRADIENTS, BORDER_RADIUS, BORDERS, BASE_COLORS } from "../constants/styles"
import { PADDING_SIZES } from "../constants/sizes"


// Local Typings
interface Props extends StyledProps {
  type?: ButtonType;
  children: any;
}

interface StyledProps {
  variant?: ButtonVariant
}

type ButtonVariant = 'primary' | 'outlined';

// Local Variables
const getBackground = (props) => {
  switch (props.variant) {
    case 'primary':
      return LINEAR_GRADIENTS.PRIMARY.ACTIVE;
    case 'outlined':
      return LINEAR_GRADIENTS.WHITE;
  }
};

const getBorder = (props) => {
  switch (props.variant) {
    case 'primary':
      return BORDERS.PRIMARY.ACTIVE;
    case 'outlined':
      return BORDERS.OUTLINED.ACTIVE;
  }
}

const StyledButton = styled.button((props: StyledProps) => ({
  boxShadow: BOX_SHADOW.BUTTON.PRIMARY,
  background: getBackground(props),
  borderRadius: BORDER_RADIUS.ROUNDED,
  border: getBorder(props),
  cursor: 'pointer',
  color: props.variant === 'primary' ? BASE_COLORS.WHITE : BASE_COLORS.PRIMARY.MID,
  padding: `${PADDING_SIZES.sm} ${PADDING_SIZES.xl}`,
  textDecoration: 'none',
  textShadow: BOX_SHADOW.BUTTON.TEXT,

  '&:hover': {
    background: props.variant === 'primary' ? BASE_COLORS.PRIMARY.MID : BASE_COLORS.WHITE,
    border: props.variant === 'primary' && BORDERS.PRIMARY.HOVER
  },
  '&:active': {
    transform: 'translateY(1px)'
  }
}));

export type ButtonType = "button" | "submit" | "reset";

// Component Definition
const Button: React.FC<Props> = ({
  type = "button",
  variant = 'primary',
  ...props
}) => {
  return (
    <StyledButton variant={variant} type={type}>
      {props.children}
    </StyledButton>
  )
}

export default Button;