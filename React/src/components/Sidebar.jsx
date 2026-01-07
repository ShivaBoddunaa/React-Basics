
import React from "react"
export default function Sidebar(){


return(

<>

<div className="drawer">
  <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-1" className="btn drawer-button">Explore More</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Movies</a></li>
      <li><a>Webseries</a></li>
      <li><a>Documentry</a></li>

            {/* Theme Section */}
        <li>
            {/* <span className="font-semibold">Theme</span> */}
            <Theme />
        </li>
    </ul>

  </div>
</div>
</>
)


}