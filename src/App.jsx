
import './App.css'
import { Header } from './components/Header'
import { Overview } from './components/Overview'
import { RevenueCard } from './components/RevenueCard'
import { TransactionTable } from './components/TransactionTable'

function App() {

  return (
    <>
    <div className="pt-4 px-12">
      <div>
        <Header />
      </div>
      <div>
          <hr className="h-px my-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div>
          <Overview />
      </div>
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
    </>
  )
}

export default App
