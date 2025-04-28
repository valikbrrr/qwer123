import styles from "./BuildForm.module.css";

interface BuildFormProps {
  onClose: () => void;
  config: {
    input: number;
    textarea: number;
    checkbox: number;
  };
}

export const BuildForm: React.FC<BuildFormProps> = ({ onClose, config }) => {
  const renderInputs = () => {
    return Array.from({ length: config.input }).map((_, i) => (
      <input key={`input-${i}`} type="text" placeholder={`Input ${i + 1}`} />
    ));
  };

  const renderTextareas = () => {
    return Array.from({ length: config.textarea }).map((_, i) => (
      <textarea key={`textarea-${i}`} placeholder={`Textarea ${i + 1}`} />
    ));
  };

  const renderCheckboxes = () => {
    return Array.from({ length: config.checkbox }).map((_, i) => (
      <div key={`checkbox-${i}`}>
        <input type="checkbox" id={`checkbox-${i}`} />
        <label htmlFor={`checkbox-${i}`}>Checkbox {i + 1}</label>
      </div>
    ));
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <h2>Сгенерированная форма</h2>
        <form className={styles.generatedForm}>
          {renderInputs()}
          {renderTextareas()}
          {renderCheckboxes()}
          <button type="button" className={styles.closeButton} onClick={onClose}>
            Закрыть
          </button>
        </form>
      </div>
    </>
  );
};
