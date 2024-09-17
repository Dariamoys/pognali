import CatalogContainer from '@/components/catalog-container/catalog-container';
import CatalogHeader from '@/components/catalog-header/catalog-header';
import FormContainer from '@/components/form-container/form-container';
import { Suspense } from 'react';


export default function Form() {
  return (
    <Suspense>
      <FormContainer />
    </Suspense>
  );
}
