import React from "react";

// components
import { MainLayout, InfoLayout } from "./components/layout";
import { Profile } from "./components/profile";

function App() {
  return (
    <MainLayout>
      <InfoLayout>
        <Profile />
      </InfoLayout>
    </MainLayout>
  );
}

export default App;
