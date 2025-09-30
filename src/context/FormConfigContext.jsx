import React, { createContext, useState, useContext } from "react";

const FormConfigContext = createContext();

export const FormConfigProvider = ({ children }) => {
  const [fields, setFields] = useState([
    { id: 1, label: "Student Photo", type: "file", visible: true, locked: false },
    { id: 2, label: "Full Name", type: "text", visible: true, locked: true },
    { id: 3, label: "Date of Birth", type: "date", visible: true, locked: true },
    { id: 4, label: "Gender", type: "radio", visible: true, locked: false, options: ["Male", "Female"] },
    { id: 5, label: "Address Line 1", type: "text", visible: true, locked: false },
    { id: 6, label: "Address Line 2", type: "text", visible: true, locked: false },
    { id: 7, label: "Landmark", type: "text", visible: true, locked: false },
    { id: 8, label: "Area", type: "text", visible: true, locked: false },
    { id: 9, label: "Zip Code", type: "text", visible: true, locked: false },
    { id: 10, label: "City", type: "text", visible: true, locked: false },
    { id: 11, label: "State", type: "text", visible: true, locked: false },
    { id: 12, label: "Country", type: "text", visible: true, locked: false },
  ]);

  const addField = (field) => {
    const fieldWithId = { ...field, id: Date.now() };
    setFields((prev) => [...prev, fieldWithId]);
  };

  const removeField = (id) => {
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  const toggleVisibility = (id) => {
    setFields((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, visible: !f.visible } : f
      )
    );
  };

  return (
    <FormConfigContext.Provider
      value={{ fields, setFields, addField, removeField, toggleVisibility }}
    >
      {children}
    </FormConfigContext.Provider>
  );
};

export const useFormConfig = () => useContext(FormConfigContext);
