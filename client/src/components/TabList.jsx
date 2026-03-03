import { NavLink } from "react-router-dom"
const TabList = () => {
  return (
    <>
      <div
        role="tablist"
        className="tabs tabs-border border-b border-gray-300 w-full flex items-center justify-start"
      >
        <NavLink
          to="/"
          end
          role="tab"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary sm:text-lg text-md font-semibold" : "text-gray-500 sm:text-lg text-md"}`
          }
        >
          Beranda
        </NavLink>

        <NavLink
          to="/product"
          role="tab"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary sm:text-lg text-md font-semibold" : "text-gray-500 sm:text-lg text-md"}`
          }
        >
          Product
        </NavLink>

        <NavLink
          to="/about"
          role="tab"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary sm:text-lg text-md font-semibold" : "text-gray-500 sm:text-lg text-md"}`
          }
        >
          About
        </NavLink>
      </div>
    </>
  )
}

export default TabList
