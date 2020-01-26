var Jimp = require('jimp');

Jimp.read('tilePhotos/tile18.jpg')
  .then(land => {
    return land
      .crop(0, 0, 600, 600)
      .quality(90) // set JPEG quality
      .write('cropTiles/newtile18.jpg'); // save
  })
  .catch(err => {
    console.error(err);
  });


