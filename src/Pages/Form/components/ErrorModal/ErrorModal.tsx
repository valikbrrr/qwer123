import React from "react";
import styles from "./ErrorModal.module.css";

interface ErrorModalProps {
  onClose: () => void;
  message: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ onClose, message }) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <h2>Ошибка</h2>
        <p>{message}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </>
  );
};
