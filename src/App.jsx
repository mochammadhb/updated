import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Routes from "./Routes";

function App() {
  return (
    <div className="min-w-screen bg-slate-100 h-auto dark:bg-gray-800 transition-all duration-500">
      <div className="max-w-xl bg-slate-100 h-auto m-auto dark:bg-gray-800 transition-all duration-500">
        <div className="w-full bg-transparent h-auto max-w-screen-sm mx-auto mt-14 mb-16 py-4">
          <Routes />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
