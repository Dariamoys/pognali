'use client';

import styles from './form-choosing-item.module.scss';
import Image from 'next/image';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import React from "react";
import { basePath } from '@/const';
import CountriesList from '../countries-list/countries-list';
import { CountriesData, Country } from '@/types';


type FormChoosingItemProps = {
  countriesWithLetter: CountriesData | null,
  country: Country | null,
  setCountry: (arg: Country | null) => void,
  isActive: boolean,
  setIsActive: (arg: boolean) => void,
  isOpen: boolean,
  onOpenBtnClick: () => void,
  handleAddNextButtonClick: () => void,
  handleDeleteButtonClick?: () => void,
}


export default function FormChoosingItem({countriesWithLetter, country, setCountry, isActive, isOpen, onOpenBtnClick, handleAddNextButtonClick, handleDeleteButtonClick }: FormChoosingItemProps) {

  const handleChoosingCountryClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!isOpen) {
      onOpenBtnClick();
    }
  }

  const handleChoosingCountryCloseClick = (evt: FormEvent<HTMLDivElement>) => {
    evt.preventDefault();
    onOpenBtnClick();
  }

  return (
    <div className={`${styles['choosing-country__input']}
    ${isActive ? styles['choosing-country__input--active'] : ''}
    ${country ? styles['choosing-country__input--added'] : ''}
    ${isOpen ? styles['choosing-country__input--open'] : ''}`}>

    <div className={styles['input']}>

      <button
        className={styles['input__button']}
        onClick={isActive ? handleChoosingCountryClick : handleAddNextButtonClick}
      >

        <span className={styles['input__text']}>
          {(isActive) ? (country) ? country.name.rus : 'Выберите страну' : 'Добавить страну'}
        </span>

        <div className={styles['input__btns']}>
          <Image className={styles['choosing-country__icon-plus']}
            src={`${basePath}/img/layout/icon-plus.svg`}
            width={20}
            height={20}
            alt='Добавить страну'
          />
          <Image className={styles['choosing-country__icon-arrow']}
            src={`${basePath}/img/layout/arrow-back.svg`}
            width={22}
            height={24}
            alt='Выбрать страну'
          />
          <Image
            onClick={handleChoosingCountryCloseClick}
            className={styles['choosing-country__icon-close']}
            src={`${basePath}/img/layout/icon-close.svg`}
            width={22}
            height={24}
            alt='Скрыть окно выбора страны'
          />
        </div>

      </button>

      <div className={styles['choosing-country__countries-list']}>
        <CountriesList countriesWithLetter={countriesWithLetter} setCountry={setCountry} onOpenBtnClick={onOpenBtnClick}/>
      </div>

    </div>

    <div className={styles['choosing-country__image']}>
      {
        country &&
        <Image
          className={styles['country--flag']}
          src={country.flags.svg}
          width={70}
          height={47}
          alt='Флаг выбранной страны'
        />
      }
    </div>

    {
      isActive && handleDeleteButtonClick &&
      <div className={styles['choosing-country__delete']}>
        <button
          className={styles['delete-btn']}
          onClick={handleDeleteButtonClick}
        >
          <Image
            className={styles['choosing-country__icon-delete']}
            src={`${basePath}/img/layout/icon-close-black.svg`}
            width={22}
            height={24}
            alt='Удалить вариант выбора страны'
          />
        </button>
      </div>
    }

    {
      handleDeleteButtonClick &&
      <Image
        className={styles['choosing-country__arrow']}
        src={`${basePath}/img/layout/icon-arrow-down.svg`}
        width={8}
        height={11}
        alt='Далее'
      />
    }

  </div>
  );
}
