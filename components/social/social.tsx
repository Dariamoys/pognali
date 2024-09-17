import Link from 'next/link';
import SvgTelegram from './telegram';
import SvgVk from './vk';
import SvgYoutube from './youtube';
import styles from './social.module.scss';

export default function Social() {
  return (
    <div className={styles['social']}>
      <ul className={styles['social__list']}>
        <li className={styles['social__item']}>
          <Link href={'#'} className={styles['social__link']}>
            <SvgTelegram aria-label={'Телеграм'}/>
          </Link>
        </li>
        <li className={styles['social__item']}>
          <Link href={'#'} className={styles['social__link']}>
            <SvgVk aria-label={'Вконтакте'}/>
          </Link>
        </li>
        <li className={styles['social__item']}>
          <Link href={'#'} className={styles['social__link']}>
            <SvgYoutube aria-label={'Ютуб'}/>
          </Link>
        </li>
      </ul>
    </div>
  );
}
