const commonColor = {
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  activeColor: '#DE5E69', //'#00695C',
  deactiveColor: '#DE5E6950', //'#B2DFDB',
  boxActiveColor: '#DE5E6940', //'#80CBC4',
};

const light = {
  themeColor: '#FFFFFF',
  white: '#000000',
  sky: '#DE5E69',
  gray: 'gray',
  ...commonColor,
};

const dark = {
  themeColor: '#000000',
  white: '#FFFFFF',
  sky: '#831a23',
  gray: 'white',
  ...commonColor,
};

export default { light, dark };
