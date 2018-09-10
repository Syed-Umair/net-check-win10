# net-check-win10
A Node.js Module to check whether you are connected to network or not using Native network access check for Windows 10. You don't need to make any Ajax request in Windows 10 to check for network access. Returns promise resolves to <em>true</em> with network access and to <em>false</em> without network access.

## Install Module
```
    npm install net-check-win10
```

<strong>Note: <i>Requires Node >= 8.0.0</i></strong>

## Usage

```javascript
    const checkInternet = require('net-check-win10');
    checkInternet().then(val => console.log(val));
    // prints 'true' or 'false' depending on networking connectivity
```
