import { FaReact, FaHtml5, FaJs, FaGitAlt, FaGithub, FaCode } from "react-icons/fa";
import React from "react";
const  ProfileIcon=()=> {
  return (
    <div className="relative flex justify-center items-center">

      {/* Profile Image */}

      <div className="w-80 h-80 rounded-full border-4 border-cyan-400 overflow-hidden shadow-2xl">

        <img
          src="/Profile.png"
          alt="Ashish Dhungana"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Floating Icons */}

      <FaReact className="absolute text-cyan-400 text-5xl top-0 left-10 animate-bounce" />

      <FaHtml5 className="absolute text-orange-500 text-4xl bottom-10 left-0 animate-pulse" />

      <FaJs className="absolute text-yellow-400 text-4xl top-10 right-0 animate-bounce" />

      <FaGitAlt className="absolute text-red-500 text-4xl top-1/2 -right-8 animate-pulse" />

      <FaGithub className="absolute text-white text-4xl bottom-0 left-1/2 animate-bounce" />

    </div>
  );
}

export default ProfileIcon