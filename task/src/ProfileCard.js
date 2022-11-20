import React from 'react'

export const ProfileCard = ({ title }) => {
  
  return (
    <div className="m-5 shadow-lg w-[250px] h-[300px] md:w-[300px] md:h-[300px]">
      <img
        loading="lazy"
        className="w-10 h-10 rounded-full mb-5 ml-28  "
        src="https://avatars.dicebear.com/api/human/:seed.svg"
        alt="ProfileImage"
      />
      <h1 className="p-1 md:p-5 font-bold text-xl">{title}</h1>
      <p className=" p-1 md:p-5 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        explicabo consectetur atque harum assumenda!
      </p>
    </div>
  );
}
