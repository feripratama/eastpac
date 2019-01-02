angular.module('whitepaper', [])
  .directive('whitepaper', function () {
    return {
      scope: {
      },
      templateUrl: 'landingpage/whitepaper/whitepaper.tpl.html?ver=1224',
      link: function ($scope) {

        var scene5 = new ScrollMagic.Scene({
          triggerElement: "#parallax5",
          offset: -150
        }).setVelocity("#parallax5 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop5 = new ScrollMagic.Scene({
          triggerElement: "#parallax5",
          triggerHook: 1,
          offset: 750
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene13 = new ScrollMagic.Scene({
          triggerElement: "#parallax13",
          offset: -300
        }).setVelocity("#parallax13 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);



        $scope.$parent.navLoaded.push('whitepaper');

        scene5.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$apply();

          $scope.$parent.aniDiv("#parallax5");
        });

        scene5.on("leave", function (event) {
          $scope.$parent.activeNav = 'about';
          // $scope.$apply();
        });

        sceneTop5.on("enter", function (event) {
          $scope.$parent.activeScene = 'dark';
          // $scope.$parent.$apply();
        });

        sceneTop5.on("leave", function (event) {
          $scope.$parent.activeScene = 'default';
          // $scope.$parent.$apply();
        });

        scene13.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax13");
        });

        scene13.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$parent.$apply();
        });



        $scope.whitepaper_en = "https://docsend.com/view/eiawynp";
        $scope.whitepaper_kr = "https://docsend.com/view/49j5ngu";
        $scope.whitepaper_cn = "https://docsend.com/view/w4z5kep";
        $scope.fastfact_en = "https://docsend.com/view/p95jj2n";
        $scope.fastfact_kr = "https://docsend.com/view/di8vvj8";
        $scope.fastfact_cn = "https://docsend.com/view/52inw7r";
 
      }
    };
  });