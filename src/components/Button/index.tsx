import styled from "@emotion/styled";
import { buttonSizes, buttonVariants } from "../../styles/theme";

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  varient: keyof typeof buttonVariants;
  size: keyof typeof buttonSizes;
  fullWidth: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  varient,
  size,
  fullWidth,
  ...props
}) => {
  return (
    <StyledButton
      varient={varient}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: ${(props) => buttonSizes[props.size].padding};
  font-size: ${(props) => buttonSizes[props.size].fontSize};
  font-weight: ${(props) => buttonSizes[props.size].fontWeight};
  line-height: ${(props) => buttonSizes[props.size].lineHeight};
  border-radius: ${(props) => buttonSizes[props.size].borderRadius};
  background-color: ${(props) => buttonVariants[props.varient].backgroundColor};
  color: ${(props) => buttonVariants[props.varient].color};
  border-width: 0px;
`;
