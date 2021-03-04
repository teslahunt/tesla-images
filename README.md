<div align="center">
  <img src="https://teslahunt.io/banner-red.png" alt="@teslahunt/title">
  <br><br>
</div>

![Last version](https://img.shields.io/github/tag/teslahunt/tesla-images.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/teslahunt/tesla-images/master.svg?style=flat-square)](https://travis-ci.com/teslahunt/tesla-images)
[![Coverage Status](https://img.shields.io/coveralls/teslahunt/tesla-images.svg?style=flat-square)](https://coveralls.io/github/teslahunt/tesla-images)
[![Dependency status](https://img.shields.io/david/teslahunt/tesla-images.svg?style=flat-square)](https://david-dm.org/teslahunt/tesla-images)
[![Dev Dependencies Status](https://img.shields.io/david/dev/teslahunt/tesla-images.svg?style=flat-square)](https://david-dm.org/teslahunt/tesla-images#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/tesla-images.svg?style=flat-square)](https://www.npmjs.org/package/tesla-images)

> Get Tesla vehicles images from Tesla inventory or 3D visualization.

## Install

```bash
$ npm install tesla-images --save
```

## Usage

There are two ways for getting Tesla stock images:

- Tesla sells some vehicles under CPO terms and they have real pictures of it.
- Tesla has an internal API for generating a 3D visualization of any vehicle (used by their website).

This library combines both techniques providers, fallbacking one in the other one in case stock images are missing (that is the most probable thing).

```js
const getImages = require('tesla-images')

;(async () => {
  const images = await getImages({
    vin: '5YJSA7H21FF084652',
    modelLetter: 'S',
    optionCodes: ['ADPX2', 'AU01', 'DA02', 'APH1', 'APD2', 'X028']
  })
})()
```

## License

**tesla-images** © [Tesla Hunt](https://teslahunt.io), released under the [MIT](https://github.com/teslahunt/tesla-images/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Tesla Hunt](https://teslahunt.io) with help from [contributors](https://github.com/teslahunt/tesla-images/contributors).

> [teslahunt.io](https://teslahunt.io) · GitHub [Tesla Hunt](https://github.com/teslahunt) · Twitter [@teslahunt](https://twitter.com/teslahunt)
