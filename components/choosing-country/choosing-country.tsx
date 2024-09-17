'use client';

import styles from './choosing-country.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import React from "react";
import { basePath } from '@/const';
import CountriesList from '../countries-list/countries-list';

const ChoosingCountry = () => {
  const [isToggled, setToggle] = useState<boolean>(false);

  const setInputClass = () => {
    return `${styles['choosing-country__input']} ${styles['choosing-country__input--active']} ${isToggled ? styles['choosing-country__input--open'] : ''}`
  }

  return (
    <div className={styles['choosing-country']}>
      <form>
        <div
          className={setInputClass()}
        >
          <label>
            <input
              type='text'
              name='country-1'
              placeholder='Выберите страну'
              value="Босния"
            />
            <button
              className={styles['choosing-country__btn']}
              onClick={ ()=>setToggle(!isToggled) }
            >
              <Image className={styles['choosing-country__icon-arrow']}
                src={`${basePath}/img/layout/arrow-back.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
              <Image className={styles['choosing-country__icon-close']}
                src={`${basePath}/img/layout/icon-close.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
            </button>
            <div className={styles['choosing-country__countries-list']}>
              <CountriesList />
            </div>
          </label>
          <div className={styles['choosing-country__image']}>
            <Image
              src={`${basePath}/img/layout/bosnia-herzegovina.jpg`}
              width={70}
              height={47}
              alt='Флаг Боснии-и-Герцоговины'
            />
          </div>
        </div>
        <div className={`${styles['choosing-country__input']} ${styles['choosing-country__input--active']}`}>
          <label>
            <input
              type='text'
              name='country-2'
              placeholder='Выберите страну'
              value="Чехия"
            />
            <button className={styles['choosing-country__btn']}>
              <Image className={styles['choosing-country__icon-arrow']}
                src={`${basePath}/img/layout/arrow-back.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
              <Image className={styles['choosing-country__icon-close']}
                src={`${basePath}/img/layout/icon-close.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
            </button>
          </label>
          <div className={styles['choosing-country__image']}>
            <Image
              src={`${basePath}/img/layout/сzech.jpg`}
              width={70}
              height={47}
              alt='Флаг Чехии'
            />
          </div>

        </div>
        <div className={`${styles['choosing-country__input']} ${styles['choosing-country__input--open']}`}>
          <label>
            <input
              type='text'
              name='country-3'
              placeholder='Выберите страну'
              value=""
            />
            <button className={styles['choosing-country__btn']}>
              <Image className={styles['choosing-country__icon-arrow']}
                src={`${basePath}/img/layout/arrow-back.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
              <Image className={styles['choosing-country__icon-close']}
                src={`${basePath}/img/layout/icon-close.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
            </button>

          </label>
          <div className={styles['choosing-country__image']}>
            <Image
              src={`${basePath}/img/layout/bosnia-herzegovina.JPG`}
              width={70}
              height={47}
              alt='Написать'
            />
          </div>

        </div>
        <div className={styles['choosing-country__input']}>
          <label>
            <input
              type='text'
              name='country-4'
              placeholder='Выберите страну'
              value=""
            />
            <button className={styles['choosing-country__btn']}>
              <Image className={styles['choosing-country__icon-arrow']}
                src={`${basePath}/img/layout/arrow-back.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
              <Image className={styles['choosing-country__icon-close']}
                src={`${basePath}/img/layout/icon-close.svg`}
                width={22}
                height={24}
                alt='Прибавить'
              />
            </button>

          </label>
          <div className={styles['choosing-country__image']}>
            <Image
              src={`${basePath}/img/layout/bosnia-herzegovina.JPG`}
              width={70}
              height={47}
              alt=''
            />
          </div>

        </div>
      </form>


    </div>
  );
}


export default React.memo(ChoosingCountry);
