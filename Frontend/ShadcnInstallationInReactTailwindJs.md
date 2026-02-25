##### shadcn installation with react + tailwind + js

create a jsconfig.json file and paste this

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

edit vite.config.js file like this

```js
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

then use shadcn commands

```js
npx shadcn@latest init
npx shadcn@latest add button
```
