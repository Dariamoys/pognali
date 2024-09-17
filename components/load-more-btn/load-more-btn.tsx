
import styles from './load-more-btn.module.scss';


type LoadMoreBtnProps = {
  onNextButtonClick: () => void;
}


export default function LoadMoreBtn({onNextButtonClick}: LoadMoreBtnProps) {
  const handleNextButtonClick = () => {
    onNextButtonClick();
  }

  return (
    <div className={styles['load-more']}>
      <button className={styles['load-more__button']} onClick={handleNextButtonClick}>Показать еще</button>
    </div>
  );
}
