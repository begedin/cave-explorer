export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5);
  });
};

export const scaleObjectToGameSize = (object, factor = 1) => {
  const gameTileSize = 32;
  let dimension = object.height > object.width ? object.height : object.width;
  let scale = gameTileSize / dimension * factor;
  object.scale.setTo(scale);
};
