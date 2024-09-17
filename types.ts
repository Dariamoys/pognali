//Страны
export type Flags = {
  png: string,
  svg: string,
}

export type CountryName = {
  common: string,
  rus: string,
}

export type Country = {
  continent: string[],
  flags: Flags,
  island: boolean,
  name: CountryName,
}

export type CountriesData = {
  [letter: string]: Country[],
}


//Отправка данных формы
export type CountryInf = {
  name: string,
  description: string,
}

export type TravelData = {
  companionCount: number,
  children: boolean,
  startDate: string,
  endDate: string,
  countryList: CountryInf[],
  hashTags?: string[],
  transport: string[],
}


//Карточки
export type CountryCardData = {
  countryData: Country,
  description: string,
}

export type CardData = {
  cardId: string,
  name: string,
  avatarUrl: string,
  countryList: CountryCardData[],
  hashTags: string[],
  transport: string[],
}

export type CardsDataAPI = {
  cardList: CardData[],
  totalCardsCount: number,
}


//Прочее
export enum Transport {
  plane = 'plane',
  bus = 'bus',
  bike = 'bike',
  walk = 'walk',
}
