export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col px-6 py-12">
      {/* Header */}
      <header className="mb-auto">
        <img src="/logo.png" alt="maketh" className="w-40 -ml-4 -mt-8" />
      </header>

      {/* Main Content */}
      <main className="my-16 max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl mb-8 font-bold leading-tight">
          we make crypto fun
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-6 mt-24">
          <a href="https://witty.game" target="_blank">
            <h3 className="text-xl mb-1 font-medium">witty.game</h3>
            <p className="text-gray-400 text-sm mt-3 pr-4">player-versus-puzzle (PvZ) gaming platform built on-chain, where users create puzzles with real rewards and others pay a toll to solve them</p>
          </a>
          
          <a href="https://dag.gg" target="_blank">
            <h3 className="text-xl mb-1 font-medium">dag.gg</h3>
            <p className="text-gray-400 text-sm mt-3 pr-4">decentralizes game development by aligning developers, contributors, and early supporters through token incentives</p>
          </a>

          <a href="https://squeeze.it" target="_blank">
            <h3 className="text-xl mb-1 font-medium">squeeze.it</h3>
            <p className="text-gray-400 text-sm mt-3 pr-4">noncustodial automated market maker (AMM) that reimagines how leverage and derivatives can be built on-chain</p>
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="mt-auto text-xs text-gray-600 flex justify-between items-center">
        <div>
        </div>
        <div>© {new Date().getFullYear()} maketh all rights reserved.</div>
      </footer>
    </div>
  )
}


