#### If port is changing again and again not killing past ports.

Open Command Prompt (cmd) as Administrator, then run:

```sh
netstat -ano | findstr :5174

```

It will show an output like this:

```sh
  TCP    0.0.0.0:5174     0.0.0.0:0     LISTENING     12345
```

Use the PID from the previous step and run:

```sh
taskkill /PID 12345 /F
```

(Replace 12345 with the actual PID you found in Step 1.)
