## Named Exports

**Export ways**

```javascript
// way 1
export const name = "icoderarely";
export const age = 25;

// way 2
const name = "icoderarely";
const age = 25;

export { name, age };
```

**Import ways**

```javascript
import { name, age } from "./file";

// rename
import { name as userName } from "./file";
```

## Default Export

**Export ways**

```javascript
const User = () => {
  return <div>Hello</div>;
};

export default User;
```

**Import Ways**

```javascript
import User from "./file";

// rename
import MyComponent from "./file";
```

### React Specific Notes

Most components use default export

```js
// Button.jsx
export default function Button() {
  return <button>Click</button>;
}
```

Utility functions/hooks often use named exports

```js
import Button from "./Button";
```
