const { IS_LOCAL } = require('./constants')
exports.company = process.env.REACT_APP_COMPANY
exports.currency = process.env.REACT_APP_CURRENCY

if (process.env.REACT_APP_LOCAL_API !== IS_LOCAL) {
  exports.urls = {
    authURL: 'http://localhost:18081',
    dataURL: 'http://localhost:18082',
    contentsURL: 'http://localhost:18100',
    paymentURL: 'http://localhost:18089',
  }
} else {
  exports.urls = {
    authURL: process.env.REACT_APP_CALIMACO_API_BASE + '/auth',
    dataURL: process.env.REACT_APP_CALIMACO_API_BASE + '/data',
    contentsURL: process.env.REACT_APP_CALIMACO_API_BASE + '/contents',
    paymentURL: process.env.REACT_APP_CALIMACO_API_BASE + '/payment',
  }
}

exports.endpointWS = {
  wsserver: process.env.REACT_APP_CALIMACO_BASE,
  server: process.env.REACT_APP_CALIMACO_BASE,
  serverPath: '/api/notifications',
}
