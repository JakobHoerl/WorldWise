import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
function CityItem({ city, setCities, index }) {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const { cityName, emoji, date, id, position } = city;

  const lat = position.lat;
  const lng = position.lng;

  const filterCity = () => {
    setCities((curr) => curr.filter((el, i) => i !== index));
  };

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button onClick={filterCity} className={styles.deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
