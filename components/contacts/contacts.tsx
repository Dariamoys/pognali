import Link from 'next/link';
import Image from 'next/image';
import styles from './contacts.module.scss';
import { basePath } from '@/const';

export default function Contacts() {

  return (
    <div className={styles['contacts']}>
      <ul className={styles['contacts__list']}>
        <li className={styles['contacts__item']}>
          <Link href={'tel:88005558628'} className={styles['contacts__link']}>
            <Image className={styles['contacts__img-desctop']}
              src={`${basePath}/img/layout/icon-phone.svg`}
              width={50}
              height={50}
              alt='Позвонить'
            />
            <Image className={styles['contacts__img-mobile']}
              src={`${basePath}/img/layout/icon-phone-mobile.svg`}
              width={45}
              height={45}
              alt='Позвонить'
            />
            <span className={styles['contacts__text']}>8 800 555-86-28</span>
          </Link>
        </li>
        <li className={styles['contacts__item']}>
          <Link href={'mailto:mail@htmlacademy.ru'} className={styles['contacts__link']}>
            <Image className={styles['contacts__img-desctop']}
              src={`${basePath}/img/layout/icon-mail.svg`}
              width={50}
              height={50}
              alt='Написать'
            />
            <Image className={styles['contacts__img-mobile']}
              src={`${basePath}/img/layout/icon-mail-mobile.svg`}
              width={45}
              height={45}
              alt='Написать'
            />
            <span className={styles['contacts__text']}>mail@htmlacademy.ru</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}


