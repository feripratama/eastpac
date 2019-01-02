angular.module('team', [])
  .directive('team', function ($http) {
    return {
      scope: {
          data:'@'
      },
      templateUrl: 'landingpage/team/team.tpl.html?ver=1224',
      link: function ($scope) {
        $scope.language = 'en';

        function advisorHttp()
        {
        $http.get('bio/data/' + $scope.data  + '_' + $scope.language + '.json')
          .then(function(resp){
            $scope.firstName = resp.data.firstName.toUpperCase();
            $scope.lastName = resp.data.lastName.toUpperCase();
            $scope.position = resp.data.position;
            $scope.img = resp.data.img;
            $scope.linkedInUrl = resp.data.linkedInUrl;            
            $scope.isTeam = resp.data.isTeam;            
            $scope.bios = resp.data.bio;
            $scope.company = resp.data.company;
          });
        }

        advisorHttp();

        $scope.$on("language", function (event,message){

          $scope.language = message;
          advisorHttp();
          
        });

          var opacityIndex = true;

          $scope.portraitClick = function(){
        
            opacityIndex = !opacityIndex;
            if(opacityIndex){
              $scope.opacity = 	"transition: 1s ease; opacity: 1;"; 
            }
            
           
          }
          
        $scope.advisors = [
          'graham_friedman'
        ];

        $scope.teamMembers = [
         'graham_friedman',
          'alex_yamashita',
          'adrian_lai',
          'brian_tk_lee'
        ];

        var scene11 = new ScrollMagic.Scene({
          triggerElement: "#parallax11",
          offset: -200
        }).setVelocity("#parallax11 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop11 = new ScrollMagic.Scene({
          triggerElement: "#parallax11",
          triggerHook: 1,
          offset: -200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene15 = new ScrollMagic.Scene({
          triggerElement: "#parallax15",
          offset: -300
        }).setVelocity("#parallax15 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);
        
        var scene16 = new ScrollMagic.Scene({
          triggerElement: "#parallax16",
          offset: -300
        }).setVelocity("#parallax16 .content", { opacity: 1.0 }, { duration: 400 })
          .addTo($scope.$parent.controller);

        var sceneTop16 = new ScrollMagic.Scene({
          triggerElement: "#parallax16",
          triggerHook: 1,
          offset: -200
        }).addTo($scope.$parent.controller);


        $scope.$parent.navLoaded.push('advisors');
        $scope.$parent.navLoaded.push('team');

        sceneTop11.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          // $scope.$parent.$apply();
        });

        sceneTop11.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          // $scope.$parent.$apply();
        });

        scene11.on("enter", function (event) {
          $scope.$parent.activeNav = 'team';
          // $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax11");
        });

        scene11.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          // $scope.$parent.$apply();
        });

        scene15.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax14");
        });

        scene15.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          // $scope.$parent.$apply();
        });

        scene16.on("enter", function (event) {
          $scope.$parent.activeNav = 'advisors';
          // $scope.$parent.$apply();
        });

        scene16.on("leave", function (event) {
          $scope.$parent.activeNav = 'advisors';
          // $scope.$parent.$apply();
        });
          

      }
    };
  });