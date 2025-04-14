'use client';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-red-600 text-4xl" />
    </div>
  );
}
