import React from "react";

export function SideBar(userInfo) {
  const user = userInfo;
  return (
    <aside className="flex flex-col px-3 bg-gray-100 border-r border-gray-200">
      <section className="flex items-center py-3 mt-3 mb-10">
        <span className="inline-block w-10 h-10 rounded-full overflow-hidden">
          <img
            className="w-full object-fit rounded-full"
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt={user.name}
          />
        </span>
        <div className="ml-3 leading-none">
          <h2 className="text-lg text-gray-800">Danniel Hansel</h2>
          <h3 className="text-gray-600">Software Developer</h3>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-6 divide-y-1 divide-gray-400">
        <ul className="space-y-5">
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-indigo-800"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Dashboard</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="stroke-current text-indigo-800"
              >
                <path d="M12 20v-6M6 20V10M18 20V4" />
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Analytics</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="stroke-current text-indigo-800"
              >
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Reports</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-indigo-800"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Products</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-indigo-800"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M7 15h0M2 9.5h20" />
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Payments</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-current text-indigo-800"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Users</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-indigo-800"
              >
                <circle cx="11.5" cy="8.5" r="5.5" />
                <path d="M11.5 14v7" />
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Maps</h4>
          </li>
        </ul>
        <hr />
        <ul className="space-y-5">
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-indigo-800"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Settings</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-indigo-800"
              >
                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                <circle cx="12" cy="10" r="3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Profile</h4>
          </li>
          <li className="flex items-center mb-3">
            <span className="h-8 w-8 flex items-center justify-center mr-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-indigo-800"
              >
                <circle cx="10" cy="20.5" r="1" />
                <circle cx="18" cy="20.5" r="1" />
                <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
              </svg>
            </span>
            <h4 className="font-medium text-gray-800 ml-1">Upgrade to Pro</h4>
          </li>
        </ul>
      </div>
      <ul className="mb-3 space-y-3 mt-auto">
        <li className="flex items-center mb-3">
          <span className="h-8 w-8 flex items-center justify-center mr-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current text-indigo-800"
            >
              <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
            </svg>
          </span>
          <h4 className="font-medium text-gray-800 ml-1">Logout</h4>
        </li>
      </ul>
    </aside>
  );
}
