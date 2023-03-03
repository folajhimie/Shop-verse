import React from 'react'

import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import {useStateContext} from '../contexts/contextProvider';



const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext();

  // <button className="text-2xl"  >
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
          style={{color: currentColor}} 
          onClick={()=> setThemeSettings(false)} 
          className="text-2xl p-3">
            &times;
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Option</p>

          <div className="mt-4">
            <input type="radio" id="light" name="theme" value="Light" onChange={setMode} className="cursor-pointer" checked={currentMode === 'Light'} />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === 'Dark'}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl">
            Theme Colors
          </p>
          <div className="flex gap-3">
            {themeColors?.map((item, index)=> (
              <TooltipComponent key={index} position="TopCenter" content={item.name}>
                <div
                  key={item.name} 
                  className="relative mt-2 cursor-pointer flex gap-5 items-center">
                    <button 
                    type="button"
                    style={{ backgroundColor: item.color}}
                    className="h-10 w-10 rounded-full cursor-pointer"
                    onClick={() => setColor(item.color)}
                    >
                      <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                    </button>
                </div>
              </TooltipComponent>
            ))}
          </div>

        </div>

      </div>


    </div>
  )
}

export default ThemeSettings;