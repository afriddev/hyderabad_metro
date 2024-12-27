import { FaGithub } from "react-icons/fa";
import SelectStationsCard from "../utils/homeutils/SelectStationsCard";

function Home() {
  function handleGithubClick() {
    window.open("https://github.com/afriddev");
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-between pb-10">
      <div className="items-center w-full justify-between flex px-20 py-2 pt-10">
        <img src="logo.png" className="cursor-pointer" />
        <div className="cursor-pointer" onClick={handleGithubClick}>
          <FaGithub className="h-20 w-20 rounded-full bg-white/10 p-5 " />
        </div>
      </div>

      <div className="w-[30vw] h-[60vh]">
        <SelectStationsCard />
      </div>

      <div className="w-full flex  items-center font-mono justify-center">
        <div className="text-white/70 text-lg">
          Developed By{" "}
          <span onClick={handleGithubClick}  className="text-white font-bold border-b cursor-pointer">
            SHAIK AFRID
          </span>{" "}
          with 💙
        </div>
      </div>
    </div>
  );
}

export default Home;
