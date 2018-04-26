## Detect Device (OS), Browser and Screen Size

Credit & Ref :
> https://medium.com/creative-technology-concepts-code/detect-device-browser-and-version-using-javascript-8b511906745

### Install
```bash
npm install --save detrack
```

### Sample usage

```javascript
import deTrack from 'detrack';

console.log(deTrack())

// Result :
//
// {
//   os: {
//     name: 'Win',
//     version: 10
//   },
//   browser: {
//     name: 'Chrome',
//     version: '66'
//   },
//   screen: {
//     width: 1024,
//     height: 768
//   },
//   userAgent: 'User agent information',
//   appVersion: 'App Version information',
//   platform: 'Platform info',
//   vendor: 'Google Inc'
// }

```