import React, { useState } from "react";
import { useFormConfig } from "../../context/FormConfigContext";

const fieldTypes = ["Text", "Number", "Date Picker", "Dropdown", "Radio", "Checkbox", "Multi-select", "File Upload", "Text Area"];

const FieldEditor = ({ tab, onClose }) => {
  const { addField } = useFormConfig();
  const [field, setField] = useState({
    label: "",
    type: "Text",
    required: false,
    enabled: true,
    placeholder: "",
    defaultValue: "",
    options: [],
    width: "full",
  });

  const handleAddOption = () => {
    setField({ ...field, options: [...field.options, ""] });
  };

  const handleChangeOption = (index, value) => {
    const updated = [...field.options];
    updated[index] = value;
    setField({ ...field, options: updated });
  };

  const handleSave = () => {
    addField(tab, field);
    onClose();
  };

  const showOptions = ["Dropdown", "Radio", "Checkbox", "Multi-select"].includes(field.type);

  return (
    <div className="w-96 bg-white shadow-lg p-6 fixed right-0 top-0 bottom-0 font-primary">
      <h3 className="text-lg font-semibold mb-4">Add New Field</h3>

      <label className="block mb-2 text-sm">Field Label</label>
      <input
        type="text"
        className="w-full border p-2 mb-3 rounded"
        value={field.label}
        onChange={(e) => setField({ ...field, label: e.target.value })}
      />

      <label className="block mb-2 text-sm">Field Type</label>
      <select
        className="w-full border p-2 mb-3 rounded"
        value={field.type}
        onChange={(e) => setField({ ...field, type: e.target.value })}
      >
        {fieldTypes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      {showOptions && (
        <div className="mb-3">
          <label className="block mb-2 text-sm">Options</label>
          {field.options.map((opt, i) => (
            <input
              key={i}
              type="text"
              value={opt}
              onChange={(e) => handleChangeOption(i, e.target.value)}
              className="w-full border p-2 mb-2 rounded"
            />
          ))}
          <button
            className="text-blue-600 text-sm"
            onClick={handleAddOption}
          >
            + Add Option
          </button>
        </div>
      )}

      <label className="block mb-2 text-sm">Placeholder</label>
      <input
        type="text"
        className="w-full border p-2 mb-3 rounded"
        value={field.placeholder}
        onChange={(e) => setField({ ...field, placeholder: e.target.value })}
      />

      <div className="flex gap-2 mb-3">
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={field.required}
            onChange={(e) => setField({ ...field, required: e.target.checked })}
          />
          Required
        </label>
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={field.enabled}
            onChange={(e) => setField({ ...field, enabled: e.target.checked })}
          />
          Enabled by Default
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
        <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">Add Field</button>
      </div>
    </div>
  );
};

export default FieldEditor;
