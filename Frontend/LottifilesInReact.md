## How we can use Lottifiles in React.

**First we have to take json from from lottifiles and create filed named with .json and import it.**

```jsx
import businessGirl from "../../../lotties/business-girl.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: businessGirl,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

<div className="">
  <Lottie options={defaultOptions} width={"100%"} />
</div>;
```

### Using dynamically lottifiles.

First we create a dynamic components for Lotties.

```jsx
import Lottie from "react-lottie";

export default function DynamicLotties({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={"100%"} />;
}
```

Then import and add in dynamic data and use it dynamically.

```jsx
import meeting from "../../lotties/meeting-animation.json";

const aboutData = [
  {
    title: "About Us",
    image: meeting,
    description:
      "At Innovate International Ltd., we are pioneers in technology, driving innovation across various sectors. From ecommerce solutions to job portals, research services, dropshipping platforms, digital marketing expertise, textile software, online news outlets, and agency services, we cater to diverse industries with tailored solutions.",
  },
];
//use it
{
  activeTab && (
    <div className="w-full p-2">
      <DynamicLotties animationData={filteredData?.image} />
    </div>
  );
}
```
