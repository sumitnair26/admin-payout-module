export const Header = () => {
    return <div className="flex justify-between">
              <div className="flex flex-start">
                    <div className="text-xl font-medium pr-10 font-extrabold h-10">
                        Payout
                    </div>
                    <div className="flex flex-start gap-1.5 pt-1">
                        <div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg> */}
                            <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.77783 10.1807C7.77783 10.6102 7.42968 10.9583 7.00022 10.9583C6.57076 10.9583 6.22261 10.6102 6.22261 10.1807C6.22261 9.75125 6.57076 9.4031 7.00022 9.4031C7.42968 9.4031 7.77783 9.75125 7.77783 10.1807Z" fill="#4D4D4D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.12724 3.40758C6.54406 3.23493 7.00271 3.18976 7.4452 3.27778C7.88769 3.36579 8.29414 3.58305 8.61315 3.90206C8.93217 4.22108 9.14942 4.62753 9.23744 5.07002C9.32546 5.51251 9.28028 5.97116 9.10763 6.38798C8.93498 6.80479 8.64261 7.16105 8.26749 7.4117C8.02339 7.5748 7.75139 7.68842 7.46685 7.74789V7.84787C7.46685 8.10561 7.25791 8.31454 7.00018 8.31454C6.74245 8.31454 6.53351 8.10561 6.53351 7.84787V7.32946C6.53351 7.2057 6.58268 7.087 6.6702 6.99948C6.75771 6.91196 6.87641 6.8628 7.00018 6.8628C7.26674 6.8628 7.52732 6.78375 7.74895 6.63566C7.97059 6.48757 8.14334 6.27708 8.24535 6.0308C8.34735 5.78453 8.37404 5.51354 8.32204 5.2521C8.27004 4.99066 8.14168 4.75052 7.95319 4.56203C7.7647 4.37354 7.52455 4.24518 7.26311 4.19318C7.00167 4.14117 6.73068 4.16786 6.48441 4.26987C6.23814 4.37188 6.02765 4.54463 5.87956 4.76626C5.73146 4.9879 5.65242 5.24848 5.65242 5.51504C5.65242 5.77277 5.44349 5.98171 5.18575 5.98171C4.92802 5.98171 4.71909 5.77277 4.71909 5.51504C4.71909 5.06388 4.85287 4.62286 5.10352 4.24773C5.35417 3.87261 5.71043 3.58023 6.12724 3.40758Z" fill="#4D4D4D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.0002 1.63341C4.03627 1.63341 1.63353 4.03615 1.63353 7.00007C1.63353 9.964 4.03627 12.3667 7.0002 12.3667C9.96412 12.3667 12.3669 9.964 12.3669 7.00007C12.3669 4.03615 9.96412 1.63341 7.0002 1.63341ZM0.700195 7.00007C0.700195 3.52068 3.5208 0.700073 7.0002 0.700073C10.4796 0.700073 13.3002 3.52068 13.3002 7.00007C13.3002 10.4795 10.4796 13.3001 7.0002 13.3001C3.5208 13.3001 0.700195 10.4795 0.700195 7.00007Z" fill="#4D4D4D"/>
                            </svg>

                        </div>
                        <div className="text-xs">
                            How it works
                        </div>                       
                    </div>
              </div>
              <div className="flex flex-initial">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-96 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    </div>
              </div>
              <div className="flex flex-end">
                 <div className="pr-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_115929_6855)">
                        <circle cx="20" cy="20" r="20" fill="#E6E6E6"/>
                        <path d="M28.4211 10.0237L11.1158 13.3823C10.4632 13.499 10 14.1287 10 14.8517V22.5019C10 23.225 10.4632 23.8547 11.1158 23.9713L12.8842 24.3212C13.6 25.6273 14.9474 27.8897 16.7579 29.7323C17.3684 30.362 18.3789 29.8022 18.2526 28.8693C18.0842 27.6331 18.1263 26.3037 18.1895 25.3707L28.4211 27.3766C29.2421 27.5398 30 26.8401 30 25.9072V11.4931C30 10.5602 29.2421 9.86046 28.4211 10.0237ZM16.4632 19.6331C16.4632 19.8897 16.2737 20.0996 16.0421 20.0996H14.3158C14.0842 20.0996 13.8947 19.8897 13.8947 19.6331V17.7206C13.8947 17.464 14.0842 17.2541 14.3158 17.2541H16.0421C16.2737 17.2541 16.4632 17.464 16.4632 17.7206V19.6331ZM21.2842 19.6331C21.2842 19.8897 21.0947 20.0996 20.8632 20.0996H19.1368C18.9053 20.0996 18.7158 19.8897 18.7158 19.6331V17.7206C18.7158 17.464 18.9053 17.2541 19.1368 17.2541H20.8632C21.0947 17.2541 21.2842 17.464 21.2842 17.7206V19.6331ZM26.1263 19.6331C26.1263 19.8897 25.9368 20.0996 25.7053 20.0996H23.9789C23.7474 20.0996 23.5579 19.8897 23.5579 19.6331V17.7206C23.5579 17.464 23.7474 17.2541 23.9789 17.2541H25.6842C25.9158 17.2541 26.1053 17.464 26.1053 17.7206V19.6331H26.1263Z" fill="#4D4D4D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_115929_6855">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>                     
                 </div>
                 <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_115929_6860)">
                        <circle cx="20" cy="20" r="20" fill="#E6E6E6"/>
                        <path d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z" fill="#4D4D4D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_115929_6860">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                 </div>
              </div>
           </div>
}