import styles from './catalog-header.module.scss';
import container from '@/styles/container.module.scss';


export default function CatalogHeader() {
  return (
    <div className={styles['cont']}>
      <div className={`${styles['page-title-wrapper']}`}>
        <div className={`${styles['page-title-wrapper__wrapper']} ${container['main-container']}`}>
          <h1 className={styles['page-title-wrapper__title']}>
            Попутчики
          </h1>
        </div>
      </div>
    </div>
  );
}
