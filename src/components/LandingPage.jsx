import { Header } from './Header'
import { Overview } from './Overview'
import { RevenueCard } from './RevenueCard'
import { TransactionTable } from './TransactionTable'
import { SideBar } from './SideBar'

export const LandingPage = () => {
   return <>
        <div className="pt-4 px-12 grid grid-cols-[16rem_1fr] gap-2">
            <div className='w-56'>
                <SideBar></SideBar>
            </div>
            <div>
                <Header></Header>
                <hr className="h-px my-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <Overview />
                <div className='grid grid-cols-3'>
                    <div className='p-4'>
                        <RevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={13}></RevenueCard>
                    </div>
                    <div className='p-4'>
                        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}></RevenueCard>
                    </div>
                    <div className='p-4'>
                        <RevenueCard title={"Amount Processed"} amount={" 23,92,312.19"} ></RevenueCard>
                    </div>
                </div>
                <div className="pt-4">
                    <TransactionTable />
                </div>
            </div>
        </div>
    </>
}