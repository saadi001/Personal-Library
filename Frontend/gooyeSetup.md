in app js

```js
<GooeyToaster
  position="top-center"
  swipeToDismiss
  toastOptions={{
    richColors: true,
    classNames: {
      timestamp: "gooey-timestamp",
    },
  }}
/>
```

call toast

```js
gooeyToast.success("Google login successful");
```
