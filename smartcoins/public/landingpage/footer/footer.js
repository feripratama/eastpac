angular.module('footer', [])
  .directive('footer', function(){
    return{
      scope:{
      },
      templateUrl: 'landingpage/footer/footer.tpl.html?ver=1224',
      link: function($scope) {

        $scope.kakaoClick = function(){
          alert("카카오톡 비밀번호는 0801 입니다.");
          window.open(
            'https://open.kakao.com/o/gkG9IoK',
            '_blank'
          );
        };

        // $scope.privacy = "https://docsend.com/view/bzphmqh";

        // $scope.language = 'en';

        // $scope.$on("language", function (event, message) {
        //   $scope.language = message;
        //   change_language();
        // });

        // function change_language() {
        //   if ($scope.language === 'en') {
        //     $scope.privacy = "https://docsend.com/view/bzphmqh";
        //   }
        //   else if ($scope.language === 'kr') {
        //     $scope.privacy = "https://docsend.com/view/b95y3ng";
        //   }
        // }
      }
    };
  });
//To support image [object-fit: contain] for cross browsing;
angular.element(document).ready(function () {
    objectFitImages();
});