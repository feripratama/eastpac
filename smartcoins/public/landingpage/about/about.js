angular.module('about', ['advisorboard'])
  .directive('about', function ($timeout) {
    return {
      scope: {
      },
      templateUrl: 'landingpage/about/about.tpl.html?ver=1224',
      link: function ($scope) {

        var scene2 = new ScrollMagic.Scene({
          triggerElement: "#parallax2",
          offset: -200
        }).setVelocity("#parallax2 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var scene3 = new ScrollMagic.Scene({
          triggerElement: "#parallax3",
          offset: -50
        }).setVelocity("#parallax3 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop3 = new ScrollMagic.Scene({
          triggerElement: "#parallax3",
          triggerHook: 1,
          offset: 75
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene4 = new ScrollMagic.Scene({
          triggerElement: "#parallax4",
          offset: -250
        }).setVelocity("#parallax4 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop4 = new ScrollMagic.Scene({
          triggerElement: "#parallax4",
          triggerHook: 1,
          offset: -325
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene14 = new ScrollMagic.Scene({
          triggerElement: "#parallax14",
          offset: -300
        }).setVelocity("#parallax14 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

          var scene17 = new ScrollMagic.Scene({
            triggerElement: "#parallax17",
            offset: -500
          }).setVelocity("#parallax17 .content", { opacity: 1.0 }, { duration: 400 })
            //.addIndicators()
            .addTo($scope.$parent.controller);
  
            var sceneTop17 = new ScrollMagic.Scene({
              triggerElement: "#parallax17",
              triggerHook: 1,
              offset: -325
            })//.addIndicators()
              .addTo($scope.$parent.controller);
    
        var topTransform = new ScrollMagic.Scene({
          triggerElement: "#parallax2",
          triggerHook: 1,
          offset: 350
        }).setClassToggle("#go_to_top", "show")
          //.addIndicators()
          .addTo($scope.$parent.controller);

        $scope.$parent.navLoaded.push('about');

        scene3.on("enter", function (event) {
          $scope.$parent.activeScene = 'dark';
          // $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax3");
        });

        scene3.on("leave", function (event) {
          $scope.$parent.activeScene = 'default';
          // $scope.$parent.$apply();
        });

        sceneTop4.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          // $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax4");
        });

        sceneTop4.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          // $scope.$parent.$apply();
        });

        sceneTop17.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          // $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax17");
        });

        sceneTop17.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          // $scope.$parent.$apply();
        });


        scene2.on("enter", function (event) {
          $scope.$parent.activeNav = 'about';
          $scope.$parent.$apply();
          $scope.$parent.aniDiv("#parallax2");

        });

        scene2.on("leave", function (event) {
          $scope.$parent.activeNav = 'home';
          $scope.$parent.$apply();
        });

        scene14.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax14");
        });

        scene14.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$parent.$apply();
        });

        scene17.on("enter", function (event) {
          // $scope.$parent.$apply();
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.aniDiv("#parallax17");
        });

        scene17.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$parent.$apply();
        });
        

      }
    };
  });