## Plain CSS

```jsx
import "./App.css";

export default function App() {
  return <div className="box">Hello</div>;
}
```

## CSS Modules

```jsx
import styles from "./App.module.css";

export default function App() {
  return <div className={styles.box}>Hello</div>;
}
```

## Inline Styles

```jsx
export default function App() {
  return <div style={{ color: "tomato", padding: 12 }}>Hello</div>;
}
```

## Styled Components

```jsx
import styled from "styled-components";

const Box = styled.div`
  color: tomato;
  padding: 12px;
`;
```

## Emotion

```jsx
import { css } from "@emotion/react";

const box = css`
  color: tomato;
  padding: 12px;
`;
```

## SCSS / Sass

```jsx
import "./App.scss";
```

## Tailwind CSS

```jsx
export default function App() {
  return <div className="p-3 text-red-500">Hello</div>;
}
```

## CSS Variables

```jsx
export default function App() {
  return <div style={{ "--main-color": "tomato" }}>Hello</div>;
}
```

## Global CSS

```jsx
import "./global.css";
```

## Styled JSX

```jsx
export default function App() {
  return (
    <>
      <div className="box">Hello</div>
      <style jsx>{`
        .box {
          color: tomato;
          padding: 12px;
        }
      `}</style>
    </>
  );
}
```
