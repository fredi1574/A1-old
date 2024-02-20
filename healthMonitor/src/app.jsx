import Header from "./components/Header";
import Registration from "./components/Registration";
import Card from "./components/main/Card";

export function App() {
  return (
    <div className="h-full min-h-[100vh] bg-[#D3FFE2] flex flex-col text-white">
      <Header />
      <Card />
      {/* <Registration /> */}
      {/* <footer className="text-center text-black p-4">
        © 2024. All rights reserved.
      </footer> */}
    </div>
  );
}
