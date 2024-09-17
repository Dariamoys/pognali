'use client'

import { ExtraFormContext } from '@/hooks/use-extra-form-context';
import FormDirection from '../form-direction/form-direction';
import MainForm from '../main-form/main-form';
import { useState } from 'react';
import { Transport } from '@/types';


export default function FormContainer() {
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [transport, setTransport] = useState<Transport[]>([]);

  return (
    <ExtraFormContext.Provider value={{
      hashTags,
      setHashTags,
      transport,
      setTransport,
    }}>
      <FormDirection />
      <MainForm />
    </ExtraFormContext.Provider>
  );
}
