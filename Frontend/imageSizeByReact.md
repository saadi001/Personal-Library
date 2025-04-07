##### image sizing for right view

fix as requirement

```js
<div className="border rounded-md flex items-center overflow-hidden p-0.5 bg-white  justify-center w-10 h-10">
  <img
    src={data?.companyImage || data?.vendorImage}
    alt="avatar"
    // width={40}
    // height={40}
    className=" object-contain w-full rounded"
  />
</div>
```
