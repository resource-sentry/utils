const Categories = require('./categories');

let names = [];
names[Categories.COLOR] = 'Color';
names[Categories.DIMENSION] = 'Dimension';
names[Categories.GRAPHIC] = 'Graphic';
names[Categories.TEXT] = 'Text';
names[Categories.VALUE] = 'Value';
names[Categories.LANGUAGE] = 'Language';

module.exports = Object.freeze(names);
