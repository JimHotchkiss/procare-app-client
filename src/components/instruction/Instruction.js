import React from 'react'

const Instruction = ({ instruction }) => {
    console.log("Instruction:",instruction.repairs)
  return (
    <>
        <h1>{instruction ? instruction.title : null}</h1>
        <ul>
        {instruction.repairs ? instruction.repairs.map(item => {
            return (
                <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-gray-700 text-xl mb-2">{item.title}</div>
                        <p className="text-black text-base">
                            {item.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Images</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Videos</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Materials</span>
                    </div>
                </div>
                
                )}) : null}

        </ul>
       
    
    
    </>
  )
}

export default Instruction