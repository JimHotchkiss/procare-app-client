import React from 'react'

const Instruction = ({ instruction, stepHandler }) => {

  return (
    <>
        <h1>{instruction ? instruction.title : null}</h1>
        <ul>
           
        {instruction.repairs?.map((item, index) => {
            return (
                <div key={item.id} className='flex justify-center'>  
                    <div className="my-12 bg-secondary max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div
                                onClick={stepHandler}
                                id={item.id} 
                                className="font-bold text-call_to_action hover:text-gray-200 transition-all duration-300 ease-linear cursor-pointer  text-xl mb-2">{index + 1 }. {item.title}</div>
                            <p className="text-white text-base">
                                {item.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-between">
                            <span className="inline-block bg-call_to_action hover:bg-gray-200 transition-all duration-300 ease-linear cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Images</span>
                            <span className="inline-block bg-call_to_action hover:bg-gray-200 transition-all duration-300 ease-linear cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Videos</span>
                            <span className="inline-block bg-call_to_action hover:bg-gray-200 transition-all duration-300 ease-linear cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Materials</span>
                        </div>
                    </div>
                </div>
               
                
                )})}

        </ul>
       
    
    
    </>
  )
}

export default Instruction