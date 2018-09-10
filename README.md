# net-check-win10
A Node.js Module to check network connectivity using Native network access check for Windows 10. You don't need to make any Ajax request in Windows 10 to check for network access. Returns <em>true</em> with network access and <em>false</em> without network access.

## Install Module
```
    npm install net-check-win10
```

<strong>Note: <i>Requires Node >= 8.0.0</i></strong>

## Usage

```javascript
    const checkInternet = require('net-check-win10');
    console.log(checkInternet());
    // prints 'true' or 'false' depending on networking connectivity
```
