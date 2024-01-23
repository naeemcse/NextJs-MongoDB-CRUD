import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const RemoveBtn = () => {
    return (
        <div>
            <button className='text-red-400'>
                <FaRegTrashAlt size={24}/>
            </button>
          {/* <FaRegTrashAlt /> */}
        </div>
    );
};

export default RemoveBtn;