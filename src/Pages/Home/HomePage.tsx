import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <div className={styles.container}>
      <button className={styles.buttonForm} onClick={handleClick}>
        form
      </button>
    </div>
  );
};
