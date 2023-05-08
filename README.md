# @axframe/axficons

[![NPM version](https://img.shields.io/npm/v/@axframe/axficon.svg?style=flat)](https://npmjs.org/package/@axframe/axficon)
[![NPM downloads](http://img.shields.io/npm/dm/@axframe/axficon.svg?style=flat)](https://npmjs.org/package/@axframe/axficon)

Convert svg files into tsx files to make icons easy to use in your React based project.

## Usage

```bash
npm i @axframe/axficons
```

```tsx
import { AXFIconsAppEnv } from '../AXFIcons';
```

## Development

First, run the development server:

```bash
npm i
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## How to use

- Create an svg file. (We recommend creating a path tag for the svg file content.)
- If there are multiple paths, do not adjust the color with CSS.
- Paste the svg file into the `svgFiles` folder in the project.
- `npm run storybook`
- Check your browser
