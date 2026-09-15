import { BadgeCheck, CheckCheck, Star, TruckIcon } from 'lucide-react'

const featureList = [
  {
    name: 'Curated Products',
    slug: 'Provide free home delivery for all product over $100',
    icon: <Star fill="#014162" className="size-10 text-app-main" />,
  },
  {
    name: 'Handmade',
    slug: 'WE ensure the product quality that is our main goal',
    icon: <CheckCheck className="size-10  text-app-main" />,
  },
  {
    name: 'Natural Food',
    slug: 'Return product within 3 days for any product you buy',
    icon: <BadgeCheck fill="#014162" className="size-10 text-white " />,
  },
  {
    name: 'Free home delivery',
    slug: 'We ensure the product that you can trust easily',
    icon: <TruckIcon className="size-10 text-app-main" />,
  },
]

const FeatureCards = () => {
  return featureList?.map(({ name, slug, icon }) => (
    <div key={name}>
      <div className="flex items-center gap-3 px-3 py-3 lg:py-0">
        <div className="flex size-11 shrink-0 items-center justify-center">{icon}</div>

        <div className="flex flex-col gap-1.5">
          <h4 className="text-20 font-bold text-gray-900">{name}</h4>

          <p className="text-base font-bold leading-5 text-gray-800">{slug} </p>
        </div>
      </div>
    </div>
  ))
}

export default FeatureCards
