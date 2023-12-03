import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/lib/button";

export const Button = (props: ButtonProps) => {
  const { type, icon, ...rest } = props;

  return (
    <AntButton type={type} icon={icon} {...rest}>
      Button
    </AntButton>
  );
};

export default Button;
