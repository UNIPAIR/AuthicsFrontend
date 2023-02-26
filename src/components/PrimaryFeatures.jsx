import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Image/video editing',
    description:
      "The photo below was originally shared by the First Lady, but the modified version below eventually went viral. ",
    image: screenshotPayroll,
  },
  {
    title: 'Deepfakes',
    description:
      "This is not a real video of Morgan Freeman. With deepfake technology, anyone can create a photo-realistic video of anyone they want doing anything you can imagine. This tech is on the rise, and the number of circulating deepfakes doubles every six months.",
    image: screenshotExpenses,
  },
  {
    title: 'Misinformation',
    description:
      "Misinformation is a growing problem, and technological advances make it more dangerous by the day. To protect our elections, reputations, relationships, and careers, we need to know what's real.",
    image: screenshotVatReturns,
  },
  
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-slate-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={2245}
        
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center ">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Into the Deep End
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Society is already facing an influx of falsely generated content. See for yourself below.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 "
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 ">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 ">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 ',
                        selectedIndex === featureIndex
                          ? 'bg-white '
                          : 'hover:bg-white/10 '
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-red-800'
                              : 'text-red-100 hover:text-white '
                          )}
                        >
                          <span className="absolute inset-0 rounded-full " />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm ',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels >
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 ">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10  overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-red-900/20 max-w-100 ">
                      <Image
                        className="max-w-100"
                        src={feature.image}
                        alt=""
                        priority
                        sizes=''
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
