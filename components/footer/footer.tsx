
import React from 'react';
import Link from 'next/link';
import SvgLogo from '../logo/logo';
import SvgLogoMobile from '../logo/lobo_mobile';
import SvgTelegram from './telegram';
import SvgVk from './vk';
import SvgYoutube from './youtube';
import styles from './footer.module.scss';
import container from '@/styles/container.module.scss';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        <Link className={styles['footer__logo-link']} href={'#'} aria-label="Back to start">
          <div className={styles['footer__logo-desktop']}>
            <SvgLogo aria-label={'Главная Погнали'}/>
          </div>
          <div className={styles['footer__logo-mobile']}>
            <SvgLogoMobile aria-label={'Главная Погнали'}/>
          </div>
        </Link>
        <ul className={styles['footer__list']}>
          <li className={styles['footer__item']}>
            <a href='#' className={`${styles['footer__link']} ${styles['footer__link--tg']}`} aria-label="Go to telegram">
              <SvgTelegram aria-label={'Телеграм'}/>
            </a>
          </li>
          <li className={styles['footer__item']}>
            <a href='#' className={`${styles['footer__link']} ${styles['footer__link--vk']}`} aria-label="Go to vk">
              <SvgVk aria-label={'Вконтакте'}/>
            </a>
          </li>
          <li className={styles['footer__item']}>
            <a href='#' className={`${styles['footer__link']} ${styles['footer__link--youtube']}`} aria-label="Go to youtube">
              <SvgYoutube aria-label={'Ютуб'}/>
            </a>
          </li>
          </ul>
      </nav>
    </footer>
  );
}
