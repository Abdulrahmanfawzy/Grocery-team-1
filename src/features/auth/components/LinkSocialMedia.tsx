import facebookIcon from '../assets/facebook-icon.png'
import googleIcon from '../assets/google icon.png'
import { Link } from 'react-router-dom'

type LinkSocialMediaProps = {
  title: string
  switchTitle: string
  path: string
  namePage: string
}

export default function LinkSocialMedia({
  title,
  switchTitle,
  path,
  namePage,
}: LinkSocialMediaProps) {
  return (
    <div className="w-full mt-6">
      {/* Continue With */}
      <p className=" text-center ">{title}</p>

      {/* Social Buttons */}
      <div className="flex justify-center gap-3 my-6">
        <button
          type="button"
          className="flex items-center flex-col lg:flex-row  gap-2 rounded-lg bg-gray-50 px-4 py-3 text-gray-700 transition hover:bg-gray-100"
        >
          <img src={googleIcon} alt="Google icon" />

          <span className='text-[11px] lg:text-base' >Continue with Google</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 flex-col lg:flex-row  rounded-lg bg-gray-50 px-4 py-3 text-gray-700 transition hover:bg-gray-100"
        >
          <img src={facebookIcon} className="object-cover" alt="facebook icon" />
          <span className='text-[11px] lg:text-base' >Continue with Facebook</span>
        </button>
      </div>

      {/* Sign Up */}
      <div className=" text-center mt-6">
        <span className="text-gray-700">{switchTitle} </span>

        <Link to={path} className="font-semibold capitalize text-app-main hover:underline">
          {namePage}
        </Link>
      </div>
    </div>
  )
}
