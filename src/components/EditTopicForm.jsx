import React from 'react';

const EditTopicForm = () => {
    return (
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

        <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit rounded-sm">  Update Topic</button>
      </form>
    );
};

export default EditTopicForm;