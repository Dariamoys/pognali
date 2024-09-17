'use client'


import Image from 'next/image';
import styles from './form-dates.module.scss';
import { ChangeEvent, FormEvent } from 'react';
import { MAX_COUNT_OF_DAYS, MAX_COUNT_OF_FRIENDS, MIN_COUNT_OF_DAYS, MIN_COUNT_OF_FRIENDS, basePath } from '@/const';
import IconPlus from './icon-plus';
import IconMinus from './icon-minus';
import dynamic from 'next/dynamic';

const Calen = dynamic(() => import('../calendar/calendar'), { ssr: false });


type FormDatesProps = {
  countFriend: number;
  countDays: number;
  withChildrens: boolean;
  setCountFriends: (arg: number) => void;
  setCountDays: (arg: number) => void;
  setWithChildrens: (arg: boolean) => void;
  startDate: Date | null,
  endDate: Date | null,
  setStartDate: (arg: Date | null) => void,
  setEndDate: (arg: Date | null) => void,
}

export default function FormDates({
  countFriend,
  countDays,
  withChildrens,
  setCountFriends,
  setCountDays,
  setWithChildrens,
  startDate,
  endDate,
  setStartDate,
  setEndDate
}: FormDatesProps) {

  const handleFriendsAddClick = (evt: FormEvent<HTMLButtonElement>) => {
    if (countFriend >= MAX_COUNT_OF_FRIENDS) {
      return;
    }
    setCountFriends(countFriend + 1);
  }

  const handleFriendsRemoveClick = (evt: FormEvent<HTMLButtonElement>) => {
    if (countFriend <= MIN_COUNT_OF_FRIENDS) {
      return;
    }
    setCountFriends(countFriend - 1);
  }

  const handleFriendsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (Number(evt.target.value) > MAX_COUNT_OF_FRIENDS) {
      return;
    }
    if (Number(evt.target.value) < MIN_COUNT_OF_FRIENDS - 1) {
      return;
    }
    setCountFriends(Number(evt.target.value.replace(/^0+/, '')));
  }

  const handleDaysAddClick = (evt: FormEvent<HTMLButtonElement>) => {
    if (countDays >= MAX_COUNT_OF_DAYS) {
      return;
    }

    if (endDate) {
      setCountDays(countDays + 1);

      const newDate = new Date(endDate);
      newDate.setDate(endDate.getDate() + 1);
      setEndDate(newDate);
    }
  }

  const handleDaysRemoveClick = (evt: FormEvent<HTMLButtonElement>) => {
    if (countDays <= MIN_COUNT_OF_DAYS) {
      return;
    }

    if (endDate) {
      setCountDays(countDays - 1);

      const newDate = new Date(endDate);
      newDate.setDate(endDate.getDate() - 1);
      setEndDate(newDate);
    }
  }

  const handleDaysChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (Number(evt.target.value) > MAX_COUNT_OF_DAYS) {
      return;
    }
    if (Number(evt.target.value) < MIN_COUNT_OF_DAYS - 2) {
      return;
    }

    const newCount = Number(evt.target.value.replace(/^0+/, ''));

    setCountDays(newCount);
  }

  const handleDaysChangeBlur = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!endDate || !startDate) {
      return;
    }

    const minDate = new Date(startDate);
    minDate.setDate(startDate.getDate() + 1);

    setEndDate(minDate);

    const oldCount = endDate.getDate() - startDate.getDate() + 1;
    const newCount = Number(evt.target.value);

    if (newCount >= MIN_COUNT_OF_DAYS) {
      const newDate = new Date(endDate);
      newDate.setDate(endDate.getDate() - oldCount + newCount);
      setEndDate(newDate);
    }
  }


  return (
    <div className={styles['form_main']}>
      <form>
        <div className={styles['form__base']}>

          <div className={styles['form__inputs']}>
            <div className={styles['input__label']} onClick={(evt) => evt.preventDefault()}>
              <label className={styles['input__text']}>Ищу попутчиков:</label>
              <div className={styles['input__group']}>
                <button
                  className={styles['count-btn']}
                  onClick={handleFriendsRemoveClick}
                  disabled={countFriend <= MIN_COUNT_OF_FRIENDS}
                >
                  <IconMinus />
                </button>
                <input
                  className={styles['input__number']}
                  type="number"
                  value={countFriend === 0 ? '' : countFriend}
                  min={1}
                  max={10}
                  onChange={handleFriendsChange}
                  onBlur={(evt) => {
                    if (Number(evt.target.value) < MIN_COUNT_OF_FRIENDS) {
                      setCountFriends(MIN_COUNT_OF_FRIENDS);
                    }
                  }}
                />
                <button
                  className={styles['count-btn']}
                  onClick={handleFriendsAddClick}
                  disabled={countFriend >= MAX_COUNT_OF_FRIENDS}
                >
                  <IconPlus />
                </button>
              </div>
              <span className={styles['input__text']}>Чел.</span>
            </div>

            <label className={styles['checkbox__label']}>
              <input
                className={styles['input__checkbox']}
                type="checkbox"
                defaultChecked={withChildrens}
                onChange={() => setWithChildrens(!withChildrens)}
              />
              <span className={styles['checkbox__item']}>
                <Image
                  src={`${basePath}/img/layout/icon-submit.svg`}
                  width={0}
                  height={0}
                  sizes='32.35vw'
                  style={{ width: '32.35%', height: 'auto' }}
                  alt='Можно с детьми галочка'
                />
              </span>
              <span className={styles['checkbox__text']}>Можно с детьми</span>
            </label>

            <div className={styles['input__label']} onClick={(evt) => evt.preventDefault()}>
              <label className={styles['input__text']}>Длительность:</label>
              <div className={styles['input__group']}>
                <button
                  className={styles['count-btn']}
                  onClick={handleDaysRemoveClick}
                  disabled={countDays <= MIN_COUNT_OF_DAYS}
                >
                  <IconMinus />
                </button>
                <input
                  className={styles['input__number']}
                  type="number"
                  value={countDays === 0 ? '' : countDays}
                  onChange={handleDaysChange}
                  onBlurCapture={handleDaysChangeBlur}
                  onBlur={(evt) => {
                    if (Number(evt.target.value) < MIN_COUNT_OF_DAYS) {
                      setCountDays(MIN_COUNT_OF_DAYS);
                    }
                  }}
                />
                <button
                  className={styles['count-btn']}
                  onClick={handleDaysAddClick}
                  disabled={countDays >= MAX_COUNT_OF_DAYS}
                >
                  <IconPlus />
                </button>
              </div>
              <span className={styles['input__text']}>Дн.</span>
            </div>
          </div>

        </div>

        <Calen
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setCountDays={setCountDays}
        />
      </form>
    </div>
  );
}
