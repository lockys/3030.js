# %%30%30.js 
Experience the %%30%30 bug of chrome on different browsers!   

**This [bug](https://bugs.chromium.org/p/chromium/issues/detail?id=533361) has been fixed in the 45.0.2454.101 version of Chrome browser.**  
For more details, check [szhu's 3030 game](https://github.com/szhu/3030/tree/gh-pages#whats-this-about)  
This is what happen when this bug is triggered:
![](https://raw.githubusercontent.com/lockys/3030.js/master/media/record.gif)

let's fake it:  
![](http://i.imgur.com/nbeIdlI.gif)
Check out the [Demo](http://lockys.github.io/3030.js/)

Get Started
==
```javascript
<link rel="stylesheet" href="./dist/css/30.min.css" media="screen" charset="utf-8">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js" charset="utf-8"></script>
<script src="./dist/js/30.min.js" charset="utf-8"></script>
```

How To Use it
==
```javascript
$(document).ready(function() {
  $('.break-link').breakThisLink();
});
```

Contribute
==
I'm not maintaining this just-for-fun stuff. But feel free to send PRs to make this bug work like real!

LICENSE
==
MIT @ Hao-Wei Jeng  
Inspired by [szhu/3030](https://github.com/szhu/3030/tree/gh-pages)  
It's nice that the modified version of `3030.js` is used in [3030](http://szhu.github.io/3030/#contributing).
