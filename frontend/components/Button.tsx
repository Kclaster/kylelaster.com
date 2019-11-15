// Local Typings
interface Props {
  type?: ButtonType;
  children: any;
}

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset"
}

// Component Definition
const Button: React.FC<Props> = ({
  type = ButtonType.BUTTON,
  ...props
}) => {
  return (
    <button type={type}>
      {props.children}
    </button>
  )
}

export default Button;