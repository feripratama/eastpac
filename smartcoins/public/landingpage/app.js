var app = angular.module('TashaApp', [
  'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ngRoute',
  'pascalprecht.translate',
  'nav',
  'header',
  'about',
  'whitepaper',
  'technology',
  'prototype',
  'token',
//  'team',
  'footer',
  'crowdsale'
]
//                         ,function($interpolateProvider) {
//    $interpolateProvider.startSymbol('<%');
//    $interpolateProvider.endSymbol('%>');
//}
);

var apiAddress;

// release
apiAddress = window.location.origin;

// my local
// apiAddress = 'https://'+window.location.hostname;

// dev
// apiAddress = 'https://222.239.250.227';

// stage
// apiAddress = 'https://210.180.118.52';

app.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.useStaticFilesLoader({
    prefix: 'lang/locale-',
    suffix: '.json?ver=1224'
  });

  $translateProvider.fallbackLanguage('en');
  $translateProvider.preferredLanguage('en');

  // Enable escaping of HTML
  $translateProvider.useSanitizeValueStrategy('sce');

}]);

app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "landingpage/home/home.tpl.html",
      resolve: {
        "init": function () {
          window.scroll(0, 0);
        }
      }
    })
    // .when("/:language", {
    //   templateUrl: "home/home.tpl.html",
    //   controller: function($scope, $routeParams){
    //     var language = $routeParams.language;
    //     console.log("routing : "+language);
    //     if(language === 'en' && language === 'kr'){
    //       console.log(language);
    //       $scope.changeLanguage(language);
    //     }else{
    //       window.location.href = '/#/en';
    //     }

    //   },
    //   resolve: {
    //     "init": function () { window.scroll(0, 0); }
    //   }
    // })
    // .when("/kr/", {
    //   templateUrl: "home/home.tpl.html",
    //   controller: function($scope){
    //     $scope.changeLanguage('kr');
    //   },
    //   resolve: {
    //     "init": function () { window.scroll(0, 0); }
    //   }
    // })
    .when("/usecase", {
      templateUrl: "landingpage/usecase/usecase.tpl.html"
    })
    // .when("/:language/usecase", {
    //   controller: function($routeParams,$scope){
    //     var language = $routeParams.language;
    //     $scope.changeLanguage(language);

    //   },
    //   templateUrl: "usecase/usecase.tpl.html"
    // })
    .when("/term", {
      templateUrl: "landingpage/term/term.tpl.html"
    })
    .when("/privacy", {
      templateUrl: "landingpage/term/privacy.tpl.html"
    })
    .when("/kyc", {
      templateUrl: "landingpage/kyc/kyc.tpl.html",
      controller: "kycCtrl"
    })
    .when("/forgetpassword", {
      templateUrl: "landingpage/home/home.tpl.html",
      resolve: {
        "forgetpassword": function () { forgetpassword(); }
      }
    })
    .when("/updatepassword", {
      templateUrl: "landingpage/home/home.tpl.html",
      resolve: {
        "updatepassword": function () { updatepassword(); }
      }
    })
    .when("/accountactivated", {
      templateUrl: "landingpage/home/home.tpl.html",
      resolve: {
        "verify": function () {
          verifysignup();
        }
      }
    })
    .when("/unsubscribe", {
      templateUrl: "landingpage/home/home.tpl.html",
      resolve: {
        "unsubscribe": function () { unsubscribe(); }
      }
    })
    // .when("/usernotexist", {
    //   templateUrl: "home/home.tpl.html",
    //   resolve: { function() {  } }
    // })
    // .when("/notvalid", {
    //   templateUrl: "home/home.tpl.html",
    //   resolve: { function() {  } }
    // })
    // .when("/testemail", {
    //   templateUrl: "test/email.html"
    // })
    // .when("/faq", {
    //   templateUrl: "faq/faq.tpl.html",
    //   controller: "faqController"
    // })
    .otherwise({ redirectTo: '/' });

  // $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('!');
}).controller('kycCtrl', function ($scope, $sce) {
  // var temcoToken = document.cookie.replace(/(?:(?:^|.*;\s*)temcoToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var temcoHash = document.cookie.replace(/(?:(?:^|.*;\s*)temcoHash\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  if (temcoEmail != "") {
    window.location.href = "/#/kyc";
  } else {
    window.location.href = "/#/";
  }

  // $scope.trustSrc = function (src) {
  //   return $sce.trustAsResourceUrl(src);
  // }
  // $scope.kyclink = "https://kyc.argos-solutions.io/apply/82242448521453?emailAddress=" + kyc_email;

  loadkyc(temcoEmail, temcoHash);
});

function unsubscribe() {
  $ctrl.unsubscribe();
}

function forgetpassword() {
  $ctrl.forgetpassword();
}

function updatepassword() {
  $ctrl.updatepassword();
}
function verifysignup() {
  $ctrl.verifysignup();
}

app.controller('faqController', __faqController);
app.controller('TashaCtrl', function ($translate, $scope, $timeout, $location) {
  //set API address
  $scope.apiAddress = apiAddress;

  // check login status


  //change language
  $scope.language = 'en';
  $scope.lang = 'en';
  
  $scope.privacy = "https://docsend.com/view/bzphmqh";

  $scope.changeLanguage = function (langKey) {
    $scope.$broadcast('language', language = langKey);
    $scope.language = langKey;
    $translate.use(langKey);

    if (langKey === 'en') {
      $scope.lang = 'en';
            $scope.privacy = "https://docsend.com/view/bzphmqh";
    } else if (langKey === 'kr') {
      $scope.lang = 'ko';
            $scope.privacy = "https://docsend.com/view/b95y3ng";
    }
  };

  $scope.routingLanguage = function (langKey) {

    if (window.location.hash.includes("usecase")) {
      if (langKey === 'en') {
        $location.url('/en/usecase');
        $scope.changeLanguage('en');
      }
      else {
        $location.url('/kr/usecase');
        $scope.changeLanguage('kr');
      }
    } else {
      if (langKey === 'en') {
        $location.url('/en');
        $scope.changeLanguage('en');
      }
      else {
        $location.url('/kr');
        $scope.changeLanguage('kr');
      }
    }
  }

  //nav

  function updateTop(mode) {
    $('#go_to_top img').attr('src', 'landingpage/img/go_to_top_white.png');
    $('#go_to_top_text').css('color', '#fff');
  }

  $scope.aniDiv = function (div) {

    var $aniKey = $('' + div + ' .animated');

    $aniKey.each(function () {
      var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");

      aniWay.addClass("animated " + typ).css("visibility", "visible");
      if (dur) {
        aniWay.css('animation-duration', dur + 's');
      }
      if (dly) {
        aniWay.css('animation-delay', dly + 's');
      }

    });
  }

  $scope.delDiv = function (div) {

    var $aniKey = $('' + div + ' .animated');

    $aniKey.each(function () {
      var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");
      aniWay.removeClass(typ);
      aniWay.css('visibility', '');
      aniWay.css('animation-duration', '');
      aniWay.css('animation-delay', '');
    });
  }

  var isLoading = false;
  $scope.navClicked = function ($event, linkId, noScroll) {

    if (linkId === 'usecase') {
      window.location.href = "/#/usecase";
      window.scroll(0, 0);
      navbarClick();
      return;
    }
    else if (linkId === 'faq') {
      window.location.href = "/#/faq";
      window.scroll(0, 0);
      navbarClick();
      return;
    }
    else if (linkId === 'community') {
      return;
    }
    else if (!noScroll) {

      if (window.location.hash != "#/") {
        window.location.href = "/#/";
        setTimeout(function () {
          animateScroll();
        }, 100);
      } else {
        animateScroll();
      }

      function animateScroll() {
        isLoading = true;
        $("html, body").animate({ scrollTop: $('a[name=' + linkId + ']').offset().top }, 300, function () {
          updateTop($scope.activeScene);
          isLoading = false;
        });
      }

      navbarClick();

    }

    function navbarClick() {
      let ariaIndex = document.getElementsByClassName('navbar-toggler')[0].getAttribute("aria-expanded");

      if (ariaIndex === "true") {

        $timeout(function () {
          $('.navbar-toggler').trigger('click');
        })
      }
    }

    $('.nav-item').removeClass('active');

    if (linkId === 'home') {
      return;
    }
    var target = $event ? $($event.currentTarget) : $('.nav-link[data=' + linkId + ']');
    target.parent().addClass('active');

  };

  $scope.$watch('activeScene', function (newValue) {
    if (newValue) {
      updateTop(newValue);
    }
  });

  $scope.navLoaded = ['notice'];

  $scope.$watch('activeNav', function (newValue) {
    if (newValue && !isLoading && $scope.navBars && $scope.navBars.length === $scope.navLoaded.length) {
      $scope.navClicked(undefined, newValue, true);
    }
  });

  // init controller
  $scope.controller = new ScrollMagic.Controller();

  $timeout(function () {
    $scope.delDiv("#parallax2");
  }, 1000);

 $scope.logout = function() {
  document.cookie = "temcoEmail=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
  document.cookie = "temcoHash=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";

  $ctrl.whitelist_check('');
  $ctrl.logintext = 'login';

  window.location.href = "/#/";
  
  $scope.result = 'Finished';
  $scope.$broadcast('sendLogout', $scope.result);
 }

 $scope.dashboard = function() {
  $scope.$broadcast('todashboard', );
 }
 
 
 
 

});
var $ctrl;
app.controller('ModalCtrl', function ($scope, $uibModal, $uibModalStack, $log, $document, $timeout, $http) {

  $ctrl = this;
  
  $ctrl.animationsEnabled = true;

  // var temcoToken = document.cookie.replace(/(?:(?:^|.*;\s*)temcoToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  // if (temcoToken != "") {
  //   $ctrl.logintext = 'logout';
  // } else {
  //   $ctrl.logintext = 'login';
  // }

  if (temcoEmail != "") {
    $ctrl.logintext = temcoEmail;
  } else {
    $ctrl.logintext = 'login';
  }

  $scope.language = 'en';

  $scope.$on("language", function (event, message) {
    $scope.language = message;
    change_language();
  });

  function change_language() {
    if ($scope.language === 'en') {
      $ctrl.language = 'en';
    } else if ($scope.language === 'kr') {
      $ctrl.language = 'kr';
    }
  }
  
  $ctrl.loginflag = function (loginCheck) {
    if (loginCheck) {
      var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      $ctrl.logintext = temcoEmail;
      $scope.$broadcast('temcoEmail', temcoEmail);
      $scope.$broadcast('getmypage', temcoEmail);
    }
    else
      $ctrl.logintext = 'login';
  }

  // $ctrl.openlogin = function (size, parentSelector, option) {

  //   var parentElem = parentSelector ?
  //     angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

  //   if ($ctrl.logintext === 'login') {
  //     $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       ariaLabelledBy: 'modal-title',
  //       ariaDescribedBy: 'modal-body',
  //       templateUrl: 'login.html',
  //       controller: 'ModalInstanceCtrl',
  //       controllerAs: '$ctrl',
  //       size: size,
  //       appendTo: parentElem,
  //       resolve: {
  //         items: function () {
  //           return $ctrl;
  //         }
  //       }
  //     });
  //   } else if ($ctrl.logintext === 'logout') {
  //     $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       ariaLabelledBy: 'modal-title',
  //       ariaDescribedBy: 'modal-body',
  //       templateUrl: 'logout.html',
  //       controller: 'ModalInstanceCtrl',
  //       controllerAs: '$ctrl',
  //       size: size,
  //       appendTo: parentElem,
  //       resolve: {
  //         items: function () {
  //           return $ctrl;
  //         }
  //       }
  //     });

  //     document.cookie = "temcoToken=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
  //     document.cookie = "temcoEmail=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
  //     document.cookie = "temcoHash=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";

  //     $ctrl.whitelist_check('');
  //     $ctrl.logintext = 'login';
  //     window.location.href = "/#/";
  //   }
  // };

  $ctrl.openlogin = function (option) {
    if ($ctrl.logintext === 'login') {
      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'login.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        resolve: {
          items: function () {
            return $ctrl;
          }
        }
      });
    } else if (option === 'logout') {
      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'logout.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        resolve: {
          items: function () {
            return $ctrl;
          }
        }
      });

      $scope.logout();
      // document.cookie = "temcoEmail=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
      // document.cookie = "temcoHash=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";

      // $ctrl.whitelist_check('');
      // $ctrl.logintext = 'login';

      // window.location.href = "/#/";
    }
  };

  $ctrl.signup = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'signup.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.forgetpassword = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'forgetpassword.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });

  };

  $ctrl.updatepassword = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'updatepassword.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });

  };

  $ctrl.verifysignup = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'verifysignup.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  };

  $ctrl.resetpassword = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'resetpassword.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  };

  $ctrl.signupsuccess = function (email) {

    $scope.email = email;
    $scope.resendemail = "Resend verify Email";

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'signupsuccess.html',
      scope: $scope,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  };

  $ctrl.changesuccess = function () {

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'changesuccess.html',
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  };

  $ctrl.unsubsribe_success = function () {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'unsubscribe-success.html',
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  };

  $ctrl.openkakao = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'kakao.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };

  $ctrl.kycAlert = function () {

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'kyc-alert.html',
      scope: $scope,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  };

  $ctrl.unsubscribe = function () {

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'unsubscribe.html',
      scope: $scope,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  };

  $ctrl.kyc_status = function (kyc_status) {

    if (kyc_status === "approved" || kyc_status === "승인") {
      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'kyc-accepted.html',
        scope: $scope,
        resolve: {
          items: function () {
            return $ctrl;
          }
        }
      });
    } else if (kyc_status === "pending" || kyc_status === "진행중") {
      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'kyc-pending.html',
        scope: $scope,
        resolve: {
          items: function () {
            return $ctrl;
          }
        }
      });
    }
  };

  $scope.kyc_btn_background = { 'background-image': 'url(landingpage/img/crowdsale/kyc-btn.png)' };
  
  $ctrl.whitelist_check = function (temcoEmail) {

    if (temcoEmail === '') {
      $scope.kyc_btn_background = { 'background-image': 'url(landingpage/img/crowdsale/kyc-btn.png)' };
      $scope.kyc_status_css = { 'display': 'none' };
      $scope.kyc_status_box = { 'display': 'none' };
      return;
    }

    $http.get(apiAddress + '/checkKycStatus?email=' + temcoEmail)
      .then(function (resp) {
        let data = resp.data;
        
        $scope.kyc_btn_background = { 'background-image': 'url(landingpage/img/crowdsale/kyc-id.png)' };
        if ($scope.language === 'en') {
          if (data.content === "incomplete") {
            $scope.kyc_status = "";
            $scope.kyc_status_css = { 'display': 'none' };
            $scope.kyc_status_box = { 'display': 'none' };

          } else if (data.content === "rejected") {
            $scope.kyc_status = "rejected";
            $scope.kyc_status_css = { 'display': 'inline-block', 'color': '#c50056' };
            $scope.kyc_status_box = { 'display': 'inline-block', 'background-color': '#0a2e6e' };

          } else if (data.content === "approved") {
            $scope.kyc_status = "approved";
            $scope.kyc_status_css = { 'display': 'inline-block', 'color': '#008985' };
            $scope.kyc_status_box = { 'display': 'inline-block', 'background-color': '#0a2e6e' };
          } else if (data.content === "pending") {
            $scope.kyc_status = "pending";
            $scope.kyc_status_css = { 'display': 'inline-block', 'color': '#0062ad' };
            $scope.kyc_status_box = { 'display': 'inline-block', 'background-color': '#0a2e6e' };
          }
        } else if ($scope.language === 'kr') {
          if (data.content === "incomplete") {
            $scope.kyc_status = "";
            $scope.kyc_status_css = { 'display': 'none' };
            $scope.kyc_status_box = { 'display': 'none' };
          } else if (data.content === "rejected") {
            $scope.kyc_status = "미승인";
            $scope.kyc_status_css = { 'display': 'inline-block', 'color': '#c50056' };
            $scope.kyc_status_box = { 'display': 'inline-block', 'background-color': '#0a2e6e' };
          } else if (data.content === "approved") {
            $scope.kyc_status = "승인";
            $scope.kyc_status_css = { 'display': 'inline-block', 'color': '#008985' };
            $scope.kyc_status_box = { 'display': 'inline-block', 'background-color': '#0a2e6e' };
          } else if (data.content === "pending") {
            $scope.kyc_status = "진행중";
            $scope.kyc_status_css = { 'display': 'inline-block', 'color': '#0062ad' };
            $scope.kyc_status_box = { 'display': 'inline-block', 'background-color': '#0a2e6e' };
          }
        }
      });
  }

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, $http) {
  var $ctrl = this;
  
  $uibModalInstance.dismiss();
  // if ($ctrl.kycAlert != undefined) {
  //   $ctrl.kycAlert = items.kycAlert;
  // }
  
  $scope.privacy = "https://docsend.com/view/bzphmqh";
  
  change_language();
  // console.log(items);
  function change_language() {
    if (items.language === 'en') {
      $scope.privacy = "https://docsend.com/view/bzphmqh";
    }
    else if (items.language === 'kr') {
      $scope.privacy = "https://docsend.com/view/b95y3ng";
    }
  }

  $ctrl.kakaoLink = function () {
    $uibModalInstance.dismiss();
    window.open(
      'https://open.kakao.com/o/gkG9IoK',
      '_blank'
    );
  }

  $ctrl.login = function () {
    $ctrl.loginCheck();
  }

  $ctrl.loginCheck = function () {
    
    // 패스워드 정규식 
    // 영문 대소문자 1개 이상 6자리이상 20자리 이하 
    var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // 이메일 정규식
    var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if ($ctrl.user === undefined) {
      $ctrl.passwordErrorCheck = false;
      $ctrl.emailRequireCheck = false;
      return;

    } else {
      if ($ctrl.user.email === undefined) {
        $ctrl.emailRequireCheck = false;
        return;
      } else {
        $ctrl.emailRequireCheck = true;
        $ctrl.emailErrorCheck = false;
        emailReg.test($ctrl.user.email) ? $ctrl.emailErrorCheck = true : $ctrl.emailErrorCheck = false;
      }

      if (passwordReg.test($ctrl.user.password)) {
        $ctrl.passwordErrorCheck = true
      } else {
        $ctrl.passwordErrorCheck = false;
        return;
      }
    }

    // var req = {
    //   method: 'POST',
    //   url: apiAddress + '/loginJson',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   transformRequest: function (obj) {
    //     var str = [];
    //     for (var p in obj)
    //       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //     return str.join("&");
    //   },
    //   data: {
    //     email: $ctrl.user.email,
    //     password: $ctrl.user.password
    //   }
    // }

    // $http(req
    // ).then(function (resp) {
    //   console.log(resp);
    //   let content = resp.data.content;

    //   if (content === "successful") {
    //     // document.cookie = "temcoToken=" + resp.data.sessionToken;
    //     document.cookie = "temcoEmail=" + resp.data.email;
    //     document.cookie = "temcoHash=" + resp.data.hash;

    //     items.whitelist_check(resp.data.email);

    //     items.loginflag(true);
    //     $uibModalInstance.dismiss();

    //   } else if (content === "successful_not_activated") {
    //     $uibModalInstance.dismiss();
    //     items.signupsuccess($ctrl.user.email);
    //   }
    //   else if (content === "failed_wrong_password") {
    //     $ctrl.failed_user_not_exists = true;
    //     $ctrl.failed_wrong_password = false;
    //     $ctrl.passwordErrorCheck = true;
    //   } else if (content === "failed_user_not_exists") {
    //     $ctrl.failed_user_not_exists = false;
    //     $ctrl.failed_wrong_password = true;
    //     $ctrl.passwordErrorCheck = true;
    //   }
    //   else if (content === "failed_invalid_email_format") {
    //     $ctrl.failed_user_not_exists = true;
    //     $ctrl.failed_wrong_password = true;
    //     $ctrl.passwordErrorCheck = false;
    //   }

    // }),
    // function (error) { // optional
    //   console.log("error", error);
    // };


    var req = {
      method: 'POST',
      // url: apiAddress + '/loginJson',
      url: apiAddress + '/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic " + btoa("temco-client:temco-secret")
      },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        username: $ctrl.user.email,
        password: $ctrl.user.password,
        grant_type: "password"
      }
    }

    $http(req
    ).then(function (resp) {
      // if (resp.headers('Authorization')) {
      //   items.loginflag(true);
      // }

      // console.log(resp);

      var req2 = {
        method: 'POST',
        url: apiAddress + '/userInfo',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': "Bearer " + resp.data.access_token
        },
        transformRequest: function (obj) {
          var str = [];
          for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");

        },
        data: {
          email: $ctrl.user.email,
        }
      };

      $http(req2
      ).then(function (resp) {
        // console.log(resp);
        let content = resp.data.content;

        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000*60*30;
        // var expireTime = time + 1000*3;
        now.setTime(expireTime);

        if (content === "successful") {
          document.cookie = "temcoEmail="+resp.data.email+";expires="+now.toUTCString()+";path=/";
          document.cookie = "temcoHash=" + resp.data.hash+";expires="+now.toUTCString()+";path=/";
          
          items.whitelist_check(resp.data.email);

          items.loginflag(true);
          $uibModalInstance.dismiss();

        } else if (content === "successful_not_activated") {
          $uibModalInstance.dismiss();
          items.signupsuccess($ctrl.user.email);
        }
        else if (content === "failed_wrong_password") {
          $ctrl.failed_user_not_exists = true;
          $ctrl.failed_wrong_password = false;
          $ctrl.passwordErrorCheck = true;
        } else if (content === "failed_user_not_exists") {
          $ctrl.failed_user_not_exists = false;
          $ctrl.failed_wrong_password = true;
          $ctrl.passwordErrorCheck = true;
        }
        else if (content === "failed_invalid_email_format") {
          $ctrl.failed_user_not_exists = true;
          $ctrl.failed_wrong_password = true;
          $ctrl.passwordErrorCheck = false;
        }

      })

    },
      function (error) { // optional
        // console.log("error", error);
        
      if (error.data.content === "failed_user_not_exists") {
        $ctrl.failed_user_not_exists = false;
        $ctrl.failed_wrong_password = true;
        $ctrl.passwordErrorCheck = true;
      }else if(error.data.content === "failed_wrong_password") {
        $ctrl.failed_user_not_exists = true;
        $ctrl.failed_wrong_password = false;
        $ctrl.passwordErrorCheck = true;
      } else if (error.data.content === "failed_invalid_email_format") {
        $ctrl.failed_user_not_exists = true;
        $ctrl.failed_wrong_password = true;
        $ctrl.passwordErrorCheck = false;
      }

      
      });

  }

  /*  new api pseudo code

    var req = {
      method: 'POST',
      // url: apiAddress + '/loginJson',
      url: apiAddress + '/oauth/token',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                 'Authorization': "Basic "+ btoa("temco-client:temco-secret") },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        username: $ctrl.user.email,
        password: $ctrl.user.password,
        grant_type: "password"
      }
    }

    $http(req
    ).then(function (resp) {
      let content = resp.data.content;
      if (content === "successful") {
        document.cookie = "temcoToken=" + resp.data.sessionToken;
        items.whitelist_check(resp.data.email);

        items.loginflag(true);
        $uibModalInstance.dismiss();

        var req2 = {
          method: 'POST',
          url: apiAddress + '/userInfo',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                     'Authorization': "Bearer "+ resp.data.access_token },
          transformRequest: function (obj) {
            var str = [];
            for (var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");

          },
          data: {
            email: $ctrl.user.email,
          }
        };
        $http(req2).then(function (resp) {
          let content = resp.data.content;
          if (content === "successful") {
            document.cookie = "temcoEmail=" + resp.data.email;
            document.cookie = "temcoHash=" + resp.data.hash;
          }
          else if (content === "successful_not_activated") {
            $uibModalInstance.dismiss();
            items.signupsuccess($ctrl.user.email);
          }
        });

      }
      else if (content === "failed_wrong_password") {
        $ctrl.failed_user_not_exists = true;
        $ctrl.failed_wrong_password = false;
        $ctrl.passwordErrorCheck = true;
      } else if (content === "failed_user_not_exists") {
        $ctrl.failed_user_not_exists = false;
        $ctrl.failed_wrong_password = true;
        $ctrl.passwordErrorCheck = true;
      }
      else if (content === "failed_invalid_email_format") {
        $ctrl.failed_user_not_exists = true;
        $ctrl.failed_wrong_password = true;
        $ctrl.passwordErrorCheck = false;
      }
    },
      function (error) { // optional
        console.log("error", error);
      });

  }
   */


  $ctrl.signup = function () {
    // 패스워드 정규식 
    // 영문 대소문자 1개 이상 6자리이상 20자리 이하 
    var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // 이메일 정규식
    var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if ($ctrl.user === undefined) {
      $ctrl.passwordErrorCheck = false;
      $ctrl.emailRequireCheck = false;
      return;
    }
    else {
      if ($ctrl.user.email === undefined) {
        $ctrl.emailRequireCheck = false;
        return;
      } else {
        $ctrl.emailRequireCheck = true;
        $ctrl.emailErrorCheck = false;
        // emailReg.test($ctrl.user.email) ? $ctrl.emailErrorCheck = true : $ctrl.emailErrorCheck = false;
        if (emailReg.test($ctrl.user.email))
          $ctrl.emailErrorCheck = true;
        else {
          $ctrl.emailErrorCheck = false;
          return;
        }
      }

      passwordReg.test($ctrl.user.password) ? $ctrl.passwordErrorCheck = true : $ctrl.passwordErrorCheck = false;
      if ($ctrl.passwordErrorCheck) {
        if ($ctrl.user.passwordCheck !== undefined) {
          $ctrl.user.password === $ctrl.user.passwordCheck ? $ctrl.passwordEqualCheck = true : $ctrl.passwordEqualCheck = false;
          if ($ctrl.passwordEqualCheck === false)
            return;
        } else {
          $ctrl.passwordEqualCheck = false;
          return;
        }
      } else {
        return;
      }

      // console.log($ctrl.user.termCheck);
      // console.log($ctrl.user.privacyCheck);

      if ($ctrl.user.termCheck === true && $ctrl.user.privacyCheck === true) {
        $ctrl.termCheck = true;
        $ctrl.privacyCheck = true;
      } else if ($ctrl.user.termCheck === true && $ctrl.user.privacyCheck != true) {
        $ctrl.termCheck = true;
        $ctrl.privacyCheck = false;
        return;
      } else if ($ctrl.user.termCheck != true && $ctrl.user.privacyCheck === true) {
        $ctrl.termCheck = false;
        $ctrl.privacyCheck = true;
        return;
      } else {
        $ctrl.termCheck = false;
        $ctrl.privacyCheck = false;
        return;
      }
    }

    if ($ctrl.user.subCheck !== true) {
      $ctrl.user.subCheck = false;
    }

    var req = {
      method: 'POST',
      url: apiAddress + '/registerUserJson',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        email: $ctrl.user.email,
        password: $ctrl.user.password,
        subscription: $ctrl.user.subCheck
      }
    }



    $http(req).then(function (resp) {
      if (resp.data.content === "successful") {

        $uibModalInstance.dismiss();
        items.signupsuccess($ctrl.user.email);

      } else if (resp.data.content === "failed_user_exists") {
        $ctrl.failed_user_exists = false;
      } else if (resp.data.content === "failed_invalid_password_format") {
        $ctrl.passwordErrorCheck = false;
      }
    },
      function (error) {
        console.log("error", error);
      });

  }

  $ctrl.passwordreset = function () {

    var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    $ctrl.failed_user_not_exists = true;
    if ($ctrl.user === undefined) {
      $ctrl.emailRequireCheck = false;
      return;
    }
    else {
      if ($ctrl.user.email === undefined) {
        $ctrl.emailRequireCheck = false;
        return;
      } else {
        $ctrl.emailRequireCheck = true;
        $ctrl.emailErrorCheck = false;

        if (emailReg.test($ctrl.user.email))
          $ctrl.emailErrorCheck = true;
        else {
          $ctrl.emailErrorCheck = false;
          return;
        }
      }
    }

    var req = {
      method: 'POST',
      url: apiAddress + '/resetPasswordJson',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        email: $ctrl.user.email
      }
    }

    $http(req).then(function (resp) {
      if (resp.data.content === "successful") {
        $uibModalInstance.dismiss();
        $ctrl.resetpassword();
      } else if (resp.data.content === "failed_user_not_exists") {

        $ctrl.failed_user_not_exists = false;
      }
    },
      function (error) { // optional
        console.log("error", error);
      });
  }

  $ctrl.updatePassword = function () {

    var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    // 패스워드 정규식 
    // 영문 대소문자 1개 이상 6자리이상 20자리 이하 
    var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if ($ctrl.user === undefined) {
      $ctrl.passwordErrorCheck0 = false;
      $ctrl.passwordErrorCheck = false;
      $ctrl.emailRequireCheck = false;
      return;
    }
    else {
      if ($ctrl.user.email === undefined) {
        $ctrl.emailRequireCheck = false;
        return;
      } else {
        $ctrl.emailRequireCheck = true;
        $ctrl.emailErrorCheck = false;
        emailReg.test($ctrl.user.email) ? $ctrl.emailErrorCheck = true : $ctrl.emailErrorCheck = false;
        if (emailReg.test($ctrl.user.email))
          $ctrl.emailErrorCheck = true;
        else {
          $ctrl.emailErrorCheck = false;
          return;
        }
      }

      passwordReg.test($ctrl.user.password) ? $ctrl.passwordErrorCheck = true : $ctrl.passwordErrorCheck = false;
      passwordReg.test($ctrl.user.oldpassword) ? $ctrl.passwordErrorCheck0 = true : $ctrl.passwordErrorCheck0 = false;

      if ($ctrl.user.email === undefined) {
        $ctrl.emailRequireCheck = false;
        return;
      } else {
        $ctrl.emailRequireCheck = true;
        $ctrl.emailErrorCheck = false;
        emailReg.test($ctrl.user.email) ? $ctrl.emailErrorCheck = true : $ctrl.emailErrorCheck = false;
      }

      if (!$ctrl.passwordErrorCheck0) {
        return;
      }

      if ($ctrl.passwordErrorCheck) {
        if ($ctrl.user.passwordCheck !== undefined) {
          $ctrl.user.password === $ctrl.user.passwordCheck ? $ctrl.passwordEqualCheck = true : $ctrl.passwordEqualCheck = false;
          if ($ctrl.passwordEqualCheck === false)
            return;
        } else {
          $ctrl.passwordEqualCheck = false;
          return;
        }
      } else {
        return;
      }
    }

    var req = {
      method: 'POST',
      url: apiAddress + '/updatePasswordJson',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        email: $ctrl.user.email,
        oldPassword: $ctrl.user.oldpassword,
        newPassword: $ctrl.user.password
      }
    }

    $http(req).then(function (resp) {
      if (resp.data.content === "successful") {
        $uibModalInstance.dismiss();
        items.changesuccess();
      } else if (resp.data.content === "failed_user_exists") {
        $ctrl.failed_user_exists = false;
      } else if (resp.data.content === "failed_user_wrong_old_password") {
        $ctrl.passwordErrorCheck1 = false;
      } else if (resp.data.content === "failed_invalid_password_format") {
        $ctrl.passwordErrorCheck = false;
      }
    },
      function (error) { // optional
        console.log("error", error);
      });


  }

  $ctrl.unsubscribe = function () {
    var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


    if ($ctrl.user === undefined) {
      $ctrl.emailRequireCheck = false;
      return;
    } else {
      if ($ctrl.user.email === undefined) {
        $ctrl.emailRequireCheck = false;
        return;
      } else {
        $ctrl.emailRequireCheck = true;
        $ctrl.emailErrorCheck = false;
        emailReg.test($ctrl.user.email) ? $ctrl.emailErrorCheck = true : $ctrl.emailErrorCheck = false;
        if (emailReg.test($ctrl.user.email))
          $ctrl.emailErrorCheck = true;
        else {
          $ctrl.emailErrorCheck = false;
          return;
        }
      }
    }

    var req = {
      method: 'POST',
      url: apiAddress + '/unsubscribe',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        email: $ctrl.user.email
      }
    }

    $http(req).then(function (resp) {

      if (resp.data.content === "unsubscription_sucessful") {
        $uibModalInstance.dismiss();
        window.location.href = "/#/";
        items.unsubsribe_success();
      }

    },
      function (error) { // optional
        console.log("error", error);
      });


  }

  $ctrl.resendemail = function () {

    // console.log($scope.email);
    var req = {
      method: 'POST',
      url: apiAddress + '/resendActivation',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        email: $scope.email
      }
    }

    $http(req).then(function (resp) {
      if (resp.data.content === "successful") {
        $scope.resendemail = "Check your email";
      }
    },
      function (error) { // optional
        console.log("error", error);
      });
  }

  $ctrl.toLogin = function () {
    $uibModalInstance.dismiss();
    items.openlogin();
  }

  $ctrl.toSignup = function () {
    $uibModalInstance.dismiss();
    items.signup();
  }

  $ctrl.forgetPassword = function () {
    $uibModalInstance.dismiss();
    items.forgetpassword();
  }

  $ctrl.verifysignup = function () {
    $uibModalInstance.dismiss();
    window.location.href = "/#/";
    items.openlogin();


  }

  $ctrl.resetpassword = function () {
    $uibModalInstance.dismiss();
    items.resetpassword();
  }

  $ctrl.dismissModal = function () {
    $uibModalInstance.dismiss();
    window.location.href = "/#/";
  }

  $ctrl.logout = function () {

    $uibModalInstance.dismiss();

  }

  $ctrl.kycAlert = function () {
    $uibModalInstance.dismiss();
    $scope.$parent.logout();
  }

});

app.component('modalComponent', {
  templateUrl: 'login.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({ $value: $ctrl.selected.item });

    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({ $value: 'cancel' });
    };
  }
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}