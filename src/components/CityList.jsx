import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
function Citylist({ cities, loading, setCities }) {
  if (loading) return <Spinner />;
  if (cities.length === 0) return <Message />;
  return (
    <ul className={styles.cityList}>
      {cities.map((el, i) => (
        <CityItem city={el} key={i} setCities={setCities} index={i} />
      ))}
    </ul>
  );
}

export default Citylist;
