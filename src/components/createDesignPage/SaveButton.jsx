import React from 'react'

function SaveButton({ onSave }) {
  return (
    <button
      type="button"
      onClick={onSave}
      className="w-[120px] h-[48px] bg-primary-blue-500 text-white font-medium py-2 px-4 rounded-[8px] cursor-pointer"
    >
      Save
    </button>
  );
}


export default SaveButton