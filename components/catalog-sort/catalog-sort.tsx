'use client'

import Image from 'next/image';

import container from '@/styles/container.module.scss';
import styles from './catalog-sort.module.scss';
import { ALPHABET, Regions, basePath } from '@/const';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CatalogContriesList from './catalog-countries-list';
import { CountriesData } from '@/types';


type CatalogSortProps = {
  setContinent: Dispatch<SetStateAction<Regions[]>>;
  setCountry: Dispatch<SetStateAction<string[]>>;
  setCurrentPage: (arg: number) => void;
  countriesWithLetter: CountriesData | null;
}


export default function CatalogSort({setContinent, setCountry, setCurrentPage, countriesWithLetter}: CatalogSortProps) {
  const [europe, setEurope] = useState<boolean>(true);
  const [asia, setAsia] = useState<boolean>(false);
  const [america, setAmerica] = useState<boolean>(false);
  const [islands, setIslands] = useState<boolean>(false);

  const [extra, setExtra] = useState<boolean>(false);

  const [activeLetter, setActiveLetter] = useState<string>('');


  useEffect(() => {
    setContinent([]);
    setCurrentPage(1);

    if (europe) {
      setContinent((prev) => [...prev, Regions.eurupe])
    }
    if (asia) {
      setContinent((prev) => [...prev, Regions.asia])
    }
    if (america) {
      setContinent((prev) => [...prev, Regions.america])
    }
    if (islands) {
      setContinent((prev) => [...prev, Regions.oceania])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [europe, asia, america, islands])


  return (
    <div className={styles['main']}>
      <section className={`${styles['filter-countries']} ${extra ? styles['filter-countries--active'] : ''}`}>
        <div className={`${container['main-container']} ${styles['filter-countries__wrapper']} `}>
          <h2 className={styles['filter-countries__title']}>
            <Image
              className={styles['filter-title__icon']}
              src={`${basePath}/img/layout/icon-sort.svg`}
              width={23}
              height={15}
              alt='Сортировка по странам'
            />
            Фильтрация по странам:
          </h2>
          <ul className={styles['filter-countries__continents-list']}>
            <li className={styles['continents__item']}>
              <button
                className={`${styles['continents__link']} ${europe ? styles['continents__link--active'] : ''}`}
                onClick={() => setEurope((prev) => !prev)}
              >
                Европа
              </button>
            </li>
            <li className="continents__item">
              <button
                className={`${styles['continents__link']} ${asia ? styles['continents__link--active'] : ''}`}
                onClick={() => setAsia((prev) => !prev)}
              >
                Азия
              </button>
            </li>
            <li className="continents__item">
              <button
                className={`${styles['continents__link']} ${america ? styles['continents__link--active'] : ''}`}
                onClick={() => setAmerica((prev) => !prev)}
              >
                Америка
              </button>
            </li>
            <li className="continents__item">
              <button
                className={`${styles['continents__link']} ${islands ? styles['continents__link--active'] : ''}`}
                onClick={() => setIslands((prev) => !prev)}
              >
                Острова
              </button>
            </li>
          </ul>
          <button
            className={styles['filter-countries__show-button']}
            onClick={() => setExtra((prev) => !prev)}
          >
            {
              !extra &&
              <>
                <span className={styles['show-filter-toggle__text-show']}>Показать все</span>
                <Image
                  className={styles['show-filter-toggle__show-icon']}
                  src={`${basePath}/img/layout/icon-points.svg`}
                  width={34}
                  height={6}
                  alt='Показать фильтры'
                />
              </>
            }
            {
              extra &&
              <>
                <span className={styles['show-filter-toggle__text-show']}>Свернуть</span>
                <Image
                  className={styles['show-filter-toggle__show-icon']}
                  src={`${basePath}/img/layout/icon-close-dark.svg`}
                  width={24}
                  height={22}
                  alt='Свернуть фильтры'
                />
              </>
            }
          </button>

          <div className={`${styles['filter-countries__filter-expended']} ${extra ? styles['filter-countries__filter-expended--active'] : ''}`}>
            <ul className={styles['filter-expended__alphabet']}>
              {
                ALPHABET.map((letter) => {
                  return (
                    <li
                      className={`${styles['letter-table__item']} ${activeLetter === letter ? styles['letter-table__item--active'] : ''}`}
                      key={letter + 1}
                    >
                      <button
                        className={styles['letter-table__letter']}
                        onClick={() => setActiveLetter(letter)}
                      >
                        {letter}
                      </button>
                      {
                        countriesWithLetter && letter &&
                        <CatalogContriesList countriesLetterList={countriesWithLetter[letter]} setCountry={setCountry} setCurrentPage={setCurrentPage} setExtra={setExtra} />
                      }
                    </li>
                  );
                })
              }
            </ul>
            <ul className={styles['countries-list--one-column']}>
              {
                countriesWithLetter && activeLetter &&
                countriesWithLetter[activeLetter].map((country) => (
                  <li
                    className={styles['countries-list__item']}
                    key={country.name.rus + 2}
                  >
                    <button
                      className={styles['countries-list__item--btn']}
                      onClick={() => {
                        setCountry([country.name.rus]);
                        setCurrentPage(1);
                      }}
                    >
                      {country.name.rus}
                    </button>
                  </li>
                ))
              }
            </ul>
            <button
              className={styles['filter-expended__button']}
              onClick={() => setExtra((prev) => !prev)}
            >
              <Image
                className={styles['roll-up-filter__icon']}
                src={`${basePath}/img/layout/icon-close-dark.svg`}
                width={25}
                height={22}
                alt='Свернуть'
              />
              <span>Свернуть</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
