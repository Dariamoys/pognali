import CatalogContainer from '@/components/catalog-container/catalog-container';
import CatalogHeader from '@/components/catalog-header/catalog-header';
import { Suspense } from 'react';


export default function Form() {
  return (
    <Suspense>
      <CatalogHeader />
      <CatalogContainer />
    </Suspense>
  );
}

