'use client'


import Image from 'next/image';

import styles from './catalog-item.module.scss';
import { basePath, TABLET_WIDTH } from '@/const';
import { CardData } from '@/types';
import { getRandomValue } from '@/utils/utils';

import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import './progres.scss';
import { useEffect, useState } from 'react';


type CatalogItemProps = {
  card: CardData,
  isMyCard: boolean,
}


export default function CatalogItem({card, isMyCard}: CatalogItemProps) {
  const likes = getRandomValue(10, 1500);
  const level = getRandomValue(1, 99);

  const [circleColor, setCircleColor] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth < TABLET_WIDTH) {
        setCircleColor('#ff8d30');
      } else {
        setCircleColor('#4d99d6');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className={styles["traveler__profile-photo"]}>
        <Image
          className={styles['photo--img']}
          src={card.avatarUrl}
          width={250}
          height={250}
          sizes="100vw"
          alt="Фото"
          priority={true}
        />
      </div>
      <div className={styles['name_mob']}>
        <h3 className={styles['title_mob']}>
          <span className={styles['title_text']}>{card.name}</span>
        </h3>

        {
          !isMyCard &&
          <div className={styles['likes_mob']}>
            <button className={styles["btn-like"]}>
              <Image
                src={`${basePath}/img/layout/icon-like-gray.svg`}
                width={0}
                height={0}
                alt="Лайк"
              />
            </button>
            <p className={styles['count_mob']}>{likes}</p>
          </div>
        }
      </div>
      <div className={styles["traveler__profile-info"]}>
        <div className={styles["info__selfdata"]}>
          <div className={styles["selfdata__title-wrapper"]}>
            <span className={styles["selfdata__status"]}></span>
            <h3 className={styles["selfdata__title"]}>{card.name}</h3>
          </div>
          <p className={styles["selfdata__hashtags"]}>
            {
              card.hashTags?.length > 0 &&
              card.hashTags.map((item) => (
                <span key={item + 'ht'}>
                  <span className={styles["hashtags__item"]}>{item}</span>{' '}
                </span>
              ))
            }
          </p>
          {
            !isMyCard &&
            <div className={styles["selfdata__buttons"]}>
              <button className={styles["btn-invite"]}><span>Позвать!</span></button>
              <div className={styles["buttons__likes"]}>
                <button className={styles["btn-like"]}>
                  <Image
                    src={`${basePath}/img/layout/icon-like-gray.svg`}
                    width={0}
                    height={0}
                    alt="Лайк"
                  />
                </button>
                <span className={styles["likes-count"]}>{likes}</span>
              </div>
            </div>
          }
        </div>
        <div className={styles["info__traveldata"]}>
          <div className={styles["traveldata__countries-wrapper"]}>
            <span className={styles['traveldata__title']}>Хочет посетить:</span>
            <ol className={styles["traveldata__countries"]}>
              {
                card.countryList.map((item) => (
                  <li className={styles["countries__item"]} key={item.countryData.name.common + card.cardId + item.description}>
                    <span className={styles["countries__flag"]}>
                      <Image
                        src={item.countryData.flags.svg}
                        width={0}
                        height={0}
                        alt='Флаг страны'
                      />
                    </span>
                    <span className={styles["countries__name"]}>{item.countryData.name.rus}</span>
                  </li>
                ))
              }
            </ol>
          </div>
          <div className={styles["traveldata__extra"]}>
            <div className={styles["traveldata__extra-wrapper"]}>
              <span className={styles['transport__title']}>Транспорт:</span>
              <ul className={styles["extra__transport"]}>
                <li className={`${styles["transport__item"]} ${card.transport.find((item) => item === 'plane') ? styles["transport__item--active"] : ''}`}>
                  <button>
                    <Image
                      src={`${basePath}/img/layout/icon-plane.svg`}
                      width={0}
                      height={0}
                      alt='На самолете'
                    />
                  </button>
                </li>
                <li className={`${styles["transport__item"]} ${card.transport.find((item) => item === 'bus') ? styles["transport__item--active"] : ''}`}>
                  <button>
                    <Image
                      src={`${basePath}/img/layout/icon-bus.svg`}
                      width={0}
                      height={0}
                      alt='На авто'
                    />
                  </button>
                </li>
                <li className={`${styles["transport__item"]} ${card.transport.find((item) => item === 'bike') ? styles["transport__item--active"] : ''}`}>
                  <button>
                    <Image
                      src={`${basePath}/img/layout/icon-bicycle.svg`}
                      width={0}
                      height={0}
                      alt='На велосипеде'
                    />
                  </button>
                </li>
                <li className={`${styles["transport__item"]} ${card.transport.find((item) => item === 'walk') ? styles["transport__item--active"] : ''}`}>
                  <button>
                    <Image
                      src={`${basePath}/img/layout/icon-run.svg`}
                      width={0}
                      height={0}
                      alt='Пешком'
                    />
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles["extra__level"]}>
              <span className={styles['level__title']}>Левел:</span>
              <div className={styles["level__text"]}>
                <p className={styles["level__text--top"]}>{level}</p>
                <p className={styles["level__text--bot"]}>Level</p>
              </div>
              <div className={styles["level__progress"]}>
                <CircularProgressbar
                  value={level}
                  styles={buildStyles({
                    pathColor: circleColor,
                    trailColor: "transparent"
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['countries__wrap']}>
        <p className={styles['wrap__title']}>Хочет посетить:</p>
        <ol className={styles["wrap__countries"]}>
          {
            card.countryList.map((item) => (
              <li className={styles["wrap__countries__item"]} key={item.countryData.name.rus + card.name + item.description}>
                <span className={styles["wrap__countries__flag"]}>
                  <Image
                    src={item.countryData.flags.svg}
                    width={0}
                    height={0}
                    sizes='100vw'
                    alt='Флаг страны'
                  />
                </span>
                <span className={styles["wrap__countries__name"]}>{item.countryData.name.rus}</span>
              </li>
            ))
          }
        </ol>
      </div>

      {
        !isMyCard &&
        <div className={styles['btn_mob']}>
          <button className={styles['btn']}><span>Позвать!</span></button>
        </div>
      }
    </>
  );
}
