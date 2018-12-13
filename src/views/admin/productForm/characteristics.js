const images = require.context('../../../assets/characteristics/', false, /\.(png|jpe?g|svg)$/).keys().map(require.context('../../../assets/characteristics/', false, /\.(png|jpe?g|svg)$/));

const names = require.context('../../../assets/characteristics/', false, /\.(png|jpe?g|svg)$/).keys().map(name => name.split('/')[1]);


export const characteristics = images.map((image, index) => ({
    icon: image,
    value: names[index]
}));