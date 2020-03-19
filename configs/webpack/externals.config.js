console.log('[config:webpack:snippet] Externals loaded');

module.exports = {
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'moment': 'moment',
  }
};
