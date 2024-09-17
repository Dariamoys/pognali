'use client';

import styles from './form-choosing-country.module.scss';
import { useEffect, useState } from 'react';
import React from "react";
import { API_URL } from '@/const';
import { CountriesData, Country } from '@/types';
import FormChoosingItem from '../form-choosing-item/form-choosing-item';


type FormChoosingCountryProps = {
  country1: Country | null,
  country2: Country | null,
  country3: Country | null,
  country4: Country | null,
  setCountry1: (arg: Country | null) => void,
  setCountry2: (arg: Country | null) => void,
  setCountry3: (arg: Country | null) => void,
  setCountry4: (arg: Country | null) => void,
  isActive1: boolean,
  isActive2: boolean,
  isActive3: boolean,
  isActive4: boolean,
  setIsActive1: (arg: boolean) => void,
  setIsActive2: (arg: boolean) => void,
  setIsActive3: (arg: boolean) => void,
  setIsActive4: (arg: boolean) => void,
}


export default function FormChoosingCountry({
  country1,
  country2,
  country3,
  country4,
  setCountry1,
  setCountry2,
  setCountry3,
  setCountry4,
  isActive1,
  isActive2,
  isActive3,
  isActive4,
  setIsActive1,
  setIsActive2,
  setIsActive3,
  setIsActive4,
}: FormChoosingCountryProps) {
  const [countriesWithLetter, setCountriesWithLetter] = useState<CountriesData | null>(null);

  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);
  const [isOpen4, setIsOpen4] = useState<boolean>(false);


  const getData = async () => {
    const response = await fetch(`${API_URL}countries`, {
      method: 'GET',
      credentials: 'same-origin',
    }).then((res) => res.json()) as CountriesData;
    delete response['Й'];
    delete response['Ц'];
    setCountriesWithLetter(response);
  }

  useEffect(() => {
    getData();
  }, []);


  const handleAdd1ButtonClick = () => {
    setIsActive1(true);
  }

  const handleAdd2ButtonClick = () => {
    setIsActive2(true);
  }

  const handleDelete2ButtonClick = () => {
    if (!country3) {
      setIsActive2(false);
    }
    if (!country4) {
      setIsActive3(false);
    }
    setCountry2(country3);
    setCountry3(country4);
    setCountry4(null);
    setIsActive4(false);
  }

  const handleAdd3ButtonClick = () => {
    setIsActive3(true);
  }

  const handleDelete3ButtonClick = () => {
    if (!country4) {
      setIsActive3(false);
    }
    setCountry3(country4);
    setCountry4(null);
    setIsActive4(false);
  }

  const handleAdd4ButtonClick = () => {
    setIsActive4(true);
  }

  const handleDelete4ButtonClick = () => {
    setCountry4(null);
    setIsActive4(false);
  }

  const handleOpen1BtnClick = () => {
    setIsOpen1((prev) => !prev);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  }

  const handleOpen2BtnClick = () => {
    setIsOpen1(false);
    setIsOpen2((prev) => !prev);
    setIsOpen3(false);
    setIsOpen4(false);
  }

  const handleOpen3BtnClick = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3((prev) => !prev);
    setIsOpen4(false);
  }

  const handleOpen4BtnClick = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4((prev) => !prev);
  }

  return (
    <div className={styles['choosing-country']}>
      <FormChoosingItem
        countriesWithLetter={countriesWithLetter}
        country={country1}
        setCountry={setCountry1}
        isActive={isActive1}
        setIsActive={setIsActive1}
        isOpen={isOpen1}
        onOpenBtnClick={handleOpen1BtnClick}
        handleAddNextButtonClick={handleAdd1ButtonClick}
      />
      {
        (isActive1 || country2) &&
        <FormChoosingItem
          countriesWithLetter={countriesWithLetter}
          country={country2}
          setCountry={setCountry2}
          isActive={isActive2}
          setIsActive={setIsActive2}
          isOpen={isOpen2}
          onOpenBtnClick={handleOpen2BtnClick}
          handleAddNextButtonClick={handleAdd2ButtonClick}
          handleDeleteButtonClick={handleDelete2ButtonClick}
        />
      }
      {
        (isActive2 || country3) &&
        <FormChoosingItem
          countriesWithLetter={countriesWithLetter}
          country={country3}
          setCountry={setCountry3}
          isActive={isActive3}
          setIsActive={setIsActive3}
          isOpen={isOpen3}
          onOpenBtnClick={handleOpen3BtnClick}
          handleAddNextButtonClick={handleAdd3ButtonClick}
          handleDeleteButtonClick={handleDelete3ButtonClick}
        />
      }
      {
        (isActive3 || country4) &&
        <FormChoosingItem
          countriesWithLetter={countriesWithLetter}
          country={country4}
          setCountry={setCountry4}
          isActive={isActive4}
          setIsActive={setIsActive4}
          isOpen={isOpen4}
          onOpenBtnClick={handleOpen4BtnClick}
          handleAddNextButtonClick={handleAdd4ButtonClick}
          handleDeleteButtonClick={handleDelete4ButtonClick}
        />
      }
    </div>
  );
}
