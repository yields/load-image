
# load-image

  Creates and loads an image.

## Installation

    $ component install yields/load-image

## Example

```js
var image = require('load-image');
var body = document.body;
body.className = 'loading';
image('/foo.jpg', function(img){
  body.className = '';
  body.style.background = 'url(' + img.src + ')';
});
```
   

## License

  MIT
