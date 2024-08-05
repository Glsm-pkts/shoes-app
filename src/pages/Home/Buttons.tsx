import React from 'react';

const Buttons = ({open}:{open: () => void}) => {
  return (
    <div className='mt-5 flex gap-10 lg:hidden'>
        <button 
        onClick={open}
         className='flex-1 bg-white justify-between rounded-md items-center p-2 px-4 flex gap-4'>
        Filtreler
            <img src={"/Vector (1).svg"}alt="" />
            
            </button>
        <button className='flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between'>
        Sırala
            <img src={"/Vector (2).svg"} alt="" />
           </button>
      
    </div>
  );
}

export default Buttons;
