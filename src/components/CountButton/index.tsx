import styles from "./styles.module.scss";

interface CountButtonProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const CountButton = ({
  count,
  onDecrement,
  onIncrement,
}: CountButtonProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.counter__button} onClick={onDecrement}>
        -
      </button>
      <span className={styles.counter__value}>{count}</span>
      <button className={styles.counter__button} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
