import styles from "./cart.module.scss";
import { Radio } from "antd";
import classnames from "classnames";
import { RadioProps } from "antd/lib/radio";

interface CartProps extends RadioProps {
  cart?: React.ReactNode;
  circle?: boolean;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const Cart = (props: CartProps) => {
  const { value, cart, circle = true, position, ...rest } = props;
  const radioButtonWrapperClassname = classnames(
    "text-body-bold",
    [styles["cart"]],
    [styles["cart__checked"]],
    {
      [styles[`cart__${position}`]]: position,
    }
  );

  return (
    <Radio className={radioButtonWrapperClassname} value={value} {...rest}>
      <div>
        {cart}
        {circle ? (
          <div className={classnames([styles["cart__circle"]])} />
        ) : (
          <></>
        )}
        <div className={classnames([styles["cart__radioButton"]])}></div>
      </div>
    </Radio>
  );
};

export default Cart;
