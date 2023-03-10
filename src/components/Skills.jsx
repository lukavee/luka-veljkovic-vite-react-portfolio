import React from "react"
import HtmlImg from "../assets/frontendicons/html.png"
import CssImg from "../assets/frontendicons/css.png"
import ReactImg from "../assets/frontendicons/react.png"
import TailwindImg from "../assets/frontendicons/tailwind.png"
import BootstrapImg from "../assets/frontendicons/bootstrap.png"
import GitImg from "../assets/frontendicons/git.png"
import GithubImg from "../assets/frontendicons/github.png"
import JavaScriptImg from "../assets/frontendicons/javaScript.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#2f3e46] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HtmlImg} alt="Html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CssImg} alt="Css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScriptImg}
              alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={BootstrapImg}
              alt="Bootsrap icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TailwindImg}
              alt="Tailwind icon"
            />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitImg} alt="Git icon" />
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GithubImg} alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
