const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const categorySchemas = require('./services/category/schema');
const category = require('./services/category/category')


// const login = require('./oms');

const docs = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...category,
  ...categorySchemas,
}
export default docs