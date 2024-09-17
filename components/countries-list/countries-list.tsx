import styles from './countries-list.module.scss';
import { useState } from 'react';
import LetterCountryList from './letter-country-list';
import { ALPHABET } from '@/const';
import { CountriesData, Country } from '@/types';


type CountriesListProps = {
  countriesWithLetter: CountriesData | null;
  setCountry: (country: Country) => void;
  onOpenBtnClick: () => void;
}


export default function CountriesList({countriesWithLetter, setCountry, onOpenBtnClick}: CountriesListProps) {
  const [letterCountryList, setLetterCountryList] = useState<Country[]>([]);
  const [activeLetter, setActiveLetter] = useState<string>('');

  const chooseLetter = (letter: string) => {
    setActiveLetter(letter);
    if (countriesWithLetter) {
      setLetterCountryList(countriesWithLetter[letter]);
    }

  }

  const setLetterClass = (letter: string) => {
    return `${styles['countries-letter__item']} ${activeLetter === letter ? styles['countries-letter__item--active'] : ''}`
  }

  return (
    <div className={styles['countries-list']}>
      <ul className={styles['countries-letter__list']}>
        {
          ALPHABET.map((letter) => {
            return (
              <li key={letter} className={setLetterClass(letter)} >
                <button
                  className={styles['countries-letter__btn']}
                  onClick={(evt) => {
                    evt.preventDefault();
                    chooseLetter(letter);
                  }}
                >
                  <span>{letter}</span>
                </button>
              </li>
            );
          })
        }
      </ul>
      {
        letterCountryList.length > 0 &&
        <LetterCountryList letterCountryList={letterCountryList} setCountry={setCountry} onOpenBtnClick={onOpenBtnClick} setActiveLetter={setActiveLetter} />
      }
    </div>
  );
}
