import { useState } from "react";
import styles from "./FormPage.module.css";
import { BuildForm } from "./components";

export const FormPage = () => {
  const [isBuildFormOpen, setIsBuildFormOpen] = useState(false);
  const [formConfig, setFormConfig] = useState({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });

  const toggleBuildForm = () => setIsBuildFormOpen((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formConfig) => {
    const value = Math.max(0, parseInt(e.target.value) || 0); // Защита от отрицательных чисел
    setFormConfig({ ...formConfig, [field]: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.textsWrapp}>
          <div className={styles.textBlock}>
            <p className={styles.text}>Input: </p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.text}>Textarea: </p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.text}>Checkbox: </p>
          </div>
        </div>
        <div className={styles.inputsWrapp}>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={formConfig.input}
              onChange={(e) => handleInputChange(e, "input")}
            />
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={formConfig.textarea}
              onChange={(e) => handleInputChange(e, "textarea")}
            />
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={formConfig.checkbox}
              onChange={(e) => handleInputChange(e, "checkbox")}
            />
          </div>
        </div>
      </div>
      <button className={styles.buttonBuild} onClick={toggleBuildForm}>
        Build
      </button>
      {isBuildFormOpen && (
        <BuildForm 
          onClose={toggleBuildForm} 
          config={formConfig} 
        />
      )}
    </div>
  );
};