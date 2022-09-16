const basicInfo = require('./basicInfo');
const servers = require('./servers');
// const components = require('./components');
const tags = require('./tags');
// const login = require('./oms');

const docs = {
  ...basicInfo,
  ...servers,
  // ...components,
  ...tags,
  // ...login
}
export default docs