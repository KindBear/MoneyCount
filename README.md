# Money Counter
## Description
Application which helps users to keep their budgets.

## Development
### Step 1. Install dependencies
To install the project dependencies run next command
```
yarn
```

### Step 2. Running project
To run the project use next command
```
yarn start
```

## Project structure
```
.
├── configs                 # webpack configuration files
└── src                     # Source files
    ├── main                # Main process folder
    │   ├── controllers     # Files which describe API for renderer process
    │   ├── core            # Main process decorators and Module
    │   └── services        # Application logic
    ├── renderer            # Renderer process folder
    │   └── api             # Files descibed communication between processes
    └── shared              # Files that can be used in both processes 

```

## api function

To invoke some channel use

```ts
function api<A, R>(channel: string, args?: A): Promise<R>
```

```ts
// Example of usage

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type CreateTodo = {
  title: string;
}

api<CreateTodo, Todo>("todo/create", {title})
  .then((response: Todo) => {
    ...
  })
```


## Core API

### channel decorator

Can be used in Controller class. set channel to Controller method.

```ts
class ControllerA {
  @channel("chanel")
  someMethod(event: IpcMainInvokeEvent, options: any) {
    ...
  }
}
```
###### NOTE
method decorated with `@channel` will be used as handler in `ipcMain.handle(channel, handler)`

### controller decorator
Add prefix to all Controller methods

```ts
// someHandler will be called when ipcMain get message to 
// "channelPrefix_example"
@controller("channelPrefix_")
class ControllerB {
  @channel("example")
  someHandler(event: IpcMainInvokeEvent, options: any) {
  ...
  }
}
```

### class Module
#### bootstrap

Provides dependency injection. Also register all handlers to their channels

```ts
Module.bootstrap({
  controllers: [ControllerA, ControllerB],
  services: [ServiceA, ServiceB],
});
```
