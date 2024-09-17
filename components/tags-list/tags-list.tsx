import styles from '@/components/tags-list/tags-list.module.scss';

const tags = [{
  id: 0,
  interest: 'бургер',
}, {
  id: 0,
  interest: 'бар',
}, {
  id: 0,
  interest: 'концерт',
}, {
  id: 0,
  interest: 'футбол',
}, {
  id: 0,
  interest: 'крафт',
}];

 export default function TagsList() {
  return (
    <div className={styles['tags']}>
      <h3 className={styles['tags__title']}>Теги</h3>
      <ul className={styles['tags__list']}>
        {tags.map((tag)=> (
          <li className={styles['tags__item']} key={tag.id}>#{tag.interest}</li>
        ))}
      </ul>
    </div>
  )
 }
