type Props = {
  setHideSidebar: (e: boolean) => void
  hideSidebar: boolean
}

export default function Header({ setHideSidebar, hideSidebar }: Props) {
  return (
    <header
      className={`bg-white shadow-sm py-4 sm:px-10 px-4 flex items-center sm:ml-64 ${
        !hideSidebar ? "sm:translate-x-0 translate-x-64 transition" : ""
      }`}
    >
      <button className="mr-3 sm:hidden block" type="button" onClick={() => setHideSidebar(!hideSidebar)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <h2 className="text-2xl">Scrape</h2>
      <button className="button--blue ml-auto flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span>Create</span>
      </button>
    </header>
  )
}
