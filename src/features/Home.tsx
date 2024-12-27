import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="w-full h-full">
      <div className="items-center w-full justify-between flex px-20 py-2 pt-10">
        <img src="logo.png" />
        <div>
          <FaGithub className="h-20 w-20 rounded-full bg-white/10 p-5 " />
        </div>
      </div>
      <div>
        <img src="7years.jpg" className="w-full h-full"/>
      </div>
    </div>
  );
}

export default Home;
