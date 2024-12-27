import Home from "./features/Home";

function App() {
  return (
    <div className="bg-black w-[100vw] h-[100vh] text-white">
      <div className="z-[10] fixed inset-0 w-full h-full">
        <img src="7years.jpg" className="w-full h-full" />
      </div>

      <div className="w-full z-[100]  h-full absolute inset-0">
      <Home />
      </div>
    </div>
  );
}

export default App;
  