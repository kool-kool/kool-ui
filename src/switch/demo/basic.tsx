import React from "react";
import { Switch } from "kool-ui";

const App: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return <Switch checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />;
};

export default App;
