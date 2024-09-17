'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/components/progress-bar/progress-bar.module.scss';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { usePathname } from 'next/navigation';
import 'react-circular-progressbar/dist/styles.css';

const levelValue = 80;
export default function ProgressBar() {
  const [svgStyle, setSvgStyle] = useState<string>('');
  const pathname = usePathname();
  useEffect(() => {
    const updateColors = () => {
      if (pathname === '/form') {
        setSvgStyle(`#4d99d6`);
      } else if (window.innerWidth < 1024) {
        setSvgStyle(`#ff8d30`);
      } else {
        setSvgStyle(`#4d99d6`);
      }
    };

    updateColors();

    window.addEventListener('resize', updateColors);

    return () => {
      window.removeEventListener('resize', updateColors);
    };
  },);

  return (
    <div style={{ width: 95, height: 95 }} className={styles['progress-bar']}>
        <CircularProgressbarWithChildren
          value={levelValue}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: svgStyle,
            trailColor: "transparent"
          })}>
          <dl className={styles['progress-bar__list']}>
            <dt className={styles['progress-bar__property']}>level</dt>
            <dd className={styles['progress-bar__value']}>{levelValue}</dd>
          </dl>
        </CircularProgressbarWithChildren>
    </div>
  );
}
