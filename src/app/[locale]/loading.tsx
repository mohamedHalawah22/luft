'use client';
import { useTranslations } from 'next-intl';

import Spinner from '@/components/shared/Spinner';

function Loading() {
  const t = useTranslations('common.loading');

  return (
    <div className='flex h-dvh w-dvw flex-col items-center justify-center'>
      <Spinner />
      <p className='font-semibold text-grayish-700 md:text-lg xl:text-xl'>
        {t('text')}
      </p>
    </div>
  );
}
export default Loading;
