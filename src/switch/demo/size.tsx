import React from "react";
import { Switch } from "kool-ui";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: React.FC = () => {
  return (
    <div>
      <Switch size={"small"} />
      <Switch />
    </div>
    )
};

export default App;
