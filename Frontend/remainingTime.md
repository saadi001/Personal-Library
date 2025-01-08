#### Remaining time from future date by moment js

```js
import moment from "moment";

const showRemainingTime = (endTime) => {
  const now = moment(); // Get current time
  const end = moment(endTime); // Target time
  const duration = moment.duration(end.diff(now)); // Calculate the difference

  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  return `${days}d ${hours}h ${minutes}m`;
};

// Example usage:
// const endTime = "2025-01-14T18:00:00.000Z";
// console.log(showRemainingTime(endTime));
export default showRemainingTime;
```

##### uses

```js
showRemainingTime(info?.validaty);
```
