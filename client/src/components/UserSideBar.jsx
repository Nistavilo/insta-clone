import React from "react";
import { Avatar, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";

const RightBox = () => {
  // Statik örnek veri
  const user = {
    username: "emirhan",
    fullName: "Emirhan Yılmaz",
    profilePicture: "https://via.placeholder.com/150",
  };

  const friends = [
    {
      _id: "1",
      username: "ahmet",
      fullName: "Ahmet Demir",
      profilePicture: "https://via.placeholder.com/150",
    },
    {
      _id: "2",
      username: "ayse",
      fullName: "Ayşe Kara",
      profilePicture: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-4 w-full max-w-sm bg-white rounded-lg shadow-md">
      {/* Hesap Bilgisi */}
      <div className="flex items-center gap-4 mb-6">
        <Link to={`/profile/${user.username}`}>
          <Avatar
            alt={user.username}
            src={user.profilePicture}
            sx={{ width: 56, height: 56 }}
            className="cursor-pointer"
          />
        </Link>
        <div>
          <Link
            to={`/profile/${user.username}`}
            className="font-semibold text-gray-900 hover:underline"
          >
            {user.username}
          </Link>
          <p className="text-gray-500 text-sm">{user.fullName}</p>
        </div>
      </div>

      {/* Başlık */}
      <h3 className="text-gray-700 font-semibold mb-3">My Friends</h3>

      {/* Arkadaş Listesi */}
      <ul className="space-y-4">
        {friends.map((friend) => (
          <li
            key={friend._id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
          >
            <div className="flex items-center gap-3">
              <Link to={`/profile/${friend.username}`}>
                <Avatar
                  alt={friend.username}
                  src={friend.profilePicture}
                  sx={{ width: 40, height: 40 }}
                  className="cursor-pointer"
                />
              </Link>
              <div>
                <Link
                  to={`/profile/${friend.username}`}
                  className="font-medium text-gray-900 hover:underline"
                >
                  {friend.username}
                </Link>
                <p className="text-gray-500 text-xs">{friend.fullName}</p>
              </div>
            </div>
            <Button
              component={Link}
              to={`/profile/${friend.username}`}
              variant="contained"
              size="small"
              endIcon={<ArrowCircleRightOutlinedIcon />}
            >
              Profile Git
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightBox;
