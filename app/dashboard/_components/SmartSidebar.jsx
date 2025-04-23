'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Droplet, ClipboardList, X, Menu } from 'lucide-react'

export default function SmartSidebar({ urgentRequestCount }) {
  const [isMobile, setIsMobile] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  // Check viewport on mount and resize
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setDrawerOpen(false)
    }
    
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  // Close drawer on navigation
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  // Shared navigation items config
  const navItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: 'Dashboard',
      href: '/admin'
    },
    {
      icon: <Droplet size={20} />,
      label: 'Blood Management',
      subItems: [
        { label: 'Inventory', href: '/admin/inventory' },
        { label: 'Expiry', href: '/admin/expiry' }
      ]
    },
    {
      icon: <ClipboardList size={20} />,
      label: 'Requests',
      badge: urgentRequestCount,
      subItems: [
        { label: 'Pending', href: '/admin/requests/pending' },
        { label: 'Fulfilled', href: '/admin/requests/fulfilled' }
      ]
    }
  ]

  return (
    <>
      {/* Mobile Hamburger Button (shown only on mobile) */}
      {isMobile && (
        <button 
          onClick={() => setDrawerOpen(true)}
          className="fixed z-40 left-4 top-4 p-2 rounded-md bg-blood text-purewhite"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Desktop Sidebar (shown when NOT mobile) */}
      {!isMobile && (
        <aside className="w-64 h-full bg-purewhite border-r border-lightgray">
          <NavContent items={navItems} />
        </aside>
      )}

      {/* Mobile Drawer (overlay) */}
      {isMobile && (
        <div className={`fixed inset-0 z-50 transition-opacity ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-gray-900/50"
            onClick={() => setDrawerOpen(false)} 
          />
          
          {/* Drawer Content */}
          <div className={`absolute left-0 top-0 h-full w-72 bg-purewhite shadow-xl transition-transform duration-300 ${
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded-full hover:bg-coolgray/10"
              >
                <X size={24} className="text-primary" />
              </button>
            </div>
            <NavContent items={navItems} />
          </div>
        </div>
      )}
    </>
  )
}

// Shared navigation content component
function NavContent({ items }) {
  const pathname = usePathname()

  return (
    <ul className="menu p-4">
      {items.map((item) => (
        <li key={item.label}>
          {item.subItems ? (
            <details open>
              <summary className={`${pathname.startsWith(item.href || item.subItems[0].href) ? 'bg-crimson/10' : ''}`}>
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-primary">{item.label}</span>
                  {item.badge > 0 && (
                    <span className="badge badge-sm bg-blood text-purewhite">
                      {item.badge}
                    </span>
                  )}
                </div>
              </summary>
              <ul>
                {item.subItems.map((subItem) => (
                  <li key={subItem.label}>
                    <a
                      href={subItem.href}
                      className={`${pathname === subItem.href ? 'bg-crimson/10 border-l-2 border-blood' : ''}`}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <a
              href={item.href}
              className={`${pathname === item.href ? 'bg-crimson/10 border-l-2 border-blood' : ''}`}
            >
              {item.icon}
              <span className="text-primary">{item.label}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}