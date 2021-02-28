[![npm-version](https://img.shields.io/npm/v/use-window-blur-change-title.svg)](https://www.npmjs.com/package/use-window-blur-change-title)
[![npm-download](https://img.shields.io/npm/dt/use-window-blur-change-title.svg)](https://www.npmjs.com/package/use-window-blur-change-title)

# use-window-blur-change-title

React Hook for set the page title when the user is shifting focus away from the current window.

## Installation

To install the hook you can use npm:

```shell
npm i use-window-blur-change-title
```

or Yarn if you prefer:

```shell
yarn add use-window-blur-change-title
```

## Usage

All you need is simple import the hook:

```tsx
import { useWindowBlurChangeTitle } from 'use-window-blur-change-title';
```

And call the hook in the body function component:

```tsx
useWindowBlurChangeTitle('Hey, please come back');
```

The hook takes **one parameter** - the new document title to appear in the blur time of the window. If the user returns to the window (focus), the title will be changed to the one before the change.

Full example:

```tsx
import { useWindowBlurChangeTitle } from 'use-window-blur-change-title';

export const AppComponent = () => {
  useWindowBlurChangeTitle('Hey, please come back');

  return <div>Hello GitHub!</div>;
};
```
