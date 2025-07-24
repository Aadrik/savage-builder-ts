import styles from "./InfoCard.module.css";
import ToggleButton from "./ToggleButton";

interface Props {
  name: string;
  category?: string;
  description: string;
  tags?: string[];
  isSelected: boolean;
  isDisabled: boolean;
  disabledMessage?: string;
  onToggle: () => void;
  addLabel?: string;
  removeLabel?: string;
  extraFields?: React.ReactNode;
}

export default function InfoCard({
  name,
  category,
  description,
  tags,
  isSelected,
  isDisabled,
  disabledMessage = "Unavailable",
  onToggle,
  addLabel = "Add",
  removeLabel = "Remove",
  extraFields,
}: Props) {
  const cardClass = `
  ${styles.card}
  ${isSelected ? styles.selected : ""}
  ${isDisabled ? styles.disabled : ""}
  `;

  return (
    <div className={cardClass.trim()}>
      <h3>{name}</h3>
      {category && (
        <p>
          <strong>Category:</strong> {category}
        </p>
      )}
      <p>{description}</p>
      {tags && (
        <p>
          <strong>Tags:</strong> {tags.join(", ")}
        </p>
      )}
      {extraFields}
      <ToggleButton
        isSelected={isSelected}
        isDisabled={isDisabled}
        onToggle={onToggle}
      />
      {isDisabled && (
        <small className={styles.warning}>{disabledMessage}</small>
      )}
    </div>
  );
}
