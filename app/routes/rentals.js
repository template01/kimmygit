import Ember from 'ember';

let rentals = [{
  id: 'grand-old-mansion',
  title: 'Grand Old Mansion',
  owner: 'Veruca Salt',
  city: 'San Francisco',
  type: 'Estate',
  bedrooms: 15,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 'urban-living',
  title: 'Urban Living',
  owner: 'Mike TV',
  city: 'Seattle',
  type: 'Condo',
  bedrooms: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  id: 'downtown-charm',
  title: 'Downtown Charm',
  owner: 'Violet Beauregarde',
  city: 'Portland',
  type: 'Apartment',
  bedrooms: 3,
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];


export default Ember.Route.extend({
  model: function() {
    // return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls?page=1&per_page=3');
    // Ember.$.ajaxSetup(
    //   crossDomain: true
    // )
//
    return Ember.$.getJSON('http://valiz.template01.info/wp-json/posts');
    //
    // Ember.$.ajaxSetup({
    //     beforeSend: function(xhr) {
    //         xhr.withCredentials = true;
    //         xhr.setRequestHeader('Authorization', 'bearer 123456');
    //     }
    // });

    // Ember.$.ajax({
    //    type: 'GET',
    //    url:'http://valiz.template01.info/wp-json/posts',
    //    crossDomain: true,
    //    dataType: "json",
    //   //  headers: { 'x-my-custom-header': 'some value' },
    //    success: function(data){
    //       // success_fn(data);
    //       return data
    //    },
    //    error: function(jqXHR, textStatus, errorThrown) {
    //       // error_fn(jqXHR, textStatus, errorThrown);
    //    }
    // });

    // return this.store.findAll('post')
    // return  this.get('store').findRecord('post', 509);
    // var pageData = this.store.findAll('post', 509);
    //  console.log(pageData);
    //  return this.store.query('post', {per_page: 99});
  }

});
