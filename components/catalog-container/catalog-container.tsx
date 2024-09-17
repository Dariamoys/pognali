
'use client'

import { Suspense, useEffect, useState } from 'react';
import CatalogSort from '../catalog-sort/catalog-sort';
import { API_URL, Regions } from '@/const';
import CatalogList from '../catalog-list/catalog-list';
import Filters from '../filters/filters';
import styles from './catalog-container.module.scss';
import container from '@/styles/container.module.scss';
import { CardData, CardsDataAPI, CountriesData } from '@/types';
import { getToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import Pagination from '../pagination/pagination';


export default function CatalogContainer() {
  const router = useRouter();
  const token = getToken();

  const [cards, setCards] = useState<CardData[]>([]);
  const [count, setCount] = useState<number>(0);

  const [country, setCountry] = useState<string[]>([]);
  const [continent, setContinent] = useState<Regions[]>([Regions.eurupe]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countriesWithLetter, setCountriesWithLetter] = useState<CountriesData | null>(null);


  const getCountriesData = async () => {
    const response = await fetch(`${API_URL}countries`, {
      method: 'GET',
      credentials: 'same-origin',
    }).then((res) => res.json()) as CountriesData;
    delete response['Й'];
    delete response['Ц'];
    setCountriesWithLetter(response);
  }


  const getCardsData = async () => {
    const countries = country.length > 0 ? '&countries=' + country.join(',') : '';
    const continents = continent.length > 0 ? '&continents=' + continent.join(',') : '';
    const page = '&page=' + currentPage;

    const response = await fetch(`${API_URL}cards/${token}?=${countries}${continents}${page}`, {
      method: 'GET',
      credentials: 'same-origin',
    });

    if (!response.ok) {
      router.push('/form');
    }

    const cardsData = await response.json() as CardsDataAPI;

    setCards(cardsData.cardList);
    setCount(cardsData.totalCardsCount);
  }


  useEffect(() => {
    getCountriesData();
  }, []);


  useEffect(() => {
    getCardsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continent, country, currentPage]);


  return (
    <Suspense>
      <div style={{position: 'relative'}}>
        <CatalogSort
          setCountry={setCountry}
          setContinent={setContinent}
          setCurrentPage={setCurrentPage}
          countriesWithLetter={countriesWithLetter}
        />

        <section className={`${styles['section__container']}`}>
          <h2 className={styles['visually-hidden']}>Каталог</h2>
          <div className={`${container['main-container']}`}>
            <div className={`${styles['content__container']}`}>
              <div className={styles['filters']}>
                <Filters />
              </div>
              <div className={styles['list']}>
                <CatalogList cards={cards} />
              </div>
              <div className={styles['pagination']}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} count={count} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
