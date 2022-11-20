import React, { useEffect, useState } from "react";
import { ProfileCard } from "./ProfileCard";

export const Profile = () => {
  const [profile, setProfile] = useState([]);
  const getProfile = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/albums",
      
    );
    const data = await response.json();
    
    setProfile(data);
};

  useEffect(() => {
    getProfile();

  }, []);

  
  return (
    <div className=" text-center">
      <h1 className="text-black p-5 text-boldtext-xl lg:text-4xl">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-2 ">
        {profile.map(({ title}) => (
                 <ProfileCard key={title} title={title}  />
        ))}
      </div>
    </div>
  );
};
