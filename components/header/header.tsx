'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';
import container from '@/styles/container.module.scss';
import { basePath } from '@/const';
import Contacts from '../contacts/contacts';
import Social from '../social/social';


export default function Header() {
  const pathname = usePathname()
  const menuRef = useRef<HTMLElement>(null)
  const [isToggled, setToggle] = useState<boolean>(false);
  const [listening, setListening] = useState(false);

  const toggleSideNav = () => {
    setToggle(!isToggled);
  }

  const  scrollConntroller = {
    disabledScroll() {
      document.body.style.cssText = `
        overflow: hidden;
      `;
    }
  }

  const setToggleClass = () => {
    return `${styles['header__btn']} ${isToggled ? styles['header__btn-active'] : ''}`
  }

  const setHeaderToggleClass = () => {
    return `${styles['header']} ${isToggled ? styles['is-open'] : ''}`
  }

  const listenForOutsideClicks = () => {
    return () => {
      if (listening) return;
      if (!menuRef.current) return;
      setListening(true)
      ;[`click`, `touchstart`].forEach((type) => {
        document.addEventListener(`click`, (evt) => {
          const cur = menuRef.current;
          const node = evt.target;

          if (cur?.contains(node as HTMLElement)) return;

          setToggle(false);
        })
      })
    }
  }

  useEffect(listenForOutsideClicks)

  useEffect(() => {
   `${isToggled ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'}`;
  }, [isToggled]);

  return (
    <header className={setHeaderToggleClass()} ref={menuRef}>
      <div className={`${container['main-container']}`}>
        <div className={styles['header__wrapper']}>
          {
            pathname === '/'
            ? <div className={styles['header__logo']}>
                <div className={styles['header__logo-desctop']}>
                  <Image
                    src={`${basePath}/img/layout/logo-full.png`}
                    width={200}
                    height={50}
                    alt='Логотип'
                  />
                </div>
                <div className={styles['header__logo-tablet']}>
                  <Image
                    src={`${basePath}/img/layout/logo-full.png`}
                    width={166}
                    height={42}
                    alt='Логотип'
                  />
                </div>
                <div className={styles['header__logo-tablet--open']}>
                  <Image
                    src={`${basePath}/img/layout/logo-tablet-open.png`}
                    width={166}
                    height={42}
                    alt='Логотип'
                  />
                </div>
                <div className={styles['header__logo-mobile']}>
                  <Image
                    src={`${basePath}/img/layout/logo-mobile.png`}
                    width={96}
                    height={15}
                    alt='Логотип'
                  />
                </div>
                <div className={styles['header__logo-mobile--open']}>
                  <Image
                    src={`${basePath}/img/layout/logo-mobile-open.png`}
                    width={96}
                    height={15}
                    alt='Логотип'
                  />
                </div>
              </div>
            : <Link href={'/'} className={styles['header__logo']}>
                <div className={styles['header__logo-desctop']}>
                  <Image
                    src={`${basePath}/img/layout/logo-full.png`}
                    width={200}
                    height={50}
                    alt='Логотип'
                  />
                </div>
                <div className={styles['header__logo-tablet']}>
                  <Image
                    src={`${basePath}/img/layout/logo-full.png`}
                    width={166}
                    height={42}
                    alt='Логотип'
                  />
                </div>
                <div className={styles['header__logo-tablet--open']}>
                  <Image
                    src={`${basePath}/img/layout/logo-tablet-open.png`}
                    width={166}
                    height={42}
                    alt='Логотип'
                  />
                </div>
                <div className={styles['header__logo-mobile']}>
                  <Image
                    src={`${basePath}/img/layout/logo-mobile.png`}
                    width={96}
                    height={15}
                    alt='Логотип'
                  />
                  <div className={styles['header__logo-mobile--open']}>
                  <Image
                    src={`${basePath}/img/layout/logo-mobile-open.png`}
                    width={96}
                    height={15}
                    alt='Логотип'
                  />
                </div>
                </div>
              </Link>
          }
          <div className={styles['header__nav-container']}>
            <div className={styles['header__nav']}>
              <ul className={styles['header__list']}>
                <li className={styles['header__item']}>
                  <Link href={'/'} className={styles['header__link']}><span data-hover='О сервисе'>О сервисе</span></Link>
                </li>
                <li className={styles['header__item']}>
                  <Link href={'/form'} className={styles['header__link']}><span data-hover='Направления'>Направления</span></Link>
                </li>
                <li className={styles['header__item']}>
                  <Link href={'/catalog'} className={styles['header__link']}><span data-hover='Попутчики'>Попутчики</span></Link>
                </li>
              </ul>
            </div>
            <div className={styles['header__contacts']}>
              <Contacts />
            </div>
            <div className={styles['header__social']}>
              <Social />
            </div>
          </div>
          <button
          className={setToggleClass()}
          onClick={toggleSideNav}
          >
            <Image className={styles['menu-open']}
              src={`${basePath}/img/layout/menu-open.svg`}
              width={25}
              height={11}
              alt='Кнопка'
            />
            <Image className={styles['menu-close']}
              src={`${basePath}/img/layout/menu-close.svg`}
              width={18}
              height={19}
              alt='Кнопка'
            />
          </button>
        </div>
      </div>
    </header>
  );
}
