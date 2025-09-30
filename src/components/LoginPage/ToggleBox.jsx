import React, { useState } from "react";

export default function ToggleBox() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>

      {/* {open && (
        <div className="py-2">This text only shows when open = true</div>
      )} */}
      {open ? (
        <div className="py-2">This text only shows when open = true</div>
      ) : null}
    </div>
  );
}
