import styles from "./input.module.css";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  error?: string;
}

export default function Input({ label, name, error, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        {...props}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
