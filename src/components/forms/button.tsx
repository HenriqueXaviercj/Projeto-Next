import styles from "./button.module.css";

type ButtonType = React.ComponentProps<"button">;

export default function Button({ children, ...props }: ButtonType) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
