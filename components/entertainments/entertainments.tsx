'use client';

import Image from 'next/image';
import styles from './entertainments.module.scss';
import { basePath } from '@/const';

export default function Entertainments() {

  return (
    <div className={styles['entertainments']}>
      <form>
        <div className={styles['entertainments__item']}>
          <label>
            <span>Босния</span>
            <textarea name="country-1" maxLength={200} placeholder='План действий'
            />
          </label>
          <div className={styles['entertainments__image']}>
            <Image
              src={`${basePath}/img/layout/bosnia-herzegovina.jpg`}
              width={70}
              height={47}
              alt='Флаг Боснии-и-Герцоговины'
            />
          </div>
        </div>
        <div className={styles['entertainments__item']}>
          <label>
            <span>Чехия</span>
            <textarea name="country-1" maxLength={200} placeholder='План действий'
            />
          </label>
          <div className={styles['entertainments__image']}>
            <Image
              src={`${basePath}/img/layout/сzech.jpg`}
              width={70}
              height={47}
              alt='Флаг Боснии-и-Герцоговины'
            />
          </div>
        </div>
      </form>
    </div>
  )

}
