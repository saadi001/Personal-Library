### creating submenu of a menu by tailwind

```jsx
const Submenu = ({ name, to }) => {
  return (
    <Link to={to}>
      <span
        className="block text-sm px-4 py-4 text-[#525f81] hover:text-white bg-white hover:bg-[#00999F] transition-all duration-150 ease-in"
        
      >
        {name}
      </span>
    </Link>
  );
};
```

```jsx
<li className="text-[#525f81] hover:text-[#00999f] group relative">
                <p className="block px-4 py-4 cursor-pointer">
                  <span className="flex items-center">
                    Concerns
                    <RiArrowDropDownLine className="text-3xl -ml-1 -mr-3" /> 
                  </span>
                </p>
               <ul className="absolute hidden group-hover:block bg-white text-gray-700 w-[200px] z-20 shadow">
                  <Submenu name={"Catch Digitals"}></Submenu>
                  <Submenu name={"BitFlex"}></Submenu>
                  <Submenu name={"Catch Lab"}></Submenu>
                  <Submenu name={"Catch Platform"}></Submenu>
                  <Submenu name={"Catch Studio"}></Submenu>
                </ul> 
</li>

```
