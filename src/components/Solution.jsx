import clsx from 'clsx'
import backgroundImage from '@/images/background-features.jpg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className
      )}
    >
      
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({ name, price, description, features, featured = true }) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'bg-slate-900 py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      <p className="order-first mt-5 font-display text-lg text-white">{name}</p>
      <p className=" font-display text-5xl font-light tracking-tight text-white">
        {price}
      </p>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400'
        )}
      >
        {description}
      </p>
      
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200'
        )}
      >
      {features.map((feature) => (
        <li key={feature} className="flex items-start">
          <CheckIcon className="mt-1 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
      </ul>
    </section>
  )
}

export function Solution() {
  return (
    <section
      id="solution"
      aria-label="How We Work"
      className="bg-slate-600  py-20 sm:py-32"
    >
      
      
      <Container className="relative">
      
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">How does it </span>
            </span>{' '}
            work?
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            In short: we automate the fact-checking process through trusted datastreams and partnerships.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            price="Verified datastreams"
            description="Waldo sources verified media from our partners,
            which include political campaigns, news sites, social media platforms, and deepfake companies."
            
            features={[
              'Multiple file formats, including images, videos, and audio, are supported.',
              'Political statements and events are captured at the source, so you can be sure you are getting the most accurate information.',
              'Partnering with us to provide data is made easy through a user-friendly API.',
              'Streams contain both verified real and fake media to tackle the problem at both ends.',
            ]}
            
          />
          <div>
<svg viewBox="0 0 24 24" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(2.000000, 2.000000)" fill="#991b1b"> <path d="M10.346494,3.74811293e-13 C11.0558919,3.74811293e-13 11.6561001,0.393257293 12.1463703,1.05722297 C12.545754,1.59810241 12.8906844,2.34424015 13.1766575,3.25989455 C13.7389373,5.0602526 14.0566038,7.46502511 14.0566038,10.0235849 C14.0566038,12.5821447 13.7389373,14.9869172 13.1766575,16.7872753 C12.8906844,17.7029297 12.545754,18.4490674 12.1463703,18.9899468 C11.6561001,19.6539125 11.0558919,20.0471698 10.346494,20.0471698 C8.72332981,20.0471698 7.71939051,18.6289665 7.18391951,16.2085035 C7.16763434,16.1348905 7.16352632,16.061587 7.1703186,15.9903838 L8.80030207,15.9906287 C9.02021233,16.9694558 9.29621728,17.9312563 9.60329039,18.2496177 C9.80793547,18.4617857 10.0156954,18.5377358 10.346494,18.5377358 C10.3525053,18.5377358 10.3600292,18.5365147 10.3722666,18.5325354 C10.3950863,18.5251152 10.4240204,18.5109595 10.4588816,18.4881184 C10.5594824,18.4222046 10.6765815,18.3055866 10.8002002,18.1381716 C11.0884945,17.7477389 11.3684471,17.1421582 11.6102121,16.3680533 C12.12669,14.7143481 12.4260072,12.4484812 12.4260072,10.0235849 C12.4260072,7.5986886 12.12669,5.33282174 11.6102121,3.67911654 C11.3684471,2.90501164 11.0884945,2.29943089 10.8002002,1.90899817 C10.6765815,1.74158318 10.5594824,1.62496519 10.4588816,1.55905144 C10.4240204,1.53621032 10.3950863,1.52205463 10.3722666,1.51463437 C10.3600292,1.51065511 10.3525053,1.50943396 10.346494,1.50943396 C10.0809615,1.50943396 9.84647729,1.634002 9.59030056,1.97294969 C9.26394433,2.40475194 8.97946101,3.11005339 8.75982164,4.10291376 L7.09890062,4.10249714 C7.36411395,2.76995886 7.74433512,1.78229785 8.25423786,1.10764503 C8.80249145,0.382250163 9.52203091,3.74811293e-13 10.346494,3.74811293e-13 Z M10.5660377,12.5 L10.5660377,14.009434 L2.64150943,14.009434 C2.22469075,14.009434 1.88679245,13.6715357 1.88679245,13.254717 C1.88679245,12.8378983 2.22469075,12.5 2.64150943,12.5 L10.5660377,12.5 Z M19.245283,10.8962669 C19.6621017,10.8962669 20,11.2341652 20,11.6509839 C20,12.0678025 19.6621017,12.4057008 19.245283,12.4057008 L15.5018248,12.4066389 C15.5638331,11.915011 15.6081639,11.4104043 15.6339123,10.8966965 L19.245283,10.8962669 Z M10.5660377,9.29245283 L10.5660377,10.8018868 L0.754716981,10.8018868 C0.337898302,10.8018868 -1.89337682e-14,10.4639885 -1.86517468e-14,10.0471698 C-1.87027924e-14,9.63035113 0.337898302,9.29245283 0.754716981,9.29245283 L10.5660377,9.29245283 Z M15.5506141,7.68763695 L19.245283,7.68871971 C19.6621017,7.68871971 20,8.02661801 20,8.44343669 C20,8.82552048 19.7160716,9.14128923 19.3476936,9.19126399 L19.245283,9.19815367 L15.6508837,9.19777015 C15.6355715,8.68528869 15.601857,8.18066214 15.5506141,7.68763695 Z M10.5660377,6.08490566 L10.5660377,7.59433962 L2.64150943,7.59433962 C2.22469075,7.59433962 1.88679245,7.25644132 1.88679245,6.83962264 C1.88679245,6.45753885 2.17072089,6.1417701 2.53909881,6.09179534 L2.64150943,6.08490566 L10.5660377,6.08490566 Z"> </path> </g> </g> </g></svg>          </div>
          <Plan
            price="Made accessible through an API"
            description="Our API service allows you to flag fake media according to your business requirements."
            features={[
              'The streams are secure and reliable due to cryptographic signatures. Anyone can locally confirm the authenticity of the endorsement through an open-source algorithm.',              
              "Businesses can inform their users of the authenticity of media they are consuming.",
              'Journalists can ensure that the media they are using is authentic.',
              'Researchers can search for authenticated coverage of events.',]}
            
          />
        </div>
      </Container>
    </section>
  )
}
