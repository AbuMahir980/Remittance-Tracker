import React from 'react'

const FilterTransaction = ({setFilter}) => {
    return (
        <div>
            <button onClick={() => setFilter('')}>All</button>
            <button onClick={() => setFilter('personal')}>Personal</button>
            <button onClick={() => setFilter('business')}>Business</button>
        </div>
    )
}

export default FilterTransaction