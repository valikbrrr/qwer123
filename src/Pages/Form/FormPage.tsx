import { useState } from "react";
import styles from "./FormPage.module.css";
import { BuildForm, ErrorModal } from "./components";

export const FormPage = () => {
  const [isBuildFormOpen, setIsBuildFormOpen] = useState(false);
  const [formConfig, setFormConfig] = useState({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });
  const [inputValues, setInputValues] = useState({
    input: "0",
    textarea: "0",
    checkbox: "0",
  });
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const toggleBuildForm = () => setIsBuildFormOpen((prev) => !prev);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formConfig
  ) => {
    let value = e.target.value;
    const inputEvent = e.nativeEvent as InputEvent;

    if (inputEvent.inputType) {
      value = value.replace(/^0+/, "") || "0";
    }

    const numericValue = Math.max(0, parseInt(value) || 0);
    setInputValues({ ...inputValues, [field]: value });
    setFormConfig({ ...formConfig, [field]: numericValue });
  };

  const handleBuildClick = () => {
    if (
      formConfig.input > 10 ||
      formConfig.textarea > 10 ||
      formConfig.checkbox > 10
    ) {
      setIsErrorModalOpen(true); 
    } else {
      setIsBuildFormOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Форма генератора</h2>
        <div className={styles.formWrapper}>
          <div className={styles.textsWrapp}>
            {['Input', 'Textarea', 'Checkbox'].map((label) => (
              <div key={label} className={styles.textBlock}>
                <p className={styles.text}>{label}:</p>
              </div>
            ))}
          </div>
          <div className={styles.inputsWrapp}>
            {['input', 'textarea', 'checkbox'].map((field) => (
              <div key={field} className={styles.inputBlock}>
                <input
                  className={styles.input}
                  type="number"
                  min="0"
                  value={inputValues[field as keyof typeof inputValues]}
                  onChange={(e) => 
                    handleInputChange(e, field as keyof typeof formConfig)
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <button className={styles.buttonBuild} onClick={handleBuildClick}>
          Сгенерировать форму
        </button>
      </div>
      
      {isBuildFormOpen && (
        <BuildForm onClose={toggleBuildForm} config={formConfig} />
      )}
      {isErrorModalOpen && (
        <ErrorModal
          onClose={() => setIsErrorModalOpen(false)}
          message="Максимальное число для ввода в каждый инпут — 10."
        />
      )}
    </div>
  );
};
