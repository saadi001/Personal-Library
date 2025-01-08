### greeting util function for react app

```js
export const getTimeGreetings = () => {
  const hour = new Date().getHours();
  console.log("current hour: ", hour);

  if (hour >= 5 && hour < 12) {
    return "Good Morning!";
  } else if (hour >= 12 && hour < 14) {
    return "Good Noon!";
  } else if (hour >= 14 && hour < 17) {
    return "Good Afternoon!";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
};
```
