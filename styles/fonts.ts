import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  fallback: ['system-ui', 'arial'],
  display: 'swap',
});
