# ELEposition ![GitHub license](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667) [![img](https://img.shields.io/github/v/release/altmshfkgudtjr/ELEposition?color=%2312b886)](https://github.com/altmshfkgudtjr/ELEposition/releases/tag/v.1.0.0)  

**Get Element position & information**





## How to use?

```javascript
import getElmentPosition from 'eleposition'

const target = document.querySelector("#Element");

const result = getElementPosition(target);
```





## Return 

```javascript
// return Object
{
    target: <DOM Element>,
    leftTop: {
        x: <number>,
        y: <number>
    },
    rightTop: {
        x: <number>,
        y: <number>
    },
    leftBottom: {
        x: <number>,
        y: <number>
    },
    rightBottom: {
        x: <number>,
        y: <number>
    },
    width: <number>,
    height: <number>
  }
```





### Demo Page

📢 https://altmshfkgudtjr.github.io/ELEposition/