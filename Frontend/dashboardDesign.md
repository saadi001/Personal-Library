#### Dashboard design in next js

```jsx
///layout.js
<div className="h-screen flex overflow-hidden">
  {/* sidebar  */}
  <aside className="w-64 bg-primaryColor flex-shrink-0 overflow-y-auto">
    <div className="h-full p-4 space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-2 hover:bg-gray-700 rounded">
          Menu Item {i + 1}
        </div>
      ))}
    </div>
  </aside>
  {/* main content  */}
  <main className="flex-1 overflow-y-auto p-6 bg-gray-100">{children}</main>
</div>
```

#### if in sidebar we want something in top and bottom fixed.

```jsx
export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0 flex flex-col">
        {/* Top: Logo */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">MyLogo</h1>
        </div>

        {/* Middle: Scrollable Menu */}
        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="p-2 hover:bg-gray-700 rounded cursor-pointer"
            >
              Menu Item {i + 1}
            </div>
          ))}
        </nav>

        {/* Bottom: Logout */}
        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded text-sm">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-100">{children}</main>
    </div>
  );
}
```
