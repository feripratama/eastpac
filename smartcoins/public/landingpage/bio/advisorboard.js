angular.module('advisorboard', [])
  .directive('advisorboard', function($http,$timeout){
    return{
      scope:{
      },
      templateUrl: 'bio/advisorboard.tpl.html?ver=1224',
      link: function($scope) {
        
        let isShow = [];

        $scope.open_advisor = function (index) {

          let countTrue = 0;
          for (j = 0; j < 3; j++) {
            if (isShow[j] === true) {
              countTrue++;
            }
          }

          if (countTrue === 0) {
            isShow[index] = !isShow[index];
            countTrue = 0;

            if(window.innerWidth >= 600){
            $("html, body").animate({scrollTop : $('.advisor-board-detail-wrapper').offset().top-72 },500);
            }else{
              $("html, body").animate({scrollTop : $('.advisor-board-detail-wrapper-mobile').offset().top-72 },500);
            }

          }
          else {
            for (i = 0; i < 4; i++) {
              if (i != index) {
                isShow[i] = false;
              } else {
                if (isShow[index] === true) {
                  isShow[index] = !isShow[index];
                  
                } else {
                  $timeout(function () {
                    isShow[index] = !isShow[index];
                  }, 500);
                  if(window.innerWidth >= 600){
                    $("html, body").animate({scrollTop : $('.advisor-board-detail-wrapper').offset().top-72 });
                  }else{
                    $("html, body").animate({scrollTop : $('.advisor-board-detail-wrapper-mobile').offset().top-72 });
                  }
                }
              }
            }
          }

          
        }

        $scope.close_board = function () {
          for(i = 0 ; i< isShow.length ; i++){
            isShow[i] = false;
          }
          $("html, body").animate({scrollTop : $('.advisor-board-wrapper').offset().top -250},500);
        }

        $scope.isShow = function (index) {

          let display = isShow[index] ? 'block' : 'block';
          let max_height = isShow[index] ? '53vw' : '0';

          if(window.innerWidth > 1650){
            max_height = isShow[index] ? '670px' : '0';
          }
          else if(window.innerWidth <600){
            max_height = isShow[index] ? 'auto' : '0';
          }

          return {
            "display": display,
            "height": max_height
          }
        }
        $scope.language = 'en';
        
        function advisorHttp()
        {
          $http.get('bio/data/advisor_board'+'_' + $scope.language + '.json')
            .then(function(resp){
              $scope.advisors = resp.data;
          });
        }

        advisorHttp();

        $scope.$on("language", function (event,message){

          $scope.language = message;
          advisorHttp();
          
        });
       
      }
      
  };
});