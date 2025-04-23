"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiOutlineUserCircle, HiOutlineSearch } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Donors", path: "/donors" },
  { label: "Requests", path: "/requests" },
  { label: "Events", path: "/events" },
  { label: "Admin", path: "/admin" },
];

export default function Layout({ children }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className={`bg-white border-r fixed z-30  top-0 left-0 w-64 h-full transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
        <div className="p-4 font-bold text-lg">Blody</div>
        <nav className="flex flex-col gap-2 px-4">
          {navItems.map(({ label, path }) => (
            <Link key={label} href={path} legacyBehavior>
              <a className={`px-4 py-2 rounded-md text-sm font-medium ${pathname === path ? 'bg-crimson text-white' : 'hover:bg-lightgray'}`}>{label}</a>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay to hide sidebar */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 bg-white shadow-md flex items-center justify-between md:justify-end px-4 py-2 border-b">
          <div className="flex items-center gap-2 w-full justify-between lg:hidden">
            <div className="text-xl font-bold hidden lg:block">Blody</div>
            <button
              className="lg:hidden"
              onClick={() => setDrawerOpen(!isDrawerOpen)}
            >
              {isDrawerOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <HiOutlineSearch size={20} className="cursor-pointer" />
            <HiOutlineUserCircle size={24} className="cursor-pointer" />
            <FiLogOut size={20} className="cursor-pointer text-crimson" />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 bg-offwhite h-full flex-1 overflow-y-auto border border-red-600">
          {children}
        </main>

      </div>

    </div>
  );
}
