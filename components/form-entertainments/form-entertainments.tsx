'use client';

import Image from 'next/image';
import styles from './form-entertainments.module.scss';
import { Country } from '@/types';


type FormEntertainmentsProps = {
  country1: Country | null,
  country2: Country | null,
  country3: Country | null,
  country4: Country | null,
  countryDesc1: string,
  countryDesc2: string,
  countryDesc3: string,
  countryDesc4: string,
  setCountryDesc1: (arg: string) => void,
  setCountryDesc2: (arg: string) => void,
  setCountryDesc3: (arg: string) => void,
  setCountryDesc4: (arg: string) => void,
  error1: boolean,
  error2: boolean,
  error3: boolean,
  error4: boolean,
  setError2: (arf: boolean) => void,
  setError3: (arf: boolean) => void,
  setError4: (arf: boolean) => void,
  setError1: (arf: boolean) => void,
}


export default function FormEntertainments({
  country1,
  country2,
  country3,
  country4,
  countryDesc1,
  countryDesc2,
  countryDesc3,
  countryDesc4,
  setCountryDesc1,
  setCountryDesc2,
  setCountryDesc3,
  setCountryDesc4,
  error1,
  error2,
  error3,
  error4,
  setError1,
  setError2,
  setError3,
  setError4,
}: FormEntertainmentsProps) {

  return (
    <div className={styles['entertainments']}>
      <form>
        {
          country1 &&
          <div className={`${styles['entertainments__item']} ${error1 ? styles['error'] : ''}`}>
            <label>
              <span>{country1.name.rus}</span>
              <textarea
                name="country-1"
                maxLength={200}
                placeholder='План действий'
                value={countryDesc1}
                onChange={(evt) => {
                  setCountryDesc1(evt.target.value);
                  if (error1) {
                    setError1(false);
                  }
                }}
              />
              <span className={styles['error-message']}>Это поле должно быть заполнено</span>
            </label>
            <div className={styles['entertainments__image']}>
              <Image
                src={country1.flags.svg}
                width={70}
                height={47}
                alt='Флаг страны'
              />
            </div>
          </div>
        }
        {
          country2 &&
          <div className={`${styles['entertainments__item']} ${error2 ? styles['error'] : ''}`}>
            <label>
              <span>{country2.name.rus}</span>
              <textarea
                name="country-2"
                maxLength={200}
                placeholder='План действий'
                value={countryDesc2}
                onChange={(evt) => {
                  setCountryDesc2(evt.target.value);
                  if (error2) {
                    setError2(false);
                  }
                }}
              />
              <span className={styles['error-message']}>Это поле должно быть заполнено</span>
            </label>
            <div className={styles['entertainments__image']}>
              <Image
                src={country2.flags.svg}
                width={70}
                height={47}
                alt='Флаг страны'
              />
            </div>
          </div>
        }
        {
          country3 &&
          <div className={`${styles['entertainments__item']} ${error3 ? styles['error'] : ''}`}>
            <label>
              <span>{country3.name.rus}</span>
              <textarea
                name="country-3"
                maxLength={200}
                placeholder='План действий'
                value={countryDesc3}
                onChange={(evt) => {
                  setCountryDesc3(evt.target.value);
                  if (error3) {
                    setError3(false);
                  }
                }}
              />
              <span className={styles['error-message']}>Это поле должно быть заполнено</span>
            </label>
            <div className={styles['entertainments__image']}>
              <Image
                src={country3.flags.svg}
                width={70}
                height={47}
                alt='Флаг страны'
              />
            </div>
          </div>
        }
        {
          country4 &&
          <div className={`${styles['entertainments__item']} ${error4 ? styles['error'] : ''}`}>
            <label>
              <span>{country4.name.rus}</span>
              <textarea
                name="country-4"
                maxLength={200}
                placeholder='План действий'
                value={countryDesc4}
                onChange={(evt) => {
                  setCountryDesc4(evt.target.value);
                  if (error4) {
                    setError4(false);
                  }
                }}
              />
              <span className={styles['error-message']}>Это поле должно быть заполнено</span>
            </label>
            <div className={styles['entertainments__image']}>
              <Image
                src={country4.flags.svg}
                width={70}
                height={47}
                alt='Флаг страны'
              />
            </div>
          </div>
        }
      </form>
    </div>
  )

}
