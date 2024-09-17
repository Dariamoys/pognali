// import Image from 'next/image';
// import { useId } from 'react';
// import styles from '@/components/form-direction/form-direction.module.scss';
// import container from '@/styles/container.module.scss';
// import SvgPlane from './SvgPlane';
// import SvgTrain from './SvgTrain';
// import SvgBicycle from './SvgBicycle';
// import SvgRun from './SvgRun';
// import ProgressBar from '@/components/progress-bar/progress-bar';
// import { basePath } from '@/const';

// const icons = [{
//   id: 0,
//   el: <SvgPlane />,
// }, {
//   id: 0,
//   el: <SvgTrain />,
// }, {
//   id: 0,
//   el: <SvgBicycle />,
// }, {
//   id: 0,
//   el: <SvgRun />,
// }];


// export default function FormDirection() {
//   const tagsInputId = useId();

//   return (
//     <section className={styles['form-direction']}>
//       <div className={container['main-container']}>
//         <div className={styles['form-direction__wrapper']}>
//           <div className={styles['form-direction__left-column']}>
//             <h2 className={styles['form-direction__title']}>Направления</h2>
//             <form className={styles['form-direction__form']} action={'#'}>
//               <label className={styles['form-direction__label']} htmlFor={tagsInputId}>Теги</label>
//               <input className={styles['form-direction__input']} id={tagsInputId} name='tags' type='text' placeholder='Расскажите о себе, используя хештеги' value={''}></input>
//             </form>
//           </div>
//           <div className={styles['form-direction__right-column']}>
//             <div className={styles['form-direction__user-wrapper']}>
//               <div className={styles['form-direction__image__wrapper']}>
//                 <Image src={`${basePath}/img/form-direction/user-1.jpg`} alt="Фото пользователя" width="220" height="237" />
//               </div>
//             </div>
//             <ProgressBar />
//             <div className={styles['form-direction__transport']}>
//               <h3 className={styles['form-direction__transport-title']}>Транспорт</h3>
//               <ul className={styles['form-direction__transport-list']}>
//                 {icons.map((icon)=> (
//                   <li className={styles['form-direction__transport-item']} key={icon.id}>
//                     <button className={styles['form-direction__transport-button']} type='button'>{icon.el}</button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import { ChangeEvent, useId, useState } from 'react';
import styles from '@/components/form-direction/form-direction.module.scss';
import container from '@/styles/container.module.scss';
import ProgressBar from '@/components/progress-bar/progress-bar';
import TransportList from '@/components/transport-list/transport-list'
import { basePath } from '@/const';
import { ExtraFormContext } from '@/hooks/use-extra-form-context';

const FormDirection =() => {
  const tagsTextAreaId = useId();

  const {setHashTags} = useContext(ExtraFormContext);

  const [hashtag, setHashtag] = useState<string>('');

  const handleHashtagsChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const hashtagsArray = evt.target.value.split(' ');
    if (hashtagsArray.length > 6) {
      return;
    }

    const lastWord = hashtagsArray.at(-1);

    const lastSymbol = evt.target.value.at(-1);
    if (lastSymbol === ' ') {
      const lastWord = hashtagsArray.at(-2);
      if (lastWord && hashtagsArray.lastIndexOf(lastWord) !== hashtagsArray.indexOf(lastWord)) {
        return;
      }
    }

    if (lastWord && lastWord.length > 20) {
      return;
    }
    const hashtagsArrayClear = hashtagsArray.map((item) => item.replace('#', ''));

    setHashtag(hashtagsArrayClear.map((item) => item.length > 0 ? '#' + item : '').join(' '));
    setHashTags(hashtagsArrayClear.map((item) => item.length > 0 ? '#' + item : ''))
  }


  return (
    <section className={styles['form-direction']}>
      <div className={container['main-container']}>
        <div className={styles['form-direction__wrapper']}>
          <h2 className={styles['form-direction__title']}>Направления</h2>
          <form className={styles['form-direction__form']} action={'#'}>
            <label className={styles['form-direction__label']} htmlFor={tagsTextAreaId}>Тэги</label>
            <textarea
              className={styles['form-direction__input']}
              id={tagsTextAreaId}
              placeholder='Расскажите о себе, используя хештеги'
              maxLength={70}
              value={hashtag}
              onChange={handleHashtagsChange}
            />
          </form>
          <button className={styles['form-direction__button']} type='button' >Сменить фото</button>
          <div className={styles['form-direction__user-wrapper']}>
            <ProgressBar />
            <div className={styles['form-direction__image__wrapper']}>
              <Image src={`${basePath}/img/form-direction/user-1.jpg`} alt="Фото пользователя" width="220" height="237" />
            </div>
            <div className={styles['form-direction__transport']}>
              <h3>Транспорт</h3>
              <TransportList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(FormDirection);

