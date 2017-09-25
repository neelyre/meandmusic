
const app = angular.module('soundtrack', []);

app.controller('MainController', ['$http', function($http){
  console.log('this is happening');
  const controller = this;
  // this.url = 'https://musicandme-backend.herokuapp.com';
  this.url = 'http://localhost:3000';

  this.login = function(userPass) {
  console.log(userPass);
}


  this.test = "hi"
  this.displayLogin = true;
  this.displayRegistration = false;
  this.displayEditUserData = false;
  this.displaylogged = false;
  this.displayDeleteAccount = false;
  this.noAccount = true
  this.editData = false;
  this.createAccount = true;

  this.instrumentInclude = function(){
		this.includePartialPath = 'partials/partial1.html';
  }
  this.genreInclude = function(){
    this.includePartialPath = 'partials/partial2.html';
  }
  this.listWoodwinds = function(){
    this.includeinstrumentPath = 'partials/woodwinds.html';
  }
  this.listStrings = function(){
    this.includeinstrumentPath = 'partials/strings.html';
  }
  this.listBrass = function(){
    this.includeinstrumentPath = 'partials/brass.html';
  }
  this.listPercussion = function(){
    this.includeinstrumentPath = 'partials/percussion.html';
  }
  this.listOther = function(){
    this.includeinstrumentPath = 'partials/other.html';
  }
  this.listJazz = function(){
    this.includeinstrumentPath = 'partials/Jazz.html';
  }
  this.listRock = function(){
    this.includeinstrumentPath = 'partials/Rock.html';
  }
  this.listBlues = function(){
    this.includeinstrumentPath = 'partials/blues.html';
  }
  this.listClassical = function(){
    this.includeinstrumentPath = 'partials/classical.html';
  }
  this.accordian = function(){
    this.includePath = 'partials/single_instruments/accordian.html';
  }
  this.banjo = function(){
    this.includePath = 'partials/single_instruments/banjo.html';
  }
  this.bassoon = function(){
    this.includePath = 'partials/single_instruments/bassoon.html';
  }
  this.cello = function(){
    this.includePath = 'partials/single_instruments/cello.html';
  }
  this.clarinet = function(){
    this.includePath = 'partials/single_instruments/clarinet.html';
  }
  this.double_bass = function(){
    this.includePath = 'partials/single_instruments/double_bass.html';
  }
  this.drums = function(){
    this.includePath = 'partials/single_instruments/drums.html';
  }
  this.flute = function(){
    this.includePath = 'partials/single_instruments/flute.html';
  }
  this.french_horn = function(){
    this.includePath = 'partials/single_instruments/french_horn.html';
  }
  this.harmonica = function(){
    this.includePath = 'partials/single_instruments/harmonica.html';
  }
  this.harp = function(){
    this.includePath = 'partials/single_instruments/harp.html';
  }
  this.mandolin = function(){
    this.includePath = 'partials/single_instruments/mandolin.html';
  }
  this.oboe = function(){
    this.includePath = 'partials/single_instruments/oboe.html';
  }
  this.piano = function(){
    this.includePath = 'partials/single_instruments/piano.html';
  }
  this.saxophone = function(){
    this.includePath = 'partials/single_instruments/saxophone.html';
  }
  this.steeldrums = function(){
    this.includePath = 'partials/single_instruments/steeldrums.html';
  }
  this.timpani = function(){
    this.includePath = 'partials/single_instruments/timpani.html';
  }
  this.trombone = function(){
    this.includePath = 'partials/single_instruments/trombone.html';
  }
  this.trumpet = function(){
    this.includePath = 'partials/single_instruments/trumpet.html';
  }
  this.tuba = function(){
    this.includePath = 'partials/single_instruments/tuba.html';
  }
  this.viola = function(){
    this.includePath = 'partials/single_instruments/viola.html';
  }
  this.violin = function(){
    this.includePath = 'partials/single_instruments/violin.html';
  }
  this.xylophone = function(){
    this.includePath = 'partials/single_instruments/xylophone.html';
  }

  this.displayRegistrationDiv = function(){
  this.displayRegistration = true;
  this.displayLogin = false;
  this.createAccount = false;
  this.noAccount = false;
};

  this.hideAllLogin = function(){
    this.displayLogin = false;
    this.displayRegistration = false;
    this.displayLogOut = true;
    this.displaylogged = true;
    this.noAccount = false;
    this.editData = true;
    this.createAccount = false;
    this.displayDeleteAccount = true;
  };

  this.editUserInfo = function(){
    console.log('edituser');
    this.displayEditUserData = true;
    this.editData = false;
  }

this.testdisplay = true;
this.hideText = function(){
  this.testdisplay = false;
};
this.showText = function(){
  this.testdisplay = true;
};


  // this.includePath = 'partials/partial1.html';


  this.user = {};
  this.users = [];
  this.userPass = {};

  // this.url = 'http://localhost:3000';

  console.log('hi');





  // ============LOGIN METHODS BELOW=========

//user account create///
   this.createUser = function(userPass) {
    //  this.displayLogout = true;
     console.log('creating user');
     $http({
       method: 'POST',
       url: this.url + '/users',
       data: { user: { username: userPass.username, password: userPass.password, first_name: userPass.first_name, last_name: userPass.last_name, instruments: userPass.instruments, genre: userPass.genre }},
     }).then(function(response) {
       controller.user = response.data;
       console.log(controller.user,'logged user');
       controller.hideAllLogin();

     })
   };

// /user login///

this.login = function(userPass) {
$http({
  method: 'POST',
  url: this.url + '/users/login',
  data: { user: { username: userPass.username, password: userPass.password }},
}).then(function(response) {
  console.log(response);
  controller.user = response.data.user;
  localStorage.setItem('token', JSON.stringify(response.data.token));
  }.bind(this));
  controller.hideAllLogin();


};

this.editUser = function(id){
  $http({
    method: 'GET',
    url: this.url + '/users/' + id
  }).then(function(response){
    controller.currentUser = response.data;
    console.log(controller.currentUser);
  }, function(error){
    console.log(error,'review error')
  })
};

this.publishUser = function(userPass){
$http({
  method: 'PUT',
  headers: {
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
  },
  url: this.url + '/users/' + this.user.id,
  data: { user: { instruments: userPass.instruments, genre: userPass.genre }},
}).then(function(response){
    console.log(response);
  controller.user = response.data;
  controller.displayEditUserData = false;
}, function(error){
  console.log(error, 'error from publish edit');
})
};

this.deleteUser = function(id){
$http({
method: 'DELETE',
url: this.url + '/users/' + id
}).then(function(response){
console.log(response);
}, function(error){
console.log(error, 'error from delete route');
})
};



// ===test method below. may want to disable once login tests sucessful===
this.getUsers = function() {
  $http({
    url: this.url + '/users',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  }).then(function(response) {
    console.log(response);
    if (response.data.status == 401) {
        this.error = "Unauthorized";
    } else {
      this.users = response.data;
    }
  }.bind(this));
}

//logout //

this.logout = function() {
  console.log('logout');
localStorage.clear('token');
location.reload();
// this.hideAllLogin();
this.displayLogin = true;
this.displayDeleteAccount = false;
// controller.displayEditUserData = false;
}

// ============END LOGIN METHODS=========


// After the API loads, call a function to enable the search box.

}]);
