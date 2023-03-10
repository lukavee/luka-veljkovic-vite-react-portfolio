import React from "react"
import PizzaImage from "../assets/projects/pizzaweb.png"
import MusicPlayerImage from "../assets/projects/musicplayerweb.png"
import MuscleMentorImage from "../assets/projects/muslcementor.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#2f3e46]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experience
          </p>
          <p className="py-6">Hover to check my recent work</p>
        </div>
        {/*Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${PizzaImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effect*/}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML and CSS Website
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://lozzovic-pizza-online-restaurant.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/lukavee/Lozzovic-Pizza-Website/tree/main/Lozzovic%20Project"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MusicPlayerImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effect*/}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                JavaScript App
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://anime-music-player.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/lukavee/Anime-Music-Player"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MuscleMentorImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effect*/}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React App
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://muscle-mentor.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/lukavee/MuscleMentor"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
