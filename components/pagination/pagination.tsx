'use client'
import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import LoadMoreBtn from '../load-more-btn/load-more-btn';
import styles from '../pagination/pagination.module.scss'
import { COUNT_CARDS_PER_PAGE } from '@/const';


type PaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  count: number;
}


export default function Pagination({currentPage, setCurrentPage, count}: PaginationProps) {
  const totalPages = Math.ceil(count / COUNT_CARDS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1 as number);


  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevButtonClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextButtonClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={styles['pagination']}>
      {
        currentPage !== totalPages &&
        <LoadMoreBtn onNextButtonClick={handleNextButtonClick} />
      }
      <div className={styles['pagination__wrapper']}>
        <ul className={styles['pagination__numbers']}>
            {pageNumbers.map((pageNumber) => (
              <li key={pageNumber} className={styles['pagination__number']}>
                <button
                  className={`${styles['pagination__link']} ${pageNumber === currentPage ? styles['pagination__active'] : ''}`}
                  onClick={() => handleClick(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>
        <div className={styles['pagination__arrows']}>
          {
            currentPage !== 1 &&
            <button className={`${styles['pagination__button']} ${styles['pagination__button--prev']}`} type="button" name="Назад" aria-label="Previous" onClick={handlePrevButtonClick}></button>
          }
          {
            currentPage !== totalPages &&
            <button className={`${styles['pagination__button']} ${styles['pagination__button--next']}`} type="button" name="Вперед" aria-label="Next" onClick={handleNextButtonClick}></button>
          }
        </div>
      </div>
    </div>
  );
}
