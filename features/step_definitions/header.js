const {defineSupportCode: cucumber} = require(`cucumber`);

cucumber(({Given, Then}) => {

  Given('I am viewing the dashboard', function (int, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('I see the header', function (int, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

});
