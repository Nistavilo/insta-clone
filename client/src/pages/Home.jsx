import React from 'react'
import UserSideBar from '../components/UserSideBar'

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex my-[88px]">
        {/* Left side */}
        <div className="flex-[3]">
          <div className="flex flex-col gap-[20px]">
            {/* Geçici placeholder */}
            <div className="text-center text-gray-500 py-20 border border-dashed border-gray-300 rounded-lg">
              Gönderiler yakında burada görünecek!
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-[2] max-md:hidden">
          <UserSideBar />
        </div>
      </div>
    </div>
  )
}

export default Home

