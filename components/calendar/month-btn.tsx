import { basePath } from '@/const';
import Image from 'next/image';


export default function MonthBtn() {
  return (
    <Image
      src={`${basePath}/img/layout/icon-arrow-right.svg`}
      width={17}
      height={29}
      sizes='100vw'
      style={{ width: '100%', height: 'auto' }}
      alt='Переключить месяц'
    />
  );
}
