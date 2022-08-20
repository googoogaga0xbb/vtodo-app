import React, { useState } from "react";

interface IGlobalContextProps {
  name: string;
  description: string;
  isActive: boolean;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  name: "",
  description: "",
  isActive: false,
});

export const GlobalContextProvider = (props: any) => {
  const [name, setName] = useState("TaskName");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        name: name,
        description: description,
        isActive: isActive,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
