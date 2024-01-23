import React from 'react';
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilSquare } from "react-icons/hi2";

const TopicsList = () => {
    return (
        <>
         <div className="flex justify-between p-4 border border-slate-300 my-3 gap-5 items-start">

            <div className="">
                <h1 className='font-bold text-2xl '> Topics Title  </h1>
                <div>Topics Description </div>
            </div>
            <div className='flex gap-2'>
                <RemoveBtn/>
                <Link href="/editTopic/123"> 
                    <HiPencilSquare size={24}/>
                 </Link>
            </div>

         </div>
            
        </>
    );
};

export default TopicsList;