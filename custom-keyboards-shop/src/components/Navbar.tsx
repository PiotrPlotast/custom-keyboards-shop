import NavbarCategory from "./NavbarCategory";
export default function Navbar() {
  return (
    <nav className="flex flex-col px-4 py-2 md:px-16 md:py-8">
      <ul className="flex justify-between space-x-4 md:space-x-0">
        <div className="flex space-x-4 md:space-x-12 items-center">
          <li>
            <a href="#" className="text-xl font-bold">
              Logo
            </a>
          </li>
          <li className="flex border-2 border-gray-600 md:w-96 lg:w-2xl items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search absolute pointer-events-none ml-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input
              type="search"
              name="search"
              id="search"
              className="w-full h-full py-2 px-12 outline-none"
            />
          </li>
        </div>
        <div className="flex space-x-2 md:space-x-6 items-center">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart lg:w-8 lg:h-8"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user lg:w-8 lg:h-8"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </li>
        </div>
      </ul>
      {/* <ul className="flex">
        <li>
          <NavbarCategory title="keyboards">
            <ul>
              <li>akko</li>
              <li>keychron</li>
              <li>ducky</li>
            </ul>
          </NavbarCategory>
        </li>
        <li>
          <NavbarCategory title="keycaps">
            <ul>
              <li>abs</li>
              <li>pbt</li>
            </ul>
          </NavbarCategory>
        </li>
        <li>
          <NavbarCategory title="switches">
            <ul>
              <li>outemu</li>
              <li>khail</li>
              <li>gateron</li>
            </ul>
          </NavbarCategory>
        </li>
      </ul> */}
    </nav>
  );
}
