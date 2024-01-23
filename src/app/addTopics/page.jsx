import React from "react";

const page = () => {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          className="border border-slate-300 p-2 rounded-sm"
          placeholder="Topics Titole"
        />

        <input
          type="text"
          className="border border-slate-300 p-2 rounded-sm"
          placeholder="Topics Description"
        />

        <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit rounded-sm"> Add Topic </button>
      </form>
    </div>
  );
};

export default page;
