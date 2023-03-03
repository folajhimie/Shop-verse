import React from 'react';
// import { MdOutlineCancel } from 'react-icons/md';

import {Button} from '.';
// import avatar3 from '../data/avatar3.png'
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider';

const Chat = () => {

    const {currentColor, setIsClicked, initialState} = useStateContext();
    const handleSidebar= () => {console.log('first', chatData)}

    return (
        <div className="nav-item shadow-2xl absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-96">
           <div className="flex justify-between items-center">
                {/* <div>{chatData}</div> */}
               <div className="flex gap-3">
                <p className="font-semibold text-lg dark:text-gray-200">Message</p>
                <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-500" onClick={handleSidebar}>
                    5 New
                </button>
               </div>
               <button className="text-2xl" onClick={()=> setIsClicked(initialState)} style={{color: currentColor}}>&times;</button>
                {/* <Button
                    // icon={<MdOutlineCancel/>}
                    icon="&times;"
                    color="rgb(153, 171, 180)"
                    bgColor="white"
                    size="xl"
                    style={{border: '4px solid red'}}
                /> */}
            </div> 
            <div className="mt-5">
                {
                    chatData?.map((item, index)=> (
                        <div key={item.id} className="flex items-center gap-5 border-b-1 border-color p-3 leading-6 cursor-pointer">
                            <div className="relative">
                                <img className="rounded-full h-10 w-10" src={item.image} alt={item.message}/>
                                <span
                                    style={{ background: "red"}}
                                    className="absolute inline-flex rounded-full h-2 w-2 right-0 top-1"
                                />
                            </div>
                                <div>
                                    <p className="font-semibold dark:text-gray-200">{item.message}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
                                </div>
                        </div>
                    ))
                }
                <div className="mt-5">
                    <Button
                        color='white'
                        bgColor={currentColor}
                        text="See All Messages"
                        borderRadius="10px"
                        width="full"
                    />
                </div>

            </div>
        </div>
    );
};

export default Chat;

      