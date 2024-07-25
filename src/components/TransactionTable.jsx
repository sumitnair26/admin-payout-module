import DateObject from "react-date-object";
export const TransactionTable  = () => {
    let date = new DateObject();
    return <div>
        <div className="text-xl font-medium">
            Transactions | This Month
        </div>
        <div className="p-4">
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Payouts (22)</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Refunds (6)</button>
        </div>
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                        className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                        <thead
                            className="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                            <th scope="col" className="px-6 py-4">#ORDER ID</th>
                            <th scope="col" className="px-6 py-4">STATUS</th>
                            <th scope="col" className="px-6 py-4">TRANSACTION ID</th>
                            <th scope="col" className="px-6 py-4">REFUND DATE</th>
                            <th scope="col" className="px-6 py-4">ORDER AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-neutral-200 dark:border-white/10">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">#22123</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <span className="bg-green-500 rounded-full text-xs py-0 px-2"></span>
                                    <span className="pl-2 text-xm">Successful
                                    </span>                               
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">131634495747</td>
                                <td className="whitespace-nowrap px-6 py-4">{date.format()}</td>
                                <td className="whitespace-nowrap px-6 py-4 flex">
                                <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 24 24"><path d="M10.5 14h-.73l5.1 5.31c.61.64.16 1.69-.72 1.69c-.27 0-.53-.11-.72-.31L7.4 14.41c-.26-.26-.4-.62-.4-.98c0-.79.64-1.43 1.43-1.43h2.07c1.76 0 3.22-1.3 3.46-3H7c-.55 0-1-.45-1-1s.45-1 1-1h6.66c-.56-1.18-1.76-2-3.16-2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1h-2.26c.48.58.84 1.26 1.05 2H17c.55 0 1 .45 1 1s-.45 1-1 1h-1.02c-.26 2.8-2.62 5-5.48 5"/></svg>
                                    </span>
                                    <span>
                                     2,67,898
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-neutral-200 dark:border-white/10">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">#22124</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <span className="bg-gray-500 rounded-full text-xs py-0 px-2"></span>
                                    <span className="pl-2 text-xm">Processing</span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">131634495748</td>
                                <td className="whitespace-nowrap px-6 py-4">{date.format()}</td>
                                <td className="whitespace-nowrap px-6 py-4 flex">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 24 24"><path d="M10.5 14h-.73l5.1 5.31c.61.64.16 1.69-.72 1.69c-.27 0-.53-.11-.72-.31L7.4 14.41c-.26-.26-.4-.62-.4-.98c0-.79.64-1.43 1.43-1.43h2.07c1.76 0 3.22-1.3 3.46-3H7c-.55 0-1-.45-1-1s.45-1 1-1h6.66c-.56-1.18-1.76-2-3.16-2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1h-2.26c.48.58.84 1.26 1.05 2H17c.55 0 1 .45 1 1s-.45 1-1 1h-1.02c-.26 2.8-2.62 5-5.48 5"/></svg>
                                    </span>
                                    <span>
                                        3,47,898
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-neutral-200 dark:border-white/10">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">#22125</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <span className="bg-red-500 rounded-full text-xs py-0 px-2"></span>
                                    <span className="pl-2 text-xm">Failed</span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">131634495749</td>
                                <td className="whitespace-nowrap px-6 py-4">{date.format()}</td>
                                <td className="whitespace-nowrap px-6 py-4 flex">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 24 24"><path d="M10.5 14h-.73l5.1 5.31c.61.64.16 1.69-.72 1.69c-.27 0-.53-.11-.72-.31L7.4 14.41c-.26-.26-.4-.62-.4-.98c0-.79.64-1.43 1.43-1.43h2.07c1.76 0 3.22-1.3 3.46-3H7c-.55 0-1-.45-1-1s.45-1 1-1h6.66c-.56-1.18-1.76-2-3.16-2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1h-2.26c.48.58.84 1.26 1.05 2H17c.55 0 1 .45 1 1s-.45 1-1 1h-1.02c-.26 2.8-2.62 5-5.48 5"/></svg>
                                    </span>
                                    <span>
                                        4,57,998
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}