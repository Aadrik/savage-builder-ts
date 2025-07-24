import styles from "./ToggleButton.module.css";

interface Props {
  isSelected: boolean;
  isDisabled: boolean;
  onToggle: () => void;
  addLabel?: string;
  removeLabel?: string;
}

export default function ToggleButton({
  isSelected,
  isDisabled = false,
  onToggle,
  addLabel = "Add",
  removeLabel = "Remove",
}: Props) {
  return (
    <button className={styles.button} disabled={isDisabled} onClick={onToggle}>
      {isSelected ? removeLabel : addLabel}
    </button>
  );
}
