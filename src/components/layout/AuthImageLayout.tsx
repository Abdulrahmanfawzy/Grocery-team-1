import { Outlet } from 'react-router-dom'
import imgIcons from '@/assets/images/auth/auth-img.png'
import imgBg from '@/assets/images/auth/hero-bg.png'

const AuthImageLayout = () => {
  return (
    // background layer
    <div
      style={{
        backgroundImage: `linear-gradient(
            rgba(1, 65, 98, 0.50),
            rgba(1, 65, 98, 0.50)
          ), url(${imgBg})`,
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(
            rgba(1, 65, 98, 0.50),
            rgba(1, 65, 98, 0.50)
          ), url(${imgIcons})`,
        }}

        className="grid min-h-screen grid-cols-3"
      >
        <div className=""></div>
        {/* Form */}
        <div className="col-span-3 p-3 md:p-10 lg:col-span-2">
          <div className="w-full bg-white rounded-3xl  lg:rounded-[40px] border border-gray-200 px-6 py-16 shadow-lg md:px-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthImageLayout
