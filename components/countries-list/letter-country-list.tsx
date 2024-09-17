import { Country } from '@/types';
import styles from './countries-list.module.scss';


type LetterCountryListProps = {
  letterCountryList: Country[],
  setCountry: (country: Country) => void;
  onOpenBtnClick: () => void,
  setActiveLetter: (arg: string) => void,
}


export default function LetterCountryList({letterCountryList, setCountry, onOpenBtnClick, setActiveLetter}: LetterCountryListProps) {

  return (
      <ul className={styles['countries-countries__list']}>
        {
          letterCountryList.map((country) => {
            return (
              <li key={country.name.common} className={styles['countries-countries__item']}>
                <button onClick={(evt) => {
                  evt.preventDefault();
                  setCountry(country);
                  onOpenBtnClick();
                  setActiveLetter('');
                }}>{country.name.rus}</button>
              </li>
            );
          })
        }
      </ul>
  );
}
