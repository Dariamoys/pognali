'use client'


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.scss';

import MonthBtn from './month-btn';
import { FIRST_MONTH_DAY } from '@/const';

import { registerLocale } from  'react-datepicker';
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru);


type CalendarProps = {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (arg: Date | null) => void;
  setEndDate: (arg: Date | null) => void;
  setCountDays: (arg: number) => void;
}


export default function Calendar({startDate, endDate, setStartDate, setEndDate, setCountDays}: CalendarProps) {
  //Текущая дата
  const currentDay = new Date();

  //Смена даты
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    if (end?.getTime() !== start.getTime()) {
      setEndDate(end);
      setCountDays(end ? new Date(end?.getTime() - start?.getTime()).getDate() : 2)
    }
  };

  //Кастомный текст в ячейках календаря
  const renderDayContents = (day: number, date: Date) => {
    const dateFull = new Date(date);

    const monthName = dateFull.getDate() === FIRST_MONTH_DAY ? ` ${dateFull.toLocaleString('default', {month: 'short'}).slice(0, 3)}` : '';

    const dateText =
      <span className='day__date'>
        <span className='day__date-number'>{dateFull.getDate().toString()}</span>
        <span className='day__date-month'>{monthName}</span>
      </span>

    if (startDate?.getTime() === dateFull.getTime()) {
      return (
        <span className='day-content'>
          {dateText}
          <span className='day__info'>Заезд</span>
        </span>
      );
    }

    if (endDate?.getTime() === dateFull.getTime()) {
      return (
        <span className='day-content'>
          {dateText}
          <span className='day__info'>Выезд</span>
        </span>
      );
    }

    return (
      <span className='day-content'>{dateText}</span>
    );
  };

  //Блокировка дат более 31 дней с момента первой выбранной даты
  const isLater = (date: Date) => {
    const dateFull = new Date(date);

    if (!startDate) {
      return true;
    }

    if (startDate.getTime() + 86400000 * 30 < dateFull.getTime()) {
      return false;
    }

    return true;
  };


  return (
    <DatePicker
      locale='ru'
      onChange={onChange}
      minDate={currentDay}
      startDate={startDate}
      endDate={endDate}
      filterDate={isLater}
      renderDayContents={renderDayContents}
      selectsRange
      inline
      fixedHeight
      previousMonthButtonLabel={<MonthBtn />}
      nextMonthButtonLabel={<MonthBtn />}
    />
  );
}
