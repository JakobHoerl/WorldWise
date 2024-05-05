import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
function CountryList({ cities, loading }) {
  if (loading) return <Spinner />;
  if (cities.length === 0) return <Message />;
  const countries = cities.reduce((arr, citie) => {
    if (!arr.map((el) => el.country).includes(citie.country))
      return [...arr, { country: citie.country, emoji: citie.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((el, i) => (
        <CountryItem country={el} key={i} />
      ))}
    </ul>
  );
}

export default CountryList;
