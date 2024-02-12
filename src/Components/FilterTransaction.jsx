import React from 'react'

const FilterTransaction = ({setFilter}) => {
    return (
        <div className='drop-shadow-2xl my-5  flex justify-around gap-5'>
            <button onClick={() => setFilter('')} className="p-1 pl-2 pr-2 rounded-md bg-blue-900 text-white font-bold">All</button>
            <button onClick={() => setFilter('personal')} className="p-1 pl-2 pr-2 rounded-md bg-blue-900 text-white font-bold">Personal</button>
            <button onClick={() => setFilter('business')} className="p-1 pl-2 pr-2 rounded-md bg-blue-900 text-white font-bold">Business</button>
        </div>
    )
}

export default FilterTransaction