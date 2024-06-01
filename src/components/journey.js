'use client'

import { PlusIcon } from 'lucide-react'
import { Suspense } from 'react'

import { JourneyCard } from '@/components/journey-card'

import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'

export const JourneyList = ({ items }) => {
  return (
    <Suspense fallback={<ScreenLoadingSpinner />}>
      <div className="flex flex-col items-stretch gap-12">
        {items.map((item, itemIndex) => (
          <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
            <div className="flex items-center">
              <h2>{item.year}</h2>
              <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
            </div>
            <section>
              {item.logs.map((log, logIndex) => (
                <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
                  {logIndex !== item.logs.length - 1 && (
                    <div className="absolute inset-0 flex w-6 items-center justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
                    </div>
                  )}
                  <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                    <PlusIcon size={16} />
                  </div>
                  <div className="grow pl-8">
                    <JourneyCard {...log} index={logIndex} />
                  </div>
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </Suspense>
  )
}
