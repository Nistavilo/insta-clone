import React from "react";

export default function InstaProfile() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="max-w-3xl w-full bg-white border border-gray-300 rounded-md p-6">
        {/* Üst bölüm: profil foto + kullanıcı adı + düzenle butonu */}
        <div className="flex items-center space-x-8 mb-8">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <h2 className="text-2xl font-semibold">username_here</h2>
              <button className="border border-gray-300 rounded px-4 py-1 text-sm font-semibold hover:bg-gray-100">
                Edit Profile
              </button>
            </div>
            <button className="border border-gray-300 rounded px-3 py-1 text-xs font-semibold hover:bg-gray-100">
              Settings
            </button>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="flex justify-around text-center mb-8">
          <div>
            <span className="font-bold text-lg">123</span>
            <p className="text-sm text-gray-600">Posts</p>
          </div>
          <div>
            <span className="font-bold text-lg">4.5K</span>
            <p className="text-sm text-gray-600">Followers</p>
          </div>
          <div>
            <span className="font-bold text-lg">350</span>
            <p className="text-sm text-gray-600">Following</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8 px-4">
          <p className="text-sm">
            This is the user bio. You can write something interesting about
            yourself here.
          </p>
        </div>

        {/* Gönderi galerisi */}
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-28 rounded-md overflow-hidden cursor-pointer hover:opacity-80">
              <img
                src={`https://picsum.photos/id/${i + 10}/150/150`}
                alt={`Post ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
