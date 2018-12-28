angular.module('header', [])
  .directive('header', function($interval, $http){
    return{
      scope:{
      },
      templateUrl: 'landingpage/header/header.blade.php',
      link: function($scope) {
        var scene1 = new ScrollMagic.Scene({
          triggerElement: "#parallax1",
          offset:60
        }).setVelocity("#parallax1 .content", {opacity: 1.0,}, {duration: 400})
        //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
          .addTo($scope.$parent.controller);

       // navbar color 바뀌는 위치를 정하기 위해서 설정

        // if(window.innerWidth < 1024)
        // {
        //   var headerTransform = new ScrollMagic.Scene({
        //     triggerElement: "#headerTransform",
        //     offset:400
        //   }).setClassToggle(".navbar", "navbar-color")
        //     .addTo($scope.$parent.controller);
        // }
        // else if(window.innerWidth < 450)
        // {
        //   var headerTransform = new ScrollMagic.Scene({
        //     triggerElement: "#headerTransform",
        //     offset:350
        //   }).setClassToggle(".navbar", "navbar-color")
        //     .addTo($scope.$parent.controller);
        // }
        // else{
        //   var headerTransform = new ScrollMagic.Scene({
        //     triggerElement: "#headerTransform",
        //     offset:500
        //   }).setClassToggle(".navbar", "navbar-color")
        //     .addTo($scope.$parent.controller);
        // }
        
        var textList;
        
        // var textListEn = [{
        //     item : "Product"
        //   },
        //   {
        //     item : "Process"
        //   },
        //   {
        //     item : "Data"
        //   },
        //   {
        //     item : "Value"
        //   }
        // ];

        var textListEn = [{
          item : "Bitcoin Network"
        },
        {
          item : "RSK"
        }
      ];

        var textListKr = [{
          item : "Product"
        },
        {
          item : "Process"
        },
        {
          item : "Data"
        },
        {
          item : "Value"
        }
      ];

        textList = textListEn;
        $scope.index = textList[0].item;

        let textListIndex =1;

        $interval(function() {

          $scope.fadein = {
            "width":"auto",
            "display":"inline-block",
            "text-align":"center",
            "-webkit-animation": "fadein 3s infinite",
            "-moz-animation": "fadein 3s infinite",
            "animation": "fadein 3s infinite"
          }

          $scope.index = textList[textListIndex].item;
          textListIndex++;

          if(textListIndex==2){
            textListIndex=0;
          }
          
        }, 3000);

        
        window.onresize = function(event) {
        
          if(languageFlag === "en"){
            $scope.en = {
              "display" : "block",
              "animation" : "none",
            }

            $scope.kr = {
              "display" : "none"
            }
          }else if(languageFlag === "kr"){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "block"
            }
          }
          
          if(window.innerWidth<1024){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "none"
            }
          }

        };


        $scope.kr = {
          "display" : "none"
        }

        var languageFlag = "en";

        $scope.$on("language", function (event,message){

          languageFlag = message;
          
          if(message === "en"){
            $scope.en = {
              "display" : "block",
              "animation" : "none",
            }

            $scope.kr = {
              "display" : "none"
            }
          }else if(message === "kr"){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "block"
            }
          }
          
          if(window.innerWidth<1024){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "none"
            }
          }
          
          
        });

        $scope.tokyc = function(kyc_status){
          
          // var temcoToken = document.cookie.replace(/(?:(?:^|.*;\s*)temcoToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          if(kyc_status === "approved" || kyc_status === "승인") {
            $scope.$parent.$ctrl.kyc_status(kyc_status);
          } else if(kyc_status === "pending" || kyc_status === "진행중") {
            $scope.$parent.$ctrl.kyc_status(kyc_status);
          }
          else if(temcoEmail != "") {
            location.href = "/#/kyc";
          }else {
            $scope.$parent.$ctrl.kycAlert();
          }

          
        };

        // if(window.innerWidth < 450){
        //   $scope.partners = [
        //     {
        //       "pic" : "img/header/partner-kip0@2x.png",
        //       "url" : "http://www.kipvc.com/main.html",
        //       "style" : {
        //         'text-align':'left'
        //       }
        //     },
        //     {
        //       "pic" : "img/header/partner-kip@2x.png",
        //       "url" : "http://www.kipvc.com/main.html",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-rsk@2x.png",
        //       "url" : "https://www.rsk.co/",
        //       "style" : {
        //         'display':'inline-block'
        //       }
        //     },
        //     {
        //       "pic" : "img/header/partner-tldr@2x.png",
        //       "url" : "https://www.tldr.capital",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-blockchaini@2x.png",
        //       "url" : "https://www.blockchaini.io",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-deblock@2x.png",
        //       "url" : "https://www.deblock.co.kr/",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-blackhorse@2x.png",
        //       "url" : "https://blackhorsegroup.io/"
        //     },
        //     {
        //       "pic" : "img/header/partner-b4h@2x.png",
        //       "url" : "http://www.b4h.world/",
        //       "style" : {
        //         'text-align':'right'
        //       }
        //     }
        //   ];
        // }else{
        //   $scope.partners = [
        //     {
        //       "pic" : "img/header/partner-kip0@2x.png",
        //       "url" : "http://www.kipvc.com/main.html",
        //       "style" : {
        //         'text-align':'left'
        //       }
        //     },
        //     {
        //       "pic" : "img/header/partner-kip@2x.png",
        //       "url" : "http://www.kipvc.com/main.html",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-rsk@2x.png",
        //       "url" : "https://www.rsk.co/",
        //       "style" : {
        //         'display':'none'
        //       }
        //     },
        //     {
        //       "pic" : "img/header/partner-tldr@2x.png",
        //       "url" : "https://www.tldr.capital",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-blockchaini@2x.png",
        //       "url" : "https://www.blockchaini.io",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-deblock@2x.png",
        //       "url" : "https://www.deblock.co.kr/",
        //       "height" : "90"
        //     },
        //     {
        //       "pic" : "img/header/partner-blackhorse@2x.png",
        //       "url" : "https://blackhorsegroup.io/"
        //     },
        //     {
        //       "pic" : "img/header/partner-b4h@2x.png",
        //       "url" : "http://www.b4h.world/",
        //       "style" : {
        //         'text-align':'right'
        //       }
        //     }
        //   ];
        // }
        

        // $scope.press = [
        //   {
        //     "pic" : "img/header/press-marketwatch@2x.png",
        //     "url" : "https://www.marketwatch.com/press-release/temco-recruits-gabriel-kurman-as-social-impact-advisor-2018-08-14",
        //     "height" : "79"
        //   },
        //   {
        //     "pic" : "img/header/press-business@2x.png",
        //     "url" : "https://www.bizjournals.com/washington/prnewswire/press_releases/Washington/2018/08/14/HK77523?ana=prnews",
        //     "height" : "79"
        //   },
        //   {
        //     "pic" : "img/header/press-herald@2x.png",
        //     "url" : "http://markets.financialcontent.com/bostonherald/news/read/36783023http://markets.financialcontent.com/bostonherald/news/read/36783023",
        //     "height" : "79"
        //   },
        //   {
        //     "pic" : "img/header/press-bittsburgh@2x.png",
        //     "url" : "http://markets.post-gazette.com/postgazette/news/read/36783023",
        //     "height" : "79"
        //   }
        // ];

        $scope.press = [
          {
            "pic" : "img/header/forbes@2x.png",
            "url" : "https://www.forbes.com/sites/geraldfenech/2018/12/18/the-supply-chain-revolution-on-the-blockchain/#7c23e6c44054"
          },
          {
            "pic" : "img/header/coindest@2x.png",
            "url" : "https://www.coindesk.com/south-koreas-largest-venture-firm-backs-first-blockchain-startup/"
          },
          {
            "pic" : "img/header/korea-economy@2x.png",
            "url" : "http://news.hankyung.com/edge/article?aid=201810025080j"
          }
        ];

        $scope.press2 = [
          {
            "pic" : "img/header/trackico.png",
            "url" : "https://www.trackico.io/ico/temco/"
          },
          {
            "pic" : "img/header/icobench.png",
            "url" : "https://icobench.com/ico/temco"
          }
        ];

        $scope.kipimg = "../img/header/kip-header1.png";
        $scope.kiplink = "http://www.kipvc.co.kr/tfvc/index.jsp";

        $scope.subsciption_btn = "SUBMIT";
        $scope.subscribe_email_error = true;
        
        if(window.innerWidth < 768){
          var innerHeight = window.innerHeight;
          $scope.innerHeight = {"height" : innerHeight};
        }

        if(window.innerHeight < 560) {
          $scope.verticalCenter = {"height" : "70%"};
        }

        angular.element(window).bind('resize', function() {

          // 태블릿 모바일 사이즈에서 물리버튼 및 safari에 대응하기 위해 innerheight 값으로 height 고정
          if(window.innerWidth < 768){
            var innerHeight = window.innerHeight;
            $scope.innerHeight = {"height" : innerHeight};
          }else{
            $scope.innerHeight = {"height" : "100vh"};
          }

          // 너무 작은 height 값에 대응하여 % 바꿈으로써 위치 조정
          if(window.innerHeight < 560) {
            $scope.verticalCenter = {"height" : "70%"};
          }else{
            $scope.verticalCenter = {"height" : ""};
          }
        });

        
        
        $scope.subscribe = function () {

          var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

          if(emailReg.test($scope.subscribe_email)) {
            $scope.subscribe_email_error = true;
          }else if($scope.subscribe_email === '' || $scope.subscribe_email === undefined){
            $scope.subscribe_email_error = true;
            return;
          }else {
            $scope.subscribe_email_error = false;
            return;
          }

          var req = {
            method: 'POST',
            url: $scope.$parent.apiAddress+'/subscribeEmail',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
              var str = [];
              for (var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
            },
            data: {
              email: $scope.subscribe_email
            }
          }
        
          $http(req
          ).then(function (resp) {
            let content = resp.data.content;
           
            if (content === "subscription_sucessful") {
              $scope.subsciption_btn = "Success";
              $scope.subscribe_email = "";
              $scope.subscribe_email_error = true;
              $scope.subscribe_email_exist_error = true;
            }else if(content === "subscription_failed_already_subscribed")
            {
              $scope.subscribe_email_exist_error = false;
            }else if(content === "subscription_failed_invalid_email"){
              $scope.subscribe_email_error = false;
            }

          },
            function (error) { // optional
              console.log("error", error);
            });

        }
  
        $scope.kyc_title = "Participate in KYC";
        
        $scope.change = function() {
          if($scope.subscribe_email != ''){
            $scope.subsciption_btn = "SUBMIT";
          }
        }

        $scope.language = 'en';

        $scope.$on("language", function (event,message){
          $scope.language = message;
          change_language();
        });
        
        function whitelist() {
          // 로그인 상태일 때 kyc 상태체크
          var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          if(temcoEmail){
            $scope.$parent.$ctrl.whitelist_check(temcoEmail);
          }
        }
        

        function change_language()
        {
          if($scope.language === 'en'){
            $scope.btn_text = "Join Telegram";

            // $scope.icon_change = {
            //   "background-image": "url('../img/icon-telegram@2x.png')",
            //   "font-weight" : "900"
            // };

            $scope.icon_change_en = {
              "display" : "inline-block"
            };

            $scope.icon_change_kr = {
              "display" : "none"
            };

            $scope.open_btn = function(){ 
              window.open('https://t.me/TEMCOLABS');
            }

            $scope.kyc_title = "Participate in KYC";

            $scope.kipimg = "../img/header/kip-header1.png";
            $scope.kiplink = "http://www.kipvc.co.kr/tfvc/index.jsp";
            $scope.kyc_link = "https://medium.com/temcolabs/register-for-temcos-kyc-b7be009bd1b7";
            $scope.btnId = "telegram-header-btn";
            
            whitelist();
          }else if($scope.language === 'kr'){
            $scope.btn_text = "채팅방 입장하기";  
            
            $scope.icon_change_en = {
              "display" : "none"
            };

            $scope.icon_change_kr = {
              "display" : "inline-block"
            };

            $scope.open_btn = function(){ 
              window.open('https://open.kakao.com/o/gkG9IoK');
            }

            $scope.kyc_title = "KYC 참여방법";

            $scope.kipimg = "../img/header/kip-header1-kr.png";
            $scope.kiplink = "http://www.kipvc.co.kr/tfvc/index.jsp";
            $scope.kyc_link = "https://brunch.co.kr/@temcolabs/48";
            $scope.btnId = "kakao-header-btn";

            whitelist();
          }
        }
        
        $scope.btnId = "telegram-header-btn";

        change_language();

      }
    };
  });