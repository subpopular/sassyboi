# sassyboi

> A collection of React components and styles. [sassyboi.netlify.com](https://sassyboi.netlify.com)

[![NPM](https://img.shields.io/npm/v/sassyboi.svg)](https://www.npmjs.com/package/sassyboi)

## Install

```bash
npm install --save sassyboi
```

## Usage

```jsx
import React from 'react'
import {Button} from 'sassyboi'

const App = () => {
  return <Button>Press me!</Button>
}
```

Check out the [full documentation](https://sassyboi.netlify.com) and [Playroom](https://sassyboi-playroom.netlify.com).

## 🚀 Developing

1.  **Clone the repository**

    ```bash
    git clone https://github.com/subpopular/sassyboi.git
    ```

2.  **Install dependencies**

    ```bash
    cd sassyboi
    yarn install
    ```

3.  **Start the component dev server**

    ```bash
    yarn start
    ```

    The dev server watches for changes in the `src` directory and rebuilds the final output.

4.  **Start documentation site**

    Open another terminal tab and navigate to the `www` directory and run:

    ```bash
    cd www
    yarn start
    ```

    This will start up the docs site at http://localhost:8080 React app which is locally linked to the `sassyboi` components.

5.  **Start Playroom**

    Open another terminal tab in the project root and run:

    ```bash
    yarn playroom:start
    ```

    This will start up a local instance of Playroom at http://localhost:9000 which is also locally linked to the `sassyboi` components.

## Publishing

[TODO]

## License

MIT © [subpopular](https://github.com/subpopular)
