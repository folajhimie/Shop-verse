import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiSvgo } from 'react-icons/si';
// import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider';


const Sidebar = () => {
    const {currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
    const handleCloseSideBar = () => {
       if(activeMenu !== undefined && screenSize <= 900) {
           setActiveMenu(false);
       } 
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="ml-3 h-screen md:overflow-auto overflow-auto md:hover:overflow-auto pb-10">
            {
                activeMenu && (
                    <div>
                        <div className="flex justify-center items-center">
                            <Link to='/' onClick={handleCloseSideBar} className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                                <SiSvgo/>
                                <span className="text-lg">ShopVerse</span>
                            </Link>
                            <TooltipComponent content="Menu" position="BottomCenter">
                                {/* <button
                                    type="button"
                                    onClick={()=> setActiveMenu(!activeMenu)}
                                    style={{color: currentColor}}
                                    className="text-xl "
                                >
                                    <MdOutlineCancel></MdOutlineCancel>
                                </button> */}
                                
                                <button style={{color: currentColor}} className="text-2xl p-3 mt-4 block md:hidden ml-6" onClick={()=> setActiveMenu(!activeMenu)}>&times;</button>
                            </TooltipComponent>
                        </div>
                        <div>
                            {links?.map((item)=> (
                                <div key={item.title}>
                                    <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase font-semibold">
                                        {item.title}
                                    </p>
                                    {item?.links?.map((link)=> (
                                        <NavLink
                                            to={`/${link.name}`}
                                            key={link.id}
                                            onClick={handleCloseSideBar}
                                            style={({isActive})=> ({
                                                backgroundColor: isActive ? currentColor : ''
                                            })}
                                            className={({isActive})=> (isActive ? activeLink : normalLink)}
                                        >
                                            {link.icon}
                                            <span className="capitalize">{link.name}</span>
                                        </NavLink>
                                    ))}
                                </div>

                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Sidebar;