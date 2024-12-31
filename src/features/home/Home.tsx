import { FaGithub } from "react-icons/fa";
import SelectStationsCard from "./SelectStationsCard";

function Home() {
  function handleGithubClick() {
    window.open("https://github.com/afriddev");
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-between pb-10 relative">
      <div className="absolute left-10 bottom-20 border border-black h-fit -w-fit px-8 w-[100vw] hidden lg:flex lg:max-w-[30vw]  flex-col gap-3  text-black py-3 rounded-md bg-white shadow-xl drop-shadow-xl ">
        <div>
          1. Due to free hosting inital latency may be high due to docker container
         sleep 😴
        </div>

        <div>2. To change any station details OR to solve BUG feel free to contact to my Gmail, You need Secret Key 😁</div>
      </div>

      <div className="items-center w-full justify-between flex px-5 lg:px-20 py-2 pt-10">
        <img src="logo.png" className="cursor-pointer  h-16 lg:h-32" />
        <div
          className="cursor-pointer lg:hover:scale-110"
          onClick={handleGithubClick}
        >
          <FaGithub className=" w-10 h-10  lg:h-20 lg:w-20 rounded-full bg-white/10 lg:p-5 p-2 " />
        </div>
      </div>

      <div className="w-[90vw] h-[60vh] lg:w-[30vw] lg:h-[50vh]">
        <SelectStationsCard />
      </div>

      <div className="w-full flex  items-center justify-center">
        <div className="text-white/70 lg:text-lg">
          Developed By{" "}
          <span
            onClick={handleGithubClick}
            className="text-white mx-1   font-bold border-b cursor-pointer"
          >
            SHAIK AFRID
          </span>{" "}
          with 💙
        </div>
      </div>
    </div>
  );
}

export default Home;
