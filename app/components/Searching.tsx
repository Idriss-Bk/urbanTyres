"use client";
import React from 'react'

const Searching = () => {

    const [searcing, setSearching] = React.useState(false);

    const handleSearching = () => {
        console.log(searcing)
        setSearching(true)
    }

  return (
    <div className='max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 pt-36'>
        <button className='' onClick={handleSearching}>Set</button>
        {searcing && (
            <>Test</>
        )}
    </div>
  )
}

export default Searching