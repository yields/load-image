
/**
 * Preload the given `src` with the given `fn`
 *
 * @param {String} src
 * @param {Function} fn
 * @return {Image}
 */

module.exports = function(src, fn){
  var img = new Image();
  img.onload = function(){ fn(img) };
  img.src = src;
  return img;
};
