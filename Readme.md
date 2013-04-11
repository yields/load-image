
# load-image

  Creates and loads an image.

## Installation

    $ component install yields/load-image

## Example

I wanted to show a loading background while a background image is loading,
if anyone knows of a better way to do it, please tell me :).

```js
var image = require('load-image');
var body = document.body;
body.className = 'loading';
image('/foo.jpg', function(img){
  body.className = '';
  body.style.backgroundImage = img.src;
});
```
   

## License

  MIT
