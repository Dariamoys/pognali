const isProd = process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/intern-pognali-1-1' : '';

export const MIN_COUNT_OF_FRIENDS = 1;
export const MAX_COUNT_OF_FRIENDS = 10;

export const MIN_COUNT_OF_DAYS = 2;
export const MAX_COUNT_OF_DAYS = 31;

export const FIRST_MONTH_DAY = 1;

export const STEPS_INFO = [
  {
    id: 1,
    title: 'Шаг 1. Даты пребывания',
    subtitle: 'Даты',
  }, {
    id: 2,
    title: 'Шаг 2. Маршрут',
    subtitle: 'Маршрут',
  }, {
    id: 3,
    title: 'Шаг 3. Развлечения',
    subtitle: 'Развлечения',
  },
]

export const COUNTRIES_URL = 'https://restcountries.com/v3.1/all?fields=translations,flags';
export const COUNTRIES_URL_REGION = 'https://restcountries.com/v3.1/all?fields=translations,region,flags';
export const API_URL = 'https://lets-go-8s43.onrender.com/';

export const ALPHABET = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ч', 'Ш', 'Э', 'Ю', 'Я'];

export enum Regions {
  eurupe = 'Europe',
  asia = "Asia",
  america = 'North_America',
  oceania = 'Oceania',
  africa = 'Africa',
}

export const COUNT_CARDS_PER_PAGE = 4;

export const TABLET_WIDTH = 1023;
