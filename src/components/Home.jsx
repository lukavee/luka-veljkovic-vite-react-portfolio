import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2f3e46]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-4xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#84a98c]">
          Luka Veljkovic
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#cad2c5]">
          I'm a Front-End Developer
        </h2>
        <p className="text-[#f9f9f9] py-4 max-w-[700px]">
          As a junior front-end developer with a strong design background, I am
          eager to take on new challenges and expand my skills. I'm always
          looking for ways to push the boundaries of what is possible in
          front-end development, and to create user interfaces that are both
          functional and beautiful.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              My Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
