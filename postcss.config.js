export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'], // преобразовывать все свойства
    },
  },
}
