import { Country } from '@/types';
import styles from './catalog-sort.module.scss';
import { Dispatch, SetStateAction } from 'react';


type CatalogContriesListProps = {
  countriesLetterList: Country[];
  setCountry: Dispatch<SetStateAction<string[]>>;
  setCurrentPage: (arg: number) => void;
  setExtra: (arg: boolean) => void;
}


export default function CatalogContriesList({countriesLetterList, setCountry, setCurrentPage, setExtra}: CatalogContriesListProps) {
  return (
    <ul className={styles['letter-table__countries-list']}>
      {
        countriesLetterList.map((country) => (
          <li
            className={styles['countries-list__item']}
            key={country.name.rus + 3}
          >
            <button className={styles['countries-list__item--btn']} onClick={() => {
              setCountry([country.name.rus]);
              setCurrentPage(1);
              setExtra(false);
            }}>
              {country.name.rus}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
