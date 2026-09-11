import { type PropsWithChildren } from 'react'
import imgIcons from '@/assets/images/auth/auth-img.png'
import imgBg from '@/assets/images/auth/hero-bg.png'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen grid grid-cols-3  ">
      {/* Image */}
      <div
        className="relative hidden lg:block  bg-cover bg-center   "
        style={{
          backgroundImage: `linear-gradient(
            rgba(1, 65, 98, 0.50),
            rgba(1, 65, 98, 0.50)
          ), url(${imgBg})`,
        }}
      >
        <img
          src={imgIcons}
          className="absolute inset-0 w-full h-full  object-cover opacity-30"
          alt="Auth illustration"
        />
      </div>

      {/* Form */}
      <div className="col-span-3 lg:col-span-2 p-3 md:p-10 ">
        <div className="w-full rounded-[40px] px-6 md:px-20 pt-16 pb-16 border shadow-lg border-gray-200">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
