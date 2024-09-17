'use client';
import { useContext, useState } from 'react';
import Image from 'next/image';

import container from '@/styles/container.module.scss';
import styles from './main-form.module.scss';

import FormDates from '../form-dates/form-dates';
import FormChoosingCountry from '../form-choosing-country/form-choosing-country';

import { API_URL, MIN_COUNT_OF_DAYS, MIN_COUNT_OF_FRIENDS, STEPS_INFO, basePath } from '@/const';
import { Country, TravelData } from '@/types';
import FormEntertainments from '../form-entertainments/form-entertainments';
import { saveToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import { ExtraFormContext } from '@/hooks/use-extra-form-context';

export default function MainForm() {
  const router = useRouter();

  const {hashTags, transport} = useContext(ExtraFormContext);

  const [step, setStep] = useState<number>(1);

  const [countFriend, setCountFriends] = useState<number>(MIN_COUNT_OF_FRIENDS);
  const [countDays, setCountDays] = useState<number>(MIN_COUNT_OF_DAYS);
  const [withChildrens, setWithChildrens] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [country1, setCountry1] = useState<Country | null>(null);
  const [country2, setCountry2] = useState<Country | null>(null);
  const [country3, setCountry3] = useState<Country | null>(null);
  const [country4, setCountry4] = useState<Country | null>(null);

  const [isActive1, setIsActive1] = useState<boolean>(true);
  const [isActive2, setIsActive2] = useState<boolean>(false);
  const [isActive3, setIsActive3] = useState<boolean>(false);
  const [isActive4, setIsActive4] = useState<boolean>(false);

  const [countryDesc1, setCountryDesc1] = useState<string>('');
  const [countryDesc2, setCountryDesc2] = useState<string>('');
  const [countryDesc3, setCountryDesc3] = useState<string>('');
  const [countryDesc4, setCountryDesc4] = useState<string>('');

  const [error1, setError1] = useState<boolean>(false);
  const [error2, setError2] = useState<boolean>(false);
  const [error3, setError3] = useState<boolean>(false);
  const [error4, setError4] = useState<boolean>(false);

  const handleNextPageButtonClick = () => {
    if (step >= STEPS_INFO.length) {
      return;
    }
    setStep((prev) => prev + 1);
  }

  const handlePrevPageButtonClick = () => {
    if (step <= STEPS_INFO[0].id) {
      return;
    }
    setStep((prev) => prev - 1);
  }

  const sendData = async (data: TravelData) => {
    const response = await fetch(`${API_URL}cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      saveToken(result.id);
      router.push('/catalog');
    }
  }

  const handleSendFormButtonClick = () => {
    if (country1 && !countryDesc1) {
      setError1(true);
    }
    if (country2 && !countryDesc2) {
      setError2(true);
    }
    if (country3 && !countryDesc3) {
      setError3(true);
    }
    if (country4 && !countryDesc4) {
      setError4(true);
    }
    if (country1 && !countryDesc1 || country2 && !countryDesc2 || country3 && !countryDesc3 || country4 && !countryDesc4) {
      return;
    }

    if (!startDate || !endDate) {
      return;
    }

    if (hashTags.filter((item, i, arr) => arr.indexOf(item) !== i).length > 0) {
      alert('Хештеги не могут повторяться!');
      return;
    }

    if (transport.length < 1) {
      alert('Выберите тип транспорта для путешествия');
      return;
    }

    const countryList = [];
    if (country1) {
      countryList.push({
        name: country1.name.rus,
        description: countryDesc1,
      })
    }
    if (country2) {
      countryList.push({
        name: country2.name.rus,
        description: countryDesc2,
      })
    }
    if (country3) {
      countryList.push({
        name: country3.name.rus,
        description: countryDesc3,
      })
    }
    if (country4) {
      countryList.push({
        name: country4.name.rus,
        description: countryDesc4,
      })
    }

    sendData({
      companionCount: countFriend,
      children: withChildrens,
      startDate: startDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      endDate: endDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      countryList,
      hashTags: (hashTags.length > 0) ? hashTags : [],
      transport,
    })
  }


  return (
    <section className={styles['cont']}>
      <div className={styles['form-container']}>
        <h2 className={styles['title']}>Добавить план:</h2>
        <ul className={styles['mob-step__controll']}>
          {
            STEPS_INFO.map((stepInfo) => (
              <li
                className={`${styles['mob-step__controll_item']} ${step === stepInfo.id ? styles['mob-step__controll_item-active'] : ''}`}
                key={stepInfo.id}
              >
                <Image
                  src={`${basePath}/img/layout/icon-circle.svg`}
                  width={6}
                  height={6}
                  alt='Шаг'
                />
              </li>
            ))
          }
        </ul>
        <div className={styles['form__content']}>

          <div className={styles['step__description']}>
            <div className={styles['step__info']}>
              {
                STEPS_INFO.map((stepInfo) => {
                  if (step === stepInfo.id) {
                    return (
                      <h3 className={styles['info__title']} key={stepInfo.id}>
                        {stepInfo.title}
                      </h3>
                    )
                  }
                })
              }
              {
                step === STEPS_INFO[0].id &&
                <p className={styles['info__text']}>
                  Укажите предпочтительное количество попутчиков, которых<br/>
                  вы хотели бы позвать в поездку, и ее предполагаемую длительность.
                </p>
              }
              {
                step === STEPS_INFO[1].id &&
                <p className={styles['info__text']}>
                  Укажите страны, которые вы хотели бы посетить.<br/>
                  Это может быть одна или сразу несколько.
                </p>
              }
              {
                step === STEPS_INFO[2].id &&
                <p className={styles['info__text']}>
                  Наконец, расскажите о своих планах времяпровождения.<br/>
                  Можно писать в свободной форме и ставить тэги.
                </p>
              }
            </div>

            <div className={styles['step__controll']}>
              <ul className={styles['controll__list']}>
                {
                  STEPS_INFO.map((stepInfo) => (
                    <li
                      className={`${styles['controll__item']} ${step === stepInfo.id ? styles['controll__item-active'] : ''}`}
                      key={stepInfo.id}
                    >
                      {stepInfo.subtitle}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {
            step === STEPS_INFO[0].id &&
              <FormDates
                countFriend={countFriend}
                countDays={countDays}
                withChildrens={withChildrens}
                setCountFriends={setCountFriends}
                setCountDays={setCountDays}
                setWithChildrens={setWithChildrens}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
          }
          {
            step === STEPS_INFO[1].id &&
              <FormChoosingCountry
                country1={country1}
                country2={country2}
                country3={country3}
                country4={country4}
                setCountry1={setCountry1}
                setCountry2={setCountry2}
                setCountry3={setCountry3}
                setCountry4={setCountry4}
                isActive1={isActive1}
                isActive2={isActive2}
                isActive3={isActive3}
                isActive4={isActive4}
                setIsActive1={setIsActive1}
                setIsActive2={setIsActive2}
                setIsActive3={setIsActive3}
                setIsActive4={setIsActive4}
              />
          }
          {
            step === STEPS_INFO[2].id &&
              <FormEntertainments
                country1={country1}
                country2={country2}
                country3={country3}
                country4={country4}
                countryDesc1={countryDesc1}
                countryDesc2={countryDesc2}
                countryDesc3={countryDesc3}
                countryDesc4={countryDesc4}
                setCountryDesc1={setCountryDesc1}
                setCountryDesc2={setCountryDesc2}
                setCountryDesc3={setCountryDesc3}
                setCountryDesc4={setCountryDesc4}
                error1={error1}
                error2={error2}
                error3={error3}
                error4={error4}
                setError1={setError1}
                setError2={setError2}
                setError3={setError3}
                setError4={setError4}
              />
          }

          <div className={styles['buttons']}>
            {
              step !== STEPS_INFO[2].id &&
              <button
                className={`${styles['btn']} ${styles['btn-next']}`}
                onClick={handleNextPageButtonClick}
              >
                <span className={styles['btn-text']}>Следующий шаг</span>
                <Image
                  className={styles['btn-icon']}
                  src={`${basePath}/img/layout/icon-arrow-next.svg`}
                  width={11}
                  height={14}
                  alt='Следущий шаг'
                />
              </button>
            }
            {
              step === STEPS_INFO[2].id &&
              <button
                className={`${styles['btn']} ${styles['btn-next']}`}
                onClick={handleSendFormButtonClick}
                disabled={!countFriend || !countDays || !country1}
              >
                <span className={styles['btn-text']}>Отправить</span>
                <Image
                  className={styles['btn-icon']}
                  src={`${basePath}/img/layout/icon-arrow-next.svg`}
                  width={11}
                  height={14}
                  alt='Отправить'
                />
              </button>
            }
            {
              step !== STEPS_INFO[0].id &&
              <button
                className={`${styles['btn']} ${styles['btn-prev']}`}
                onClick={handlePrevPageButtonClick}
              >
                <Image
                  className={styles['btn-icon-prev']}
                  src={`${basePath}/img/layout/icon-arrow-next.svg`}
                  width={11}
                  height={14}
                  alt='Предыдущий шаг'
                />
                <span className={styles['btn-text']}>На шаг назад</span>
              </button>
            }
          </div>

        </div>
      </div>
    </section>
  );
}
