import React from 'react';

function FilterCom() {
  return (
    <div className='flex items-center space-x-4 '>
      <select className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none'>
        <option value='ALL'>Default</option>
        <option value='COMPLETED'>Completed</option>
        <option value='INCOMPLETED'>Incomplete</option>
      </select>
      <button className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'>Mark All Completed</button>
    </div>
  );
}

export default FilterCom;
