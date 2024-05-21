import React from "react";

export function Button({ type, title, disable, onClick }) {
  return (
    <button
      className={`px-8 py-2 rounded-2xl border-none outline-none shadow-md ml-4 font-lg align-middle active:translate-x-2 text-white   ${
        (type === "add" && "bg-green-400  hover:bg-green-500") ||
        (type === "remove" && " bg-blue-500 hover:bg-blue-600") ||
        (type === "checkout" && "bg-blue-300 hover:bg-blue-400")
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
