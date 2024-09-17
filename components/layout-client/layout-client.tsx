import { PropsWithChildren } from 'react';
import styles from './layout-client.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles['layout']}>
      <Header />
      <main className={styles['main']}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
