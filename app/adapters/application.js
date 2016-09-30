import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
// });

export default DS.RESTAdapter.extend({
  host: 'http://valiz.template01.info',
  namespace: 'wp-json'
});
