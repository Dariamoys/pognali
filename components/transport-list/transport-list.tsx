'use client';


import { useContext } from 'react';
import styles from '@/components//transport-list/transport-list.module.scss';
import SvgPlane from '@/components/transport-list/SvgPlane';
import SvgTrain from '@/components/transport-list/SvgTrain';
import SvgRun from '@/components/transport-list/SvgRun';
import SvgBicucle from '@/components/transport-list/SvgBicycle';
import { ExtraFormContext } from '@/hooks/use-extra-form-context';
import { Transport } from '@/types';



export default function TransportList() {
  const {transport, setTransport} = useContext(ExtraFormContext);

  const handleButtonClick = (trans: Transport) => {
    if (!transport.find((item) => item === trans)) {
      setTransport([...transport, trans]);
    } else {
      const newTrans = transport.filter((item) => item !== trans);
      setTransport(newTrans);
    }
  };


  return (
    <ul className={styles['transport-list']}>
      <li className={styles['transport__list-item']}>
        <button className={`${styles['transport__button']} ${transport.find((it) => it === Transport.plane) ? styles['transport__button--active'] : ''}`} onClick={() => handleButtonClick(Transport.plane) } type='button' aria-label="Choose plane">
          <SvgPlane />
        </button>
      </li>
      <li className={styles['transport__list-item']}>
        <button className={`${styles['transport__button']} ${transport.find((it) => it === Transport.bus) ? styles['transport__button--active'] : ''}`} onClick={() => handleButtonClick(Transport.bus) } type='button' aria-label="Choose train">
          <SvgTrain />
        </button>
      </li>
      <li className={styles['transport__list-item']}>
        <button className={`${styles['transport__button']} ${transport.find((it) => it === Transport.bike)? styles['transport__button--active'] : ''}`} onClick={() => handleButtonClick(Transport.bike) } type='button' aria-label="Choose bike">
          <SvgRun />
        </button>
      </li>
      <li className={styles['transport__list-item']}>
        <button className={`${styles['transport__button']} ${transport.find((it) => it === Transport.walk) ? styles['transport__button--active'] : ''}`} onClick={() => handleButtonClick(Transport.walk) } type='button' aria-label="Choose walk">
          <SvgBicucle />
        </button>
      </li>
    </ul>)
}

// 'use client';

// import { useState } from 'react';
// import styles from '@/components/transport-list/transport-list.module.scss';

// export default function Transport() {
//   const [activeButtons, setActiveButtons] = useState<boolean[]>([false, false, false, false]);

//   const handleButtonClick = (index: number) => {
//     setActiveButtons(prevButtons => {
//       const newButtons = [...prevButtons];
//       newButtons[index] = !newButtons[index];
//       return newButtons;
//     });
//   };

//   return (
//     <div className="transport-list">
//       <button
//         className={`${styles['transport__button']} ${activeButtons[0] ? styles['transport__button--active'] : ''}`}
//         type="button"
//         onClick={() => handleButtonClick(0)}>
//         <svg width="23" height="22" viewBox="0 0 23 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//           <g opacity="0.3" clipPath="url(#clip0_1369_3717)">
//           <path d="M18.5347 1.18042C17.7301 1.36085 16.9218 1.54212 16.6212 2.03885L14.2941 6.4124L1.79919 9.21454L1.29295 10.612L10.8544 11.4648L9.23212 15.251L5.60602 16.0642L4.69562 17.5523L7.31158 17.8202L7.60988 19.0372C7.74352 19.4686 8.21259 19.7566 8.61297 19.6668L9.82168 19.3958L11.2228 21.6493L12.1332 20.1613L11.2383 16.5103L13.8637 13.3537L18.8731 21.6469L19.8832 20.5657L16.8005 7.98882L19.6314 3.93156C19.9358 3.43399 19.7373 2.62393 19.5378 1.81006C19.439 1.40693 18.9351 1.09063 18.5347 1.18042Z" fill="#1D2E5B"/>
//           </g>
//           <defs>
//           <clipPath id="clip0_1369_3717">
//           <rect width="23" height="22" fill="white"/>
//           </clipPath>
//           </defs>
//         </svg>
//       </button>
//       <button
//         className={`transport__button ${activeButtons[1] ? 'transport__button--active' : ''}`}
//         type="button"
//         onClick={() => handleButtonClick(1)}>
//         <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//           <path opacity="0.15" d="M4.50106 13.5714C4.50106 13.1771 4.35463 12.8404 4.06179 12.5614C3.76894 12.2824 3.41557 12.1429 3.00168 12.1429C2.58779 12.1429 2.23442 12.2824 1.94158 12.5614C1.64873 12.8404 1.50231 13.1771 1.50231 13.5714C1.50231 13.9658 1.64873 14.3025 1.94158 14.5815C2.23442 14.8605 2.58779 15 3.00168 15C3.41557 15 3.76894 14.8605 4.06179 14.5815C4.35463 14.3025 4.50106 13.9658 4.50106 13.5714ZM16.4961 13.5714C16.4961 13.1771 16.3496 12.8404 16.0568 12.5614C15.7639 12.2824 15.4106 12.1429 14.9967 12.1429C14.5828 12.1429 14.2294 12.2824 13.9366 12.5614C13.6437 12.8404 13.4973 13.1771 13.4973 13.5714C13.4973 13.9658 13.6437 14.3025 13.9366 14.5815C14.2294 14.8605 14.5828 15 14.9967 15C15.4106 15 15.7639 14.8605 16.0568 14.5815C16.3496 14.3025 16.4961 13.9658 16.4961 13.5714ZM15.9572 9.15179L15.1138 4.86607C15.0748 4.69494 14.9869 4.55543 14.8503 4.44754C14.7136 4.33966 14.5555 4.28571 14.3758 4.28571H3.62252C3.4429 4.28571 3.28477 4.33966 3.1481 4.44754C3.01144 4.55543 2.92359 4.69494 2.88454 4.86607L2.04114 9.15179C2.0021 9.375 2.05676 9.57217 2.20514 9.7433C2.35351 9.91443 2.54484 10 2.77912 10H15.2192C15.4535 10 15.6449 9.91443 15.7932 9.7433C15.9416 9.57217 15.9963 9.375 15.9572 9.15179ZM13.3099 2.32143C13.3099 2.17262 13.2552 2.04613 13.1459 1.94196C13.0366 1.8378 12.9038 1.78571 12.7476 1.78571H5.25074C5.09456 1.78571 4.9618 1.8378 4.85247 1.94196C4.74314 2.04613 4.68848 2.17262 4.68848 2.32143C4.68848 2.47024 4.74314 2.59673 4.85247 2.70089C4.9618 2.80506 5.09456 2.85714 5.25074 2.85714H12.7476C12.9038 2.85714 13.0366 2.80506 13.1459 2.70089C13.2552 2.59673 13.3099 2.47024 13.3099 2.32143ZM17.9954 10.4129V17.1429H16.4961V18.5714C16.4961 18.9658 16.3496 19.3025 16.0568 19.5815C15.7639 19.8605 15.4106 20 14.9967 20C14.5828 20 14.2294 19.8605 13.9366 19.5815C13.6437 19.3025 13.4973 18.9658 13.4973 18.5714V17.1429H4.50106V18.5714C4.50106 18.9658 4.35463 19.3025 4.06179 19.5815C3.76894 19.8605 3.41557 20 3.00168 20C2.58779 20 2.23442 19.8605 1.94158 19.5815C1.64873 19.3025 1.50231 18.9658 1.50231 18.5714V17.1429H0.00292969V10.4129C0.00292969 9.57961 0.100545 8.75 0.295776 7.92411L1.50231 2.85714C1.57259 2.27679 1.95329 1.76711 2.64441 1.32812C3.33553 0.889137 4.23359 0.558036 5.3386 0.334821C6.44361 0.111607 7.6638 0 8.99918 0C10.3346 0 11.5548 0.111607 12.6598 0.334821C13.7648 0.558036 14.6628 0.889137 15.354 1.32812C16.0451 1.76711 16.4258 2.27679 16.4961 2.85714L17.726 7.92411C17.9056 8.68304 17.9954 9.51265 17.9954 10.4129Z" fill="#1D2E5B"/>
//         </svg>
//       </button>
//       <button
//         className={`transport__button ${activeButtons[2] ? 'transport__button--active' : ''}`}
//         type="button"
//         onClick={() => handleButtonClick(2)}>
//         <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//           <path opacity="0.15" d="M18.9453 21.875C18.0568 21.875 17.1883 21.6115 16.4496 21.1179C15.7109 20.6243 15.1351 19.9227 14.7951 19.1019C14.4551 18.2811 14.3661 17.3778 14.5394 16.5064C14.7128 15.635 15.1406 14.8346 15.7689 14.2064C16.3971 13.5781 17.1975 13.1503 18.0689 12.9769C18.9403 12.8036 19.8436 12.8926 20.6644 13.2326C21.4852 13.5726 22.1868 14.1484 22.6804 14.8871C23.174 15.6258 23.4375 16.4943 23.4375 17.3828C23.4362 18.5738 22.9625 19.7157 22.1203 20.5578C21.2782 21.4 20.1363 21.8737 18.9453 21.875ZM18.9453 14.4531C18.3659 14.4531 17.7995 14.6249 17.3177 14.9469C16.8359 15.2688 16.4604 15.7263 16.2386 16.2617C16.0169 16.797 15.9589 17.3861 16.0719 17.9544C16.185 18.5227 16.464 19.0447 16.8737 19.4544C17.2834 19.8641 17.8055 20.1432 18.3738 20.2562C18.9421 20.3692 19.5311 20.3112 20.0665 20.0895C20.6018 19.8678 21.0593 19.4922 21.3813 19.0105C21.7032 18.5287 21.875 17.9623 21.875 17.3828C21.8741 16.6061 21.5651 15.8614 21.0159 15.3122C20.4667 14.763 19.722 14.454 18.9453 14.4531Z" fill="#1D2E5B"/>
//           <path opacity="0.15" d="M6.05469 21.875C5.16622 21.875 4.2977 21.6115 3.55896 21.1179C2.82023 20.6243 2.24445 19.9227 1.90445 19.1019C1.56445 18.2811 1.47549 17.3778 1.64882 16.5064C1.82215 15.635 2.24999 14.8346 2.87823 14.2064C3.50648 13.5781 4.30691 13.1503 5.17831 12.9769C6.04971 12.8036 6.95294 12.8926 7.77378 13.2326C8.59461 13.5726 9.2962 14.1484 9.78981 14.8871C10.2834 15.6258 10.5469 16.4943 10.5469 17.3828C10.5456 18.5738 10.0719 19.7157 9.22972 20.5578C8.38755 21.4 7.24569 21.8737 6.05469 21.875ZM6.05469 14.4531C5.47525 14.4531 4.90883 14.6249 4.42704 14.9469C3.94526 15.2688 3.56975 15.7263 3.34801 16.2617C3.12627 16.797 3.06825 17.3861 3.1813 17.9544C3.29434 18.5227 3.57336 19.0447 3.98309 19.4544C4.39281 19.8641 4.91483 20.1432 5.48314 20.2562C6.05144 20.3692 6.6405 20.3112 7.17583 20.0895C7.71116 19.8678 8.16872 19.4922 8.49064 19.0105C8.81255 18.5287 8.98438 17.9623 8.98438 17.3828C8.98347 16.6061 8.67452 15.8614 8.12529 15.3122C7.57607 14.763 6.83141 14.454 6.05469 14.4531Z" fill="#1D2E5B"/>
//           <path opacity="0.15" d="M15.625 6.25005C15.8308 6.25076 16.0347 6.21067 16.2249 6.1321C16.4151 6.05352 16.5879 5.93802 16.7332 5.79227C16.8785 5.64651 16.9934 5.47341 17.0714 5.28295C17.1494 5.09249 17.1889 4.88847 17.1875 4.68267C17.1898 4.4779 17.1512 4.27473 17.0741 4.08504C16.9969 3.89535 16.8827 3.72295 16.7381 3.57792C16.5935 3.43289 16.4215 3.31814 16.232 3.24038C16.0426 3.16262 15.8395 3.12341 15.6348 3.12505C15.4296 3.12441 15.2263 3.16419 15.0365 3.24212C14.8466 3.32005 14.674 3.4346 14.5285 3.57924C14.3829 3.72388 14.2673 3.89577 14.1882 4.0851C14.1091 4.27442 14.068 4.47748 14.0674 4.68267C14.0667 4.88786 14.1065 5.09116 14.1845 5.28098C14.2624 5.4708 14.3769 5.64341 14.5216 5.78895C14.6662 5.9345 14.8381 6.05013 15.0274 6.12924C15.2168 6.20836 15.4198 6.24941 15.625 6.25005Z" fill="#1D2E5B"/>
//           <path opacity="0.15" d="M17.9468 9.37529H15.8101C15.775 9.3753 15.7406 9.36587 15.7104 9.348C15.6803 9.33013 15.6555 9.30448 15.6387 9.27373L14.0889 6.43339C13.9797 6.22232 13.8223 6.03991 13.6295 5.90096C13.4367 5.762 13.2139 5.67039 12.9791 5.63354C12.7444 5.59669 12.5042 5.61564 12.2781 5.68886C12.052 5.76208 11.8463 5.8875 11.6777 6.05498L8.2666 9.49248C7.98003 9.78497 7.81736 10.1768 7.8125 10.5862C7.8125 11.4358 8.42773 11.7386 8.71582 11.9095C10.1074 12.7112 11.0874 13.2977 11.625 13.6233C11.6536 13.6407 11.6772 13.6652 11.6936 13.6943C11.71 13.7235 11.7187 13.7564 11.7188 13.7898V17.1648C11.7188 17.5852 12.042 17.9461 12.4624 17.9671C12.568 17.9722 12.6734 17.9558 12.7725 17.9189C12.8715 17.8821 12.962 17.8255 13.0386 17.7527C13.1151 17.6798 13.1761 17.5922 13.2178 17.4951C13.2595 17.398 13.2811 17.2935 13.2813 17.1878V12.9886C13.2813 12.8645 13.2519 12.7423 13.1953 12.6319C13.1388 12.5215 13.0568 12.4262 12.9561 12.3538L11.1494 11.0545C11.1267 11.0383 11.1078 11.0174 11.0939 10.9932C11.0799 10.9691 11.0713 10.9422 11.0687 10.9144C11.066 10.8867 11.0693 10.8587 11.0783 10.8323C11.0874 10.8059 11.1019 10.7818 11.1211 10.7615L13.1719 8.57451C13.1929 8.55201 13.219 8.5348 13.2479 8.52428C13.2768 8.51377 13.3079 8.51025 13.3384 8.51401C13.369 8.51777 13.3982 8.52871 13.4238 8.54593C13.4493 8.56314 13.4704 8.58615 13.4854 8.61308L14.5508 10.5359C14.6185 10.6578 14.7176 10.7594 14.8378 10.83C14.958 10.9007 15.0949 10.9379 15.2344 10.9378H17.9688C18.0746 10.9379 18.1793 10.9165 18.2767 10.8749C18.374 10.8333 18.4618 10.7724 18.5349 10.6958C18.608 10.6193 18.6647 10.5286 18.7017 10.4295C18.7387 10.3303 18.7551 10.2247 18.75 10.1189C18.7295 9.69853 18.3672 9.37529 17.9468 9.37529Z" fill="#1D2E5B"/>
//         </svg>
//       </button>
//       <button
//         className={`transport__button ${activeButtons[3] ? 'transport__button--active' : ''}`}
//         type="button"
//         onClick={() => handleButtonClick(3)}>
//         <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//           <path opacity="0.15" d="M15.4544 6C16.4586 6 17.2726 5.10457 17.2726 4C17.2726 2.89543 16.4586 2 15.4544 2C14.4503 2 13.6362 2.89543 13.6362 4C13.6362 5.10457 14.4503 6 15.4544 6Z" fill="#1D2E5B"/>
//           <path opacity="0.15" d="M14.3428 10.969C14.5514 11.311 14.8508 11.5742 15.2001 11.7227C15.5495 11.8712 15.9319 11.8978 16.2955 11.799L19.31 10.97L18.8709 9.02997L15.8564 9.85897L14.6027 7.79197C14.3349 7.35053 13.9192 7.04354 13.4464 6.93797L9.95002 6.16797C9.55888 6.08162 9.15277 6.13933 8.79441 6.33217C8.43606 6.52502 8.14539 6.84229 7.9673 7.23497L6.46002 10.551L8.08639 11.446L9.59366 8.12897L11.3818 8.52297L6.7582 17H2.72729V19H6.7582C7.39275 19 7.99002 18.628 8.3173 18.029L10.0609 14.833L14.76 15.867L16.4109 21.316L18.1346 20.683L16.4846 15.235C16.3827 14.9005 16.2026 14.6014 15.9622 14.3679C15.7219 14.1345 15.4298 13.9748 15.1155 13.905L12.3527 13.298L13.9637 10.344L14.3428 10.969Z" fill="#1D2E5B"/>
//         </svg>
//         </button>
//     </div>
//   );
// }