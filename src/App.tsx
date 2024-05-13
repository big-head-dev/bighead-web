import type { Component } from "solid-js";

import logo from "./assets/logo.svg";

const App: Component = () => {
  return (
    <div class="min-w-full min-h-screen flex items-center justify-center">
      <img src={logo} class="min-h-5 hover:animate-ping" alt="bighead logo" />
    </div>
  );
};

export default App;
