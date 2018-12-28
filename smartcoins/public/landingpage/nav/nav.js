angular.module('nav', [])
  .directive('nav', function () {
    return {
      scope: {
      },
      templateUrl: 'landingpage/nav/nav.tpl.html?ver=1224',
      link: function ($scope) {

        //navbar
        $scope.$parent.navBars = [
          {
            title: 'advisors'
          },
          {
            title: 'about'
          },
          {
            title: 'whitepaper'
          },
          {
            title: 'technology'
            ,
            subtitle1: 'test1',
            subtitle2: 'test2'
          },
          {
            title: 'token'
          },
          {
            title: 'team'
          },
          {
            title: 'community',
            community: [
              'facebook',
              'twitter',
              'facebook',
              'twitter',
              'telegram',
              'telegram chat',
              'kakaotalk',
              'steemit',
              'github'
            ]
          },
          {
            title: 'usecase'
          }// ,
          // {
          //   title:'faq'
          // }
        ];

        $scope.click_en = {
          "color": "#ffffff"
        }

        $scope.click_kr = {
          "color": "#ffffff",
          "opacity": "0.8"
        }

        // $scope.click_en = {
        //   "color": "#ffffff",
        //   "font-weight": "900"

        // },console.log("click_en");

        // $scope.click_en = function (flag) {console.log("click_en")};

        // $scope.click_kr = {
        //   "color": "#ffffff",
        //   "font-weight": "500",
        //   "opacity": "0.5"
        // }

        $scope.$on("language", function (event, message) {

          if (message === "en") {
            $scope.click_en = {
              "color": "#ffffff"
            }

            $scope.click_kr = {
              "color": "#ffffff",
              "opacity": "0.8"
            }
          } else if (message === "kr") {
            $scope.click_kr = {
              "color": "#ffffff"
            }

            $scope.click_en = {
              "color": "#ffffff",
              "opacity": "0.8"
            }
          }
        });
        // $scope.navbarClick = function() {
        //   if(document.getElementsByClassName('navbar-toggler')[0].getAttribute("aria-expanded") === "false"){
        //     $('.navbar-color').css('opacity','1');
        //   }else{
        //     $('.navbar-color').css('opacity','0.9');
        //   }
        // }

        // $scope.hideNavbar = function() {
        //   let ariaIndex = document.getElementsByClassName('navbar-toggler')[0].getAttribute("aria-expanded");

        //   if(ariaIndex === "true"){
        //     $('.navbar-toggler').trigger('click');
        //   }
        // }
        var navbar_toggler = document.getElementsByClassName('navbar-toggler')[0].attributes['aria-expanded'];

        var isShow = [];

        $scope.checkValue = function () {
          if (navbar_toggler.value === 'false') {
            isShow[6] = false;
          }
        }

        $scope.openComunity = function (index, title) {
          if (title === "community")
            isShow[index] = !isShow[index];
        }

        $scope.isShow = function ($index) {
          if (window.innerWidth <= 1024) {
            var display = isShow[$index] ? 'block' : 'block';
            var max_height = isShow[$index] ? '270px' : '0px';
            return {
              "display": display,
              "height": max_height
            }
          } else {
            return {
              "display": 'none',
              "height": max_height,
              "transition": 'height 0s'
            }
          }
        }

        $scope.login = 'login';

        $scope.languageSelected = {
          availableOptions: [
            { id: "en", name: "ENG" },
            { id: "kr", name: "KOR" }
          ],
          selectedOption: { id: "en", name: "ENG" }
        };

        $scope.logoutModal = {
          "display": "none"
        }

        $scope.loginBtn = {
          "display": "block"
        }

        $scope.logoutBtn = {
          "display": "none"
        }

        $scope.selectedLanguage = {
          img: "landingpage/img/crowdsale/us-flag.png",
          country: "ENG"
        }

        $scope.languageChange = {
          "display": "none"
        }

        $scope.checkLanguage = function (flag) {
          if (flag === "open") {
            $scope.languageChange = {
              "display": "block",
              "position": "absolute"
            }
          } else {
            $scope.languageChange = {
              "display": "none"
            }
          }
          // if ($scope.languageChange.display === "block") {
          //   $scope.languageChange = {
          //     "display": "none"
          //   }
          // } else {
          //   $scope.languageChange = {
          //     "display": "block",
          //     "position": "absolute"
          //   }
          // }
        }

        $scope.selectLanguage = function (language) {

          $scope.languageChange = {
            "display": "none"
          }

          if (language === 'kr') {
            $scope.selectedLanguage = {
              img: "img/crowdsale/kor-flag.png",
              country: "KOR"
            }
          } else if (language === 'en') {
            $scope.selectedLanguage = {
              img: "landingpage/img/crowdsale/us-flag.png",
              country: "ENG"
            }
          }
        }

        $scope.$on("temcoEmail", function (event, message) {
          checkCondition();
        });

        $scope.checkLogout = function () {
          if ($scope.$parent.$ctrl.logintext != 'login') {

            if ($scope.logoutModal.display === "none") {
              $scope.logoutModal = {
                "display": "block"
              }

              checkCondition();
            } else if ($scope.logoutModal.display === "block") {
              $scope.logoutModal = {
                "display": "none"
              }

              checkCondition();
            }
          } else {
            $scope.logoutModal = {
              "display": "none"
            }

            checkCondition();
          }
        }

        $scope.$on('sendLogout', listenStatus);

        function listenStatus(event, status) {
          $scope.checkLogout();
        }


        function checkCondition() {
          if ($scope.$parent.$ctrl.logintext != 'login') {

            $scope.loginBtn = {
              "display": "none"
            }

            $scope.logoutBtn = {
              "display": "block"
            }

          } else {

            $scope.loginBtn = {
              "display": "block"
            }

            $scope.logoutBtn = {
              "display": "none"
            }
          }
        }

        checkCondition();

      }
    };
  });