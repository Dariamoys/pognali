import CatalogItem from '../catalog-item/catalog-item';
import { getToken } from '@/utils/token';
import { CardData } from '@/types';
import styles from './catalog-list.module.scss';


type CatalogListProps = {
  cards: CardData[];
}


export default function CatalogList({cards}: CatalogListProps) {
  const myCardToken = getToken();

  return (
    <ul className={styles["traveler"]}>
      {
        cards &&
        cards.map((card) => (
          <li className={`${styles["traveler__item"]} ${myCardToken === card.cardId ? styles["traveler__item--my"] : ''}`} key={card.cardId}>
            <CatalogItem card={card} isMyCard={myCardToken === card.cardId}/>
          </li>
        ))
      }
    </ul>
  );
}
