```js
useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    setSlidesToScroll(width >= 640 ? 4 : 2);
  };

  handleResize(); // set on first render
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```
