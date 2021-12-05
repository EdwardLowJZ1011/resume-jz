import React, { useState } from "react";
export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [language, setLanguage] = useState("EN");
  const store = {
    lang: [language, setLanguage],
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
