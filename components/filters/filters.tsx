
'use client';
import styles from '@/components/filters/filters.module.scss';
import TransportList from '@/components/transport-list/transport-list';
import { Range, getTrackBackground } from 'react-range';
import React, { useState } from 'react';

interface DisplayState {
  [key: string]: boolean;
}


export default function Filters() {
  const [values, setValues] = useState<number[]>([0, 100]);
  const [displayState, setDisplayState] = useState<DisplayState>({
    hobby: false,
    music: false,
    food: false,
    transport: false,
    level: false,
  });

  const toggleSectionVisibility = (section: string) => {
    setDisplayState({
      ...displayState,
      [section]: !displayState[section]
    });
  };

  const handleRangeChange = (newValues: number[]) => {
    setValues(newValues);
  };

  const handleMinInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = '';
  };

  const handleMaxInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = '';
  };

  return (
    <section className={styles['filters']}>
      <div className={styles['filters-container']}>
        <div className={styles['filters__wrapper']}>
          <h2>Подберите идеального попутчика</h2>
        </div>
        <form className={styles['filters__form']} action={'#'}>
          <div className={`${styles['filters__hobbys']} ${styles['filters__chapter']}`}>
            <h3 className={`${styles['filters__subtitle']} ${displayState['hobby'] ? styles['filters__subtitle--active'] : ''}`}
            onClick={() => toggleSectionVisibility('hobby')}>Хобби <span className={styles['filters__subtitle-colon']}>:</span></h3>
            <ul className={`${styles['filters__list']} ${displayState['hobby'] ? styles['filters__list--hidden'] : styles['filters__list--visible']}`}>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="gym"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Спортзал</span>
                </label>
              </li>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="hookah"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Кальян</span>
                </label>
              </li>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="sofa"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Диван</span>
                </label>
              </li>
            </ul>
          </div>
          <div className={`${styles['filters__music']} ${styles['filters__chapter']}`}>
            <h3 className={`${styles['filters__subtitle']} ${displayState['music'] ? styles['filters__subtitle--active'] : ''}`}
            onClick={() => toggleSectionVisibility('music')}>Музыка <span className={styles['filters__subtitle-colon']}>:</span></h3>
            <ul className={`${styles['filters__list']} ${displayState['music'] ? styles['filters__list--hidden'] : styles['filters__list--visible']}`}>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="hard rock"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Тяжелый рок</span>
                </label>
              </li>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="Russian rap"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Русский реп</span>
                </label>
              </li>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="evrodance"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Евроденс</span>
                </label>
              </li>
            </ul>
          </div>
          <div className={`${styles['filters__food']} ${styles['filters__chapter']}`}>
            <h3 className={`${styles['filters__subtitle']} ${displayState['food'] ? styles['filters__subtitle--active'] : ''}`}
            onClick={() => toggleSectionVisibility('food')}>Еда <span className={styles['filters__subtitle-colon']}>:</span></h3>
            <ul className={`${styles['filters__list']} ${displayState['food'] ? styles['filters__list--hidden'] : styles['filters__list--visible']}`}>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="meat-eater"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Мясоед</span>
                </label>
              </li>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="healthy food"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Сидит на ПП</span>
                </label>
              </li>
              <li className={styles['filters__item']}>
                <label className={styles['filters__control']}>
                  <input
                    className={`${styles['filters__input']} ${styles['visually-hidden']}`}
                    type="checkbox"
                    name="filters-group"
                    value="vegan"
                  />
                  <span className={styles['filters__mark']}></span>
                  <span className={styles['filters__text']}>Веган-сыроед</span>
                </label>
              </li>
            </ul>
          </div>
          <div className={`${styles['filters__transport']} ${styles['filters__chapter']}`}>
            <h3 className={`${styles['filters__subtitle']} ${styles['filters__subtitle--transport']} ${displayState['transport'] ? styles['filters__subtitle--active'] : ''}`}
            onClick={() => toggleSectionVisibility('transport')}>Транспорт <span className={styles['filters__subtitle-colon']}>:</span></h3>
            <div className={`${styles['filters__list']} ${styles['filters__list--transport']} ${displayState['transport'] ? styles['filters__list--hidden'] : styles['filters__list--visible']}`}>
              <TransportList />
            </div>
          </div>
          <div className={`${styles['filters__range']} ${styles['filters__chapter']}`}>
            <h3 className={`${styles['filters__subtitle']} ${styles['filters__subtitle--range']} ${displayState['range'] ? styles['filters__subtitle--active'] : ''}`}
            onClick={() => toggleSectionVisibility('level')}>Левел <span className={styles['filters__subtitle-colon']}>:</span></h3>
            <div className={`${styles['filters__list']} ${styles['filters__list--range']} ${displayState['level'] ? styles['filters__list--hidden'] : styles['filters__list--visible']}`}>
              <Range
                values={values}
                step={1}
                min={0}
                max={100}
                rtl={false}
                onChange={handleRangeChange}
                renderTrack={({ props, children }) => (
                  <div className={styles['filters__range-wrapper']}
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                  >
                    <div
                      className={styles['filters__range-line']}
                      ref={props.ref}
                      style={{
                        background: getTrackBackground({
                          values,
                          colors: ['#1d2e5b33', '#1D2E5B', '#1d2e5b33'],
                          min: 0,
                          max: 100,
                          rtl: false
                        }),
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div className={styles['filters__range-levers']} {...props} key={props.key} aria-label="Change level"/>
               )}
              />
              <div className={styles['filters__range-values']}>
                <input
                  type="number"
                  aria-label="Level min"
                  min="0"
                  max="100"
                  value={values[0]}
                  onFocus={handleMinInputFocus}
                  onChange={(e) => handleRangeChange([Number(e.target.value), values[1]])}
                />
                <input
                  type="number"
                  aria-label="Level max"
                  min="0"
                  max="100"
                  value={values[1]}
                  onFocus={handleMaxInputFocus}
                  onChange={(e) => handleRangeChange([values[0], Number(e.target.value)])}
                />
              </div>
            </div>
          </div>
        </form>
        <div className={styles['filters__button']}>
          <button type="submit">Показать</button>
      </div>
      </div>
    </section>
  );
}
