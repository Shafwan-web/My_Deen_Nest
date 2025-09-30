import React, { useState } from "react";
import { useFormConfig } from "../../../context/FormConfigContext";
import { Trash2, Lock, GripVertical, X, Plus } from "lucide-react";
import { div } from "framer-motion/client";

const DetailStudentConfiguration = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const { fields, addField, removeField, toggleVisibility } = useFormConfig();

  const [showSidebar, setShowSidebar] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOptions, setIsOptions] = useState(false);

  const [newField, setNewField] = useState({
    label: "",
    type: "",
    required: false,
    visible: true,
    placeholder: "",
    defaultValue: "",
    options: [],
    width: "full",
    locked: false,
  });
  const [newOption, setNewOption] = useState("");

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "parents", label: "Parents Info" },
    { id: "academic", label: "Academic Info" },
    { id: "other", label: "Other Info" },
  ];

  const handleAddField = () => {
    if (!newField.label || !newField.type)
      return alert("Fill all required fields");
    addField({ ...newField, id: Date.now() });
    setNewField({
      label: "",
      type: "",
      required: false,
      visible: true,
      placeholder: "",
      defaultValue: "",
      options: [],
      width: "full",
      locked: false,
    });
    setShowSidebar(false);
  };

  return (
    <div className="p-4  bg-white rounded-lg flex-col shadow-md relative font-primary">
      {/* Title */}
      <h2 className=" font-semibold mb-4 text-md sm:text-lg">
        Student Form Configuration
      </h2>

      <div className="flex md:h-screen h-full">
        {/* Main Content */}
        <div className="flex-1 p-0 md:pr-4  w-full">
          {/* Tabs */}
          <div className="flex mb-4 mt-0 items-center justify-center whitespace-nowrap w-full text-xs p-0.5 md:text-base border border-gray-300 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-1 sm:px-6 leading-none  mt-0.5 py-1 sm:py-2 text-xs sm:text-sm font-medium w-full ${
                  activeTab === tab.id
                    ? "border-b-2 px-2 my-0 sm:px-5 leading-none rounded-full bg-[#5e7188] text-white"
                    : "text-gray-500 hover:text-[#5e7188]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <div className="flex justify-end mb-5">
              <button
                onClick={() => setShowSidebar(true)}
                className="px-2 py-1 sm:px-4 sm:py-2 text-sm bg-[#DFE5EF] text-primary rounded"
              >
                + Add heading
              </button>
            </div>

            {/* Toggle button (mobile only) */}
            {!showSidebar && (
              <div className="flex justify-between mb-5">
                {/* Mobile button (hidden on desktop) */}
                <button
                  onClick={() => setShowSidebar(true)}
                  className="px-2 py-1 sm:px-4 sm:py-2 text-sm bg-[#5e7188] text-white rounded md:hidden"
                >
                  + Add Field
                </button>

                {/* Desktop button (hidden on mobile) */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="px-2 py-1 sm:px-4 sm:py-2 text-sm bg-primary text-white rounded hidden md:block"
                >
                  + Add Field
                </button>
              </div>
            )}
          </div>

          {/* Tab Content */}
          {activeTab === "basic" && (
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-xs sm:text-base">
              {fields.map((field) => (
                <div
                  key={field.id}
                  className="flex-1 sm:basis-[100%] md:basis-[48%] border border-gray-300 rounded-md p-3 flex justify-between items-center"
                >
                  {/* Left side */}
                  <div className="flex items-center gap-3">
                    <GripVertical
                      className="text-gray-400 cursor-move"
                      size={16}
                    />
                    <div>
                      <p className="font-medium">{field.label}</p>
                      <p className="text-xs text-gray-400">{field.type}</p>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-2">
                    {/* Toggle */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={field.visible}
                        onChange={() => toggleVisibility(field.id)}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:text-primary"></div>
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5"></div>
                    </label>

                    {/* Actions */}
                    {field.locked ? (
                      <Lock size={16} className="text-gray-400" />
                    ) : (
                      <button
                        onClick={() => removeField(field.id)}
                        className="p-1 text-red-500 hover:bg-red-100 rounded"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab !== "basic" && (
            <div className="p-6 text-gray-500 rounded-lg text-center">
              Configure <span className="font-medium">{activeTab}</span> fields
              here.
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div
          className={`
            fixed md:static       
            top-0 right-0
            
            rounded-md
            w-[280px] md:w-[350px] 
            bg-white h-full shadow-lg py-3 px-4 overflow-y-auto
            border-r md:border-l border-gray-200
            ${showSidebar ? "block" : "hidden"}
            md:block                      
          `}
        >
          <div className="flex justify-center   lg:hidden">
            <button
              onClick={() => setShowSidebar(false)}
              className="px-4 py-2 mt-5 text-sm bg-white text-white rounded"
            ></button>
          </div>
          <div className="flex mt-2 justify-between  items-center ">
            <button onClick={() => setShowSidebar(false)} className="md:hidden">
              <X className="text-gray-500 hover:text-black" />
            </button>
            <div className="flex flex-col justify-between ">
              <h3 className="text-lg font-bold ">Add New Field</h3>

              <p className="pb-2 text-xs">
                Configure Field Properties and settings{" "}
              </p>
            </div>
          </div>

          {/* Show either message or form */}
          {!isFormOpen ? (
            <div className="text-gray-500 text-sm flex flex-col items-center justify-center h-100">
              <h1 className="text-4xl mb-3">🗃️</h1>
              <p>Select "Add Field" Or Click On field to edit</p>
              {/* <button
                onClick={() => setIsFormOpen(true)}
                className="mt-4 px-4 py-2  text-black rounded bg-gray-400 "
              >
                + Add Field
              </button> */}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {/* Label */}
              <label htmlFor="Field lable" className="font-semibold m-0">
                Field Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                value={newField.label}
                onChange={(e) =>
                  setNewField({ ...newField, label: e.target.value })
                }
                className="border border-gray-300 bg-gray-100 p-2 rounded text-sm"
              />

              {/* Type */}
              <label htmlFor="Field lable" className="font-semibold mt-3">
                Field Type
              </label>
              <select
                value={newField.type}
                onChange={(e) =>
                  setNewField({ ...newField, type: e.target.value })
                }
                className="border  border-gray-300 bg-gray-100 p-2 rounded text-sm"
              >
                <option value="">Select Field Type</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
                <option value="phone">Phone</option>
                <option value="date">Date</option>
                <option value="time">Time</option>
                <option value="datetime-local">DateTime</option>
                <option value="textarea">Textarea</option>
                <option value="dropdown">Dropdown</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Checkbox</option>
                <option value="file">File Upload</option>
              </select>

              {/* Options for Dropdown/Radio */}
              {["dropdown", "radio"].includes(newField.type) && (
                <div>
                  <label className="text-sm font-medium bg-white">
                    Options
                  </label>

                  <div className="flex gap-2  mt-2">
                    <input
                      type="text"
                      placeholder="Add option"
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                      className="px-2  bg-gray-100 rounded text-sm flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (newOption.trim() !== "") {
                          setNewField({
                            ...newField,
                            options: [...newField.options, newOption],
                          });
                          setNewOption("");
                        }
                      }}
                      className="px-3 py-2 bg-gray-100 border border-gray-300 text-black text-xl font-bold rounded"
                    >
                      <Plus />
                    </button>
                  </div>

                  <ul className="mt-2 space-y-1 text-sm">
                    {newField.options.map((opt, i) => (
                      <div>
                        <li
                          key={i}
                          className="flex justify-between bg-gray-100 items-center border border-gray-300 p-1 rounded "
                        >
                          <div className="flex text-center items-center">
                            <GripVertical
                              className="text-gray-400 cursor-move mr-3"
                              size={16}
                            />
                            {opt}
                          </div>

                          <button
                            onClick={() =>
                              setNewField({
                                ...newField,
                                options: newField.options.filter(
                                  (_, idx) => idx !== i
                                ),
                              })
                            }
                            className="text-black text-sm"
                          >
                            <X />
                          </button>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              )}

              {/* field settings */}
              <label htmlFor="Field lable" className="font-semibold mt-2">
                Field Settings
              </label>
              <label htmlFor="checkbox ">
                <input
                  type="checkbox"
                  className="border border-gray-300 p-2 rounded text-sm accent-[#126F77]"
                />
                <span className="px-1">Required Fields</span>
                <br />
                <input
                  type="checkbox"
                  className="border border-gray-300 p-2 rounded text-sm accent-[#126F77]"
                />

                <span className="px-1">Optional Fields</span>
              </label>

              {/* Placeholder */}
              <label htmlFor="Field lable" className="font-semibold  mt-2">
                Placeholder
              </label>
              <input
                type="text"
                placeholder="Placeholder (e.g. Enter Name)"
                value={newField.placeholder}
                onChange={(e) =>
                  setNewField({ ...newField, placeholder: e.target.value })
                }
                className="border border-gray-300 p-2  bg-gray-100 rounded  text-sm "
              />

              {/* Default Value */}
              <label htmlFor="Field lable" className="font-semibold mt-2">
                Default Value
              </label>
              <input
                type="text"
                placeholder="Default Value (optional)"
                value={newField.defaultValue}
                onChange={(e) =>
                  setNewField({ ...newField, defaultValue: e.target.value })
                }
                className="border border-gray-300 p-2 bg-gray-100 rounded text-sm"
              />

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="px-3 py-1.5  rounded bg-[#DFE5EF]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleAddField();
                    setIsFormOpen(false);
                  }}
                  className="px-3 py-1.5 bg-primary text-white rounded "
                >
                  Add Field
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailStudentConfiguration;

// import React, { useState } from "react";
// import { useFormConfig } from "../../context/FormConfigContext";
// import { Trash2, Lock, GripVertical, X } from "lucide-react";

// const DetailStudentConfiguration = () => {
//   const [activeTab, setActiveTab] = useState("basic");
//   const { fields, addField, removeField, toggleVisibility } = useFormConfig();

//   // Sidebar state
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [newField, setNewField] = useState({
//     label: "",
//     type: "",
//     required: false,
//     visible: true,
//     placeholder: "",
//     defaultValue: "",
//     options: [],
//     width: "full",
//   });
//   const [newOption, setNewOption] = useState("");

//   const tabs = [
//     { id: "basic", label: "Basic Info" },
//     { id: "parents", label: "Parents Info" },
//     { id: "academic", label: "Academic Info" },
//     { id: "other", label: "Other Info" },
//   ];

//   const handleAddField = () => {
//     if (!newField.label || !newField.type) return alert("Fill all required fields");

//     addField(newField); // push into context
//     setNewField({
//       label: "",
//       type: "",
//       required: false,
//       visible: true,
//       placeholder: "",
//       defaultValue: "",
//       options: [],
//       width: "full",
//     });
//     setShowSidebar(false);
//   };

//   const handleAddOption = () => {
//     if (!newOption.trim()) return;
//     setNewField({ ...newField, options: [...newField.options, newOption] });
//     setNewOption("");
//   };

//   const handleRemoveOption = (index) => {
//     setNewField({
//       ...newField,
//       options: newField.options.filter((_, i) => i !== index),
//     });
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md relative">
//       <h2 className="text-lg font-semibold mb-4">Student Form configuration</h2>

//       {/* Tabs */}
//       <div className="flex gap-2 border-b mb-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-4 py-2 text-sm font-medium rounded-t-md ${
//               activeTab === tab.id
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       {activeTab === "basic" && (
//         <div>
//           {/* Header Actions */}
//           <div className="flex justify-between items-center mb-4">
//             <div className="font-medium">Basic Info Fields</div>
//             <button
//               onClick={() => setShowSidebar(true)}
//               className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//             >
//               + Add Field
//             </button>
//           </div>

//           {/* Field Rows */}
//           <div className="border rounded-lg divide-y">
//             {fields.map((field) => (
//               <div
//                 key={field.id}
//                 className="flex items-center justify-between px-4 py-2 hover:bg-gray-50"
//               >
//                 {/* Left side */}
//                 <div className="flex items-center gap-3">
//                   <GripVertical className="text-gray-400 cursor-move" size={16} />
//                   <span className="font-medium">{field.label}</span>
//                   <span className="text-gray-500 text-xs">({field.type})</span>
//                   {field.locked && (
//                     <Lock className="text-gray-400" size={14} title="Locked" />
//                   )}
//                 </div>

//                 {/* Right side */}
//                 <div className="flex items-center gap-3">
//                   {/* Toggle Switch */}
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={field.visible}
//                       onChange={() => toggleVisibility(field.id)}
//                       className="sr-only peer"
//                     />
//                     <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
//                     <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
//                   </label>

//                   {!field.locked && (
//                     <button
//                       onClick={() => removeField(field.id)}
//                       className="p-1 text-red-500 hover:bg-red-100 rounded"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {activeTab !== "basic" && (
//         <div className="p-6 text-gray-500 border rounded-lg text-center">
//           Configure <span className="font-medium">{activeTab}</span> fields here.
//         </div>
//       )}

//       {/* Sidebar Drawer */}
//       {showSidebar && (
//         <div className="fixed inset-0 z-50 flex">
//           {/* Overlay */}
//           <div
//             className="flex-1 bg-black/40"
//             onClick={() => setShowSidebar(false)}
//           ></div>

//           {/* Sidebar */}
//           <div className="w-[400px] bg-white h-full shadow-lg p-6 overflow-y-auto">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Add New Field</h3>
//               <button onClick={() => setShowSidebar(false)}>
//                 <X className="text-gray-500 hover:text-black" />
//               </button>
//             </div>

//             {/* Field Config Form */}
//             <div className="flex flex-col gap-4">
//               <div>
//                 <label className="text-sm font-medium">Field Label</label>
//                 <input
//                   type="text"
//                   value={newField.label}
//                   onChange={(e) =>
//                     setNewField({ ...newField, label: e.target.value })
//                   }
//                   placeholder="Enter field label"
//                   className="border p-2 rounded w-full text-sm"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-medium">Field Type</label>
//                 <select
//                   value={newField.type}
//                   onChange={(e) =>
//                     setNewField({ ...newField, type: e.target.value })
//                   }
//                   className="border p-2 rounded w-full text-sm"
//                 >
//                   <option value="">Select Type</option>
//                   <option value="text">Text Input</option>
//                   <option value="number">Number Input</option>
//                   <option value="date">Date Picker</option>
//                   <option value="dropdown">Dropdown</option>
//                   <option value="radio">Radio Buttons</option>
//                   <option value="checkbox">Checkbox</option>
//                   <option value="multiselect">Checklist (Multi-select)</option>
//                   <option value="file">File Upload</option>
//                   <option value="textarea">Text Area</option>
//                 </select>
//               </div>

//               {/* Options (only for some types) */}
//               {["dropdown", "radio", "checkbox", "multiselect"].includes(
//                 newField.type
//               ) && (
//                 <div>
//                   <label className="text-sm font-medium">Options</label>
//                   <div className="flex gap-2 mt-1">
//                     <input
//                       type="text"
//                       value={newOption}
//                       onChange={(e) => setNewOption(e.target.value)}
//                       placeholder="Add an option"
//                       className="border p-2 rounded w-full text-sm"
//                     />
//                     <button
//                       type="button"
//                       onClick={handleAddOption}
//                       className="px-3 py-1 bg-blue-600 text-white rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div className="mt-2 flex flex-col gap-1">
//                     {newField.options.map((opt, i) => (
//                       <div
//                         key={i}
//                         className="flex justify-between items-center border p-1 rounded text-sm"
//                       >
//                         {opt}
//                         <button
//                           type="button"
//                           onClick={() => handleRemoveOption(i)}
//                           className="text-red-500 text-xs"
//                         >
//                           ✕
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div>
//                 <label className="text-sm font-medium">Placeholder Text</label>
//                 <input
//                   type="text"
//                   value={newField.placeholder}
//                   onChange={(e) =>
//                     setNewField({ ...newField, placeholder: e.target.value })
//                   }
//                   className="border p-2 rounded w-full text-sm"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-medium">Default Value</label>
//                 <input
//                   type="text"
//                   value={newField.defaultValue}
//                   onChange={(e) =>
//                     setNewField({ ...newField, defaultValue: e.target.value })
//                   }
//                   className="border p-2 rounded w-full text-sm"
//                 />
//               </div>

//               {/* Settings */}
//               <div className="flex flex-col gap-2">
//                 <label className="flex items-center gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     checked={newField.required}
//                     onChange={(e) =>
//                       setNewField({ ...newField, required: e.target.checked })
//                     }
//                   />
//                   Required field
//                 </label>
//                 <label className="flex items-center gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     checked={newField.visible}
//                     onChange={(e) =>
//                       setNewField({ ...newField, visible: e.target.checked })
//                     }
//                   />
//                   Enabled by default
//                 </label>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex justify-end gap-2 mt-4">
//                 <button
//                   onClick={() => setShowSidebar(false)}
//                   className="px-4 py-2 border rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddField}
//                   className="px-4 py-2 bg-blue-600 text-white rounded"
//                 >
//                   Add Field
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DetailStudentConfiguration;
