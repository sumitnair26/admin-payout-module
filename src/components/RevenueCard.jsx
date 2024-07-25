
export  const RevenueCard = ({
    title,
    amount,
    orderCount
}) => {
    // p-4
    return <div className="bg-white rounded shadow-md p-4 px-2 border-2">
                <div style={{display:"flex"}} >
                    <div className="text-gray-800">
                        {title}
                    </div>
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </span>
                    </div>    
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </div>
                        <div className="font-bold text-2xl">            
                            {amount}
                        </div>                       
                    </div>
                    { orderCount ?
                    <div className="font-bold cursor-pointer flex flex-col justify-center">
                        <div className="flex">                    
                                <div className="underline text-blue-600 ">                                    
                                        {orderCount} orders
                                </div>                             
                                <div className="text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                        </div>    
                    </div>
                    : null }
                </div>
            </div>
}