import { Outlet } from 'react-router-dom'
import imgIcons from '@/assets/images/auth/auth-img.png'
import imgBg from '@/assets/images/auth/hero-bg.png'

const AuthImageLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-3">
      {/* Image */}
      <div
        className="relative hidden bg-cover bg-center lg:block"
        style={{
          backgroundImage: `linear-gradient(
            rgba(1, 65, 98, 0.50),
            rgba(1, 65, 98, 0.50)
          ), url(${imgBg})`,
        }}
      >
        <img
          src={imgIcons}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          alt="Auth illustration"
        />
      </div>

      {/* Form */}
      <div className="col-span-3 p-3 md:p-10 lg:col-span-2">
        <div className="w-full rounded-[40px] border border-gray-200 px-6 py-16 shadow-lg md:px-20">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthImageLayout
