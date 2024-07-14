import * as React from "react";
import HomeContainer from "@/containers/HomeContainer";
import NavigationMenuDemo from "../components/Layout/NavigationMenuDemo";

const App: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HomeContainer />
    </div>
  );
};

export default App;
