// components/Layout.tsx



export default function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="drawer lg:drawer-open">
      {/* Checkbox Toggle Drawer on Mobile */}
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="w-full navbar bg-base-100 shadow-md z-10 px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="sidebar-drawer" className="btn btn-square btn-ghost" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <Menu className="h-5 w-5" />
            </label>
          </div>
          <div className="flex-1 text-xl font-bold text-crimson">Badhon Dashboard</div>
        </div>

        {/* Main Page Content */}
        <div className="p-4">{children}</div>
      </div>

      {/* Sidebar Drawer Content */}
      <div className="drawer-side z-20">
        <label htmlFor="sidebar-drawer" className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
          <h2 className="text-lg font-semibold mb-4 text-crimson">Navigation</h2>
          <li><Link href="/">🏠 Dashboard</Link></li>
          <li><Link href="/donors">🩸 Donors</Link></li>
          <li><Link href="/requests">📦 Requests</Link></li>
          <li><Link href="/events">📅 Campaigns</Link></li>
          <li><Link href="/inventory">🧪 Inventory</Link></li>
        </ul>
      </div>
    </div>
  )
}
