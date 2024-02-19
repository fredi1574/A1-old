import Registration from "./components/Registration";

export function App() {
  return (
    <header className="h-screen bg-gradient-to-b from-blue-700 to-slate-800 flex flex-col text-white p-20">
      <h1 className="text-5xl font-bold text-center mb-2">Health Monitor</h1>
      <Registration />
    </header>
  );
}
