var app = angular.module('crowdsale', [])
  .directive('crowdsale', function ($interval, $uibModal, $uibModalStack, $document, $http) {
    return {
      scope: {
      },
      templateUrl: 'landingpage/crowdsale/crowdsale.tpl.html?ver=1224',
      link: function ($scope) {

        var scene1 = new ScrollMagic.Scene({
          triggerElement: "#parallax0",
          offset: 60
        }).setVelocity("#parallax0 .content", { opacity: 1.0, }, { duration: 400 })
          .addTo($scope.$parent.controller);

        /*countdown*/
        var seconds = document.getElementById('seconds');
        var minutes = document.getElementById('minutes');
        var hours = document.getElementById('hours');
        var days = document.getElementById('days');

        var od = new Odometer({
          minIntegerLen: 2,
          el: seconds,
          value: 00,
          format: 'dd'
        });

        var od1 = new Odometer({
          minIntegerLen: 2,
          el: minutes,
          value: 01,
        });

        var od2 = new Odometer({
          minIntegerLen: 2,
          el: hours,
          value: 01,
          format: 'dd'
        });

        var od3 = new Odometer({
          el: days,
          value: 01,
        });

        $scope.prog_value = 0;
        var countDownDate;

        // sale flag

        // BEFORE_PRE_SALE - JOIN SALE버튼 none, headertext
        // PRE_SALE
        // PRE_SALE_COMPLETE
        // BEFORE_MAIN_SALE
        // MAIN_SALE
        // MAIN_SALE_COMPLETE
        // $scope.sale_start_text = "PRE SALE COUNTDOWN!";

        $scope.sale_status = "";

        $scope.hardcap = 0.9;

        $http.get('https://temco.io/getCrowdSaleInfo')
          .then(function (resp) {
            var data = resp.data;

            $scope.prog_value = data.totalFund.toFixed(2);
            $scope.sale_status = data.type;
            
            if ($scope.prog_value >= $scope.hardcap) {
              $scope.prog_value = $scope.hardcap;
              $scope.sale_status = "MAIN_SALE_COMPLETE";
            }

            $scope.raised = function () {
              if (window.innerWidth <= 450) {
                if ($scope.prog_value < 0.48) {
                  return { "padding-right": 52 + '%' };
                } else {
                  return { "padding-right": 100 - ($scope.prog_value / $scope.hardcap * 100) + '%' };
                }
              }

              if ($scope.prog_value < 0.23) {
                return { "padding-right": 77 + '%' };
              } else {
                return { "padding-right": 100 - ($scope.prog_value / $scope.hardcap * 100) + '%' };
              }
            }

            // test 용
            // $scope.sale_status = "MAIN_SALE";

            if ($scope.sale_status === "BEFORE_PRE_SALE") {
              countDownDate = moment(data.startTime).valueOf();
              $scope.sale_start_text = "PRE SALE COUNTDOWN!";
              $scope.sale_bonus = "CHECK BONUS 10%";
              $scope.crowd_sale_btn_status = {
                "display": "none"
              };
            } else if ($scope.sale_status === "PRE_SALE") {
              countDownDate = moment(data.endTime).valueOf();
              $scope.sale_start_text = "PRE SALE STARTED!";
              $scope.sale_bonus = "CURRENT BONUS 10%";
              $scope.crowd_sale_btn_status = {
                "display": "block"
              };
            } else if ($scope.sale_status === "PRE_SALE_COMPLETE") {
              countDownDate = moment(data.startTime).valueOf();
              $scope.sale_start_text = "PRE SALE COMPLETE!";
              $scope.sale_bonus = "READY FOR MAIN SALE";
              $scope.crowd_sale_btn_status = {
                "display": "none"
              };
            } else if ($scope.sale_status === "BEFORE_MAIN_SALE") {
              countDownDate = moment(data.startTime).valueOf();
              $scope.sale_start_text = "MAIN SALE COUNTDOWN!";
              $scope.crowd_sale_btn_status = {
                "display": "none"
              };
            } else if ($scope.sale_status === "MAIN_SALE") {
              countDownDate = moment(data.endTime).valueOf();
              $scope.sale_start_text = "MAIN SALE STARTED!";
              $scope.crowd_sale_btn_status = {
                "display": "block"
              };
            } else if ($scope.sale_status === "MAIN_SALE_COMPLETE") {
              countDownDate = 0;
              $scope.sale_start_text = "MAIN SALE COMPLETE!";
              $scope.crowd_sale_btn_status = {
                "display": "none"
              };
            }

          });

        $interval(function () {

          var now = moment().valueOf();

          var distance = countDownDate - now;

          if (countDownDate === 0) {
            distance = 0;
          } else if (distance < 0) {
            distance = 0;
          }

          if (distance === 0) {
            $scope.countdown_status = { "display": "none" };
            $scope.countdown_finish = { "display": "block" };
            $scope.raised_ing = { "display": "none" };
            $scope.raised_finish = { "display": "block" };
          } else {
            $scope.countdown_status = { "display": "flex" };
            $scope.countdown_finish = { "display": "none" };
            $scope.raised_ing = { "display": "block" };
            $scope.raised_finish = { "display": "none" };
          }

          // console.log(distance);

          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          od.update(seconds);
          od1.update(minutes);
          od2.update(hours);
          od3.update(days);
        }, 1000);

        $scope.language = 'en';

        $scope.$on("language", function (event, message) {
          $scope.language = message;
          change_language();
        });

        // telegram, kakao button
        $scope.crowdsale_btn_en = {
          "display": "inline-block"
        }

        $scope.crowdsale_btn_kr = {
          "display": "none"
        }

        $scope.press = [
          {
            "pic": "../img/crowdsale/logo/forbes.png",
            "url": "https://www.forbes.com/sites/geraldfenech/2018/12/18/the-supply-chain-revolution-on-the-blockchain/#7c23e6c44054"
          },
          {
            "pic": "../img/crowdsale/logo/coindesk.png",
            "url": "https://www.coindesk.com/south-koreas-largest-venture-firm-backs-first-blockchain-startup"
          }
        ];

        // $scope.rrc_addr_link = "https://medium.com/temcolabs/how-to-create-a-rrc-20-wallet-from-mycrypto-8d5adb5a99b2";

        function whitelist() {
          // 로그인 상태일 때 kyc 상태체크
          var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          if (temcoEmail) {
            $scope.$parent.$ctrl.whitelist_check(temcoEmail);
          }
        }

        function change_language() {
          if ($scope.language === 'en') {
            $scope.kyc_link = "https://medium.com/temcolabs/register-for-temcos-kyc-b7be009bd1b7";
            $scope.crowdsale_btn_en = {
              "display": "inline-block"
            }

            $scope.crowdsale_btn_kr = {
              "display": "none"
            }
            $scope.open_btn = function () {
              window.open('https://t.me/TEMCOLABS');
            }

            $scope.press = [
              {
                "pic": "img/crowdsale/logo/forbes.png",
                "url": "https://www.forbes.com/sites/geraldfenech/2018/12/18/the-supply-chain-revolution-on-the-blockchain/#7c23e6c44054"
              },
              {
                "pic": "img/crowdsale/logo/coindesk.png",
                "url": "https://www.coindesk.com/south-koreas-largest-venture-firm-backs-first-blockchain-startup"
              }
            ];

            whitelist();

          } else if ($scope.language === 'kr') {
            $scope.kyc_link = "https://brunch.co.kr/@temcolabs/48";
            $scope.crowdsale_btn_en = {
              "display": "none"
            }

            $scope.crowdsale_btn_kr = {
              "display": "inline-block"
            }

            $scope.press = [
              {
                "pic": "img/crowdsale/logo/hankyung.png",
                "url": "http://news.hankyung.com/article/201810025080j"
              },
              {
                "pic": "img/crowdsale/logo/herald.png",
                "url": "http://news.heraldcorp.com/view.php?ud=20181107000442"
              }
            ];

            whitelist();

          }
        }

        change_language();

        $scope.tokyc = function (kyc_status) {
          var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          if (kyc_status === "approved" || kyc_status === "승인") {
            $scope.$parent.$ctrl.kyc_status(kyc_status);
          } else if (kyc_status === "pending" || kyc_status === "진행중") {
            $scope.$parent.$ctrl.kyc_status(kyc_status);
          }
          else if (temcoEmail != "") {
            location.href = "/#/kyc";
          } else {
            $scope.$parent.$ctrl.kycAlert();
          }
        };

        // $scope.press = [
        //   {
        //     "pic": "img/header/coindest@2x.png",
        //     "url": "https://www.coindesk.com/south-koreas-largest-venture-firm-backs-first-blockchain-startup/"
        //   },
        //   {
        //     "pic": "img/header/thecointelegraph@2x.png",
        //     "url": "https://cointelegraph.com/press-releases/temco-secures-investment-from-no-1-korean-venture-capital-korea-investment-partners"
        //   }
        // ];

        // $scope.press2 = [
        //   {
        //     "pic": "img/header/trackico.png",
        //     "url": "https://www.trackico.io/ico/temco/"
        //   },
        //   {
        //     "pic": "img/header/icobench.png",
        //     "url": "https://icobench.com/ico/temco"
        //   }
        // ];



        $scope.press2 = [
          {
            "pic": "img/crowdsale/logo/trackico.png",
            "url": "https://www.trackico.io/ico/temco/"
          },
          {
            "pic": "img/crowdsale/logo/icobench.png",
            "url": "https://icobench.com/ico/temco"
          }
        ];

        // subscribe 기능
        $scope.subscribe = function () {
          var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

          if (emailReg.test($scope.subscribe_email)) {
            $scope.subscribe_email_error = true;
          } else if ($scope.subscribe_email === '' || $scope.subscribe_email === undefined) {
            $scope.subscribe_email_error = true;
            return;
          } else {
            $scope.subscribe_email_error = false;
            return;
          }

          var req = {
            method: 'POST',
            url: $scope.$parent.apiAddress + '/subscribeEmail',
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
              $scope.input_text = "Success";
              $scope.subscribe_email = "";
              $scope.subscribe_email_error = true;
              $scope.subscribe_email_exist_error = true;
            } else if (content === "subscription_failed_already_subscribed") {
              $scope.subscribe_email_exist_error = false;
            } else if (content === "subscription_failed_invalid_email") {
              $scope.subscribe_email_error = false;
            }

          },
            function (error) { // optional
              console.log("error", error);
            });

        }
        // telegram text 및 input text scope

        $scope.social_btn_text = "Join Telegram";
        $scope.input_text = "SUBMIT";

        if (window.innerWidth <= 768 && window.innerWidth >= 451) {
          $scope.social_btn_text = "Join Telegram";
          $scope.input_text = "";
          $scope.crowd_sale_bottom = "img/crowdsale/crowdsale-bottom.png";
        }
        else if (window.innerWidth <= 450) {
          $scope.social_btn_text = "Telegram";
          $scope.input_text = "";
          $scope.crowd_sale_bottom = "img/crowdsale/crowdsale-bottom-mobile.png";
        }
        else {
          $scope.crowd_sale_bottom = "img/crowdsale/crowdsale-bottom.png";
        }

        // 사이즈에 따라서 바뀌는 코드

        angular.element(window).bind('resize', function () {
          if (window.innerWidth <= 768 && window.innerWidth >= 451) {
            $scope.social_btn_text = "Join Telegram";
            $scope.input_text = "";
          }
          else if (window.innerWidth <= 450) {
            $scope.crowd_sale_bottom = "img/crowdsale/crowdsale-bottom-mobile.png";
            $scope.social_btn_text = "Telegram";
            $scope.input_text = "";
          }
          else {
            $scope.crowd_sale_bottom = "img/crowdsale/crowdsale-bottom.png";
            $scope.social_btn_text = "Join Telegram";
            $scope.input_text = "SUBMIT";
          }
        });



        $scope.whitepaperItem = {
          "display": "none"
        }

        $scope.fastfactItem = {
          "display": "none"
        }


        // white paper and fastfact hover code

        $scope.whitepaperSelect = function (flag) {
          if (flag === "whitepaper") {
            if ($scope.whitepaperItem.display === "block") {
              $scope.whitepaperItem = {
                "display": "none"
              }
            } else {
              $scope.whitepaperItem = {
                "display": "block"
              }
            }
          }
          else if (flag === "fastfact") {
            if ($scope.fastfactItem.display === "block") {
              $scope.fastfactItem = {
                "display": "none"
              }
            } else {
              $scope.fastfactItem = {
                "display": "block"
              }
            }
          } else if (flag === "") {
            $scope.whitepaperItem = {
              "display": "none"
            }
            $scope.fastfactItem = {
              "display": "none"
            }
          }
        }

        // modal

        $scope.mainsale_open = function () {


          var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          var kyc_status = $scope.$parent.kyc_status;

          if ($scope.sale_status === "PRE_SALE" || $scope.sale_status === "MAIN_SALE") {
            if (temcoEmail) {
              if (kyc_status === "approved" || kyc_status === "승인") {

                $uibModal.open({
                  animation: $scope.animationsEnabled,
                  ariaLabelledBy: 'modal-title',
                  ariaDescribedBy: 'modal-body',
                  templateUrl: '../crowdsale/modal/mainsale-start.tpl.html',
                  controller: 'CrowdsaleCtrl',
                  backdrop: 'static',
                  resolve: {
                    items: function () {
                      return $scope;
                    }
                  }
                });
              } else {
                $uibModal.open({
                  animation: $scope.animationsEnabled,
                  ariaLabelledBy: 'modal-title',
                  ariaDescribedBy: 'modal-body',
                  templateUrl: '../crowdsale/modal/alert-modal2.tpl.html',
                  controller: 'CrowdsaleCtrl',
                  controllerAs: '$scope',
                  scope: $scope,
                  resolve: {
                    items: function () {
                      return $scope;
                    }
                  }
                });
              }

            } else if (!temcoEmail) {
              $uibModal.open({
                animation: $scope.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '../crowdsale/modal/alert-modal.tpl.html',
                controller: 'CrowdsaleCtrl',
                controllerAs: '$scope',
                scope: $scope,
                resolve: {
                  items: function () {
                    return $scope;
                  }
                }
              });
            }
          } else {
            $uibModal.open({
              animation: $scope.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '../crowdsale/modal/alert-modal1.tpl.html',
              controller: 'CrowdsaleCtrl',
              controllerAs: '$scope',
              scope: $scope,
              resolve: {
                items: function () {
                  return $scope;
                }
              }
            });
          }
        }

        $scope.choose_crypto = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/mainsale-choose-crypto.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.btc_1 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/btc-modal-1.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.btc_2 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/btc-modal-2.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.btc_3 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/btc-modal-3.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.eth_1 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/eth-modal-1.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.eth_2 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/eth-modal-2.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.eth_3 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/eth-modal-3.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.rrc_2 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/rrc-modal-2.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.rrc_3 = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/rrc-modal-3.tpl.html',
            controller: 'CrowdsaleCtrl',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope;
              }
            }
          });
        }

        $scope.dashboard = function () {

          $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../crowdsale/modal/mainsale-dashboard.tpl.html',
            controller: 'CrowdsaleCtrl',
            // backdrop: 'static',
            resolve: {
              items: function () {
                $scope.clickedModal = 'dashboard';
                return $scope;
              }
            }
          });
        }

        // $scope.temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        // $scope.getUserEthAmount = function () {
        //   console.log($scope.temcoEmail);
        //   $http.get($scope.$parent.apiAddress + '/getUserEthAmount?email=' + $scope.temcoEmail)
        //     .then(function (resp) {
        //       console.log(resp);
        //       $scope.user_eth_amount = resp.data;

        //     });
        // }

        // $scope.getUserBtcAmount = function () {
        //   $http.get($scope.$parent.apiAddress + '/getUserBtcAmount?email=' + $scope.temcoEmail)
        //     .then(function (resp) {
        //       console.log(resp);
        //       $scope.user_btc_amount = resp.data;

        //     });
        // }

        // $scope.getUserRbtcAmount = function () {
        //   $http.get($scope.$parent.apiAddress + '/getUserRbtcAmount?email=' + $scope.temcoEmail)
        //     .then(function (resp) {
        //       console.log(resp);
        //       $scope.user_rrc_amount = resp.data;

        //     });
        // }

        // $scope.getUserRbtcAddress = function () {
        //   $http.get($scope.$parent.apiAddress + '/getUserRbtcAddress?email=' + $scope.temcoEmail)
        //     .then(function (resp) {
        //       console.log(resp);
        //       $scope.user_rrc_addr = resp.data;

        //     });
        // }

        // $scope.$on('getmypage', listenMypage);

        // function listenMypage(event, status) {
        //   if(status != undefined) { 
        //     $scope.temcoEmail = status;
        //   }

        //   if($scope.temcoEmail != ''){
        //     // $scope.getUserEthAmount();
        //     // $scope.getUserBtcAmount();
        //     // $scope.getUserRbtcAmount();
        //     // $scope.getUserRbtcAddress();
        //   }
        // }

        // listenMypage();

        $scope.toCheckDashboardData = function () {
          $scope.dashboard();
        }

        $scope.$on('todashboard', listenStatus);

        function listenStatus(event, status) {
          $scope.toCheckDashboardData();
        }

        $scope.rrc_addr = "";
        $scope.btc_addr = "";
        $scope.eth_addr = "";
        $scope.btc_temco_rrc_addr = "";
        $scope.eth_temco_rrc_addr = "";
        $scope.rrc_temco_rrc_addr = "";

        $scope.btc_amount = '';
        $scope.eth_amount = '';
        $scope.rrc_amount = '';
        $scope.temco_amount = 0;

        $scope.btc_rate = 0.9;
        $scope.eth_rate = 0.2;
        $scope.rrc_rate = 0.5;

      }

    }

  }).controller('CrowdsaleCtrl', function ($scope, $uibModalInstance, items, $http) {
    // 참여 RRC 지갑
    $scope.rrc_addr = items.rrc_addr;

    // 참여 비트코인, 이더리움 주소
    $scope.btc_addr = items.btc_addr;
    $scope.eth_addr = items.eth_addr;

    // 템코 지갑주소
    $scope.btc_temco_rrc_addr = items.btc_temco_rrc_addr;
    $scope.eth_temco_rrc_addr = items.eth_temco_rrc_addr;
    $scope.rrc_temco_rrc_addr = items.rrc_temco_rrc_addr;

    $scope.btc_amount = items.btc_amount;
    $scope.eth_amount = items.eth_amount;
    $scope.rrc_amount = items.rrc_amount;
    $scope.temco_amount = items.temco_amount;

    $scope.btc_rate = items.btc_rate;
    $scope.eth_rate = items.eth_rate;
    $scope.rrc_rate = items.rrc_rate;

    $scope.eth_addr_link_en = { "display": "block" };
    $scope.eth_addr_link_kr = { "display": "none" };

    $scope.user_btc_amount;
    $scope.user_eth_amount;
    $scope.user_rrc_amount;
    $scope.user_rrc_addr;

    $scope.user = {
      termCheck: false
    }

    // $scope.user_btc_amount = items.user_btc_amount;
    // $scope.user_eth_amount = items.user_eth_amount;
    // $scope.user_rrc_amount = items.user_rrc_amount;
    // $scope.user_rrc_addr = items.user_rrc_addr;

    $scope.placeholder_rrc_2 = "“Please enter “Personal RRC-20 wallet address”";
    if (items.language === 'en') {
      $scope.placeholder_rrc_2 = "“Please enter “Personal RRC-20 wallet address”";
      $scope.rrc_addr_link = "https://medium.com/temcolabs/how-to-create-a-rrc-20-wallet-from-mycrypto-8d5adb5a99b2";
      $scope.btc_addr_link = "https://medium.com/temcolabs/how-to-create-a-btc-wallet-from-btc-com-ce3f345ac747"
      $scope.eth_addr_link_en = { "display": "block" };
      $scope.eth_addr_link_kr = { "display": "none" };
    } else if (items.language === 'kr') {
      $scope.placeholder_rrc_2 = "“개인 RRC-20 지갑 주소”를 입력해주세요”";
      $scope.rrc_addr_link = "https://brunch.co.kr/@temcolabs/83";
      $scope.btc_addr_link = "https://brunch.co.kr/@temcolabs/87";
      $scope.eth_addr_link_en = { "display": "none" };
      $scope.eth_addr_link_kr = { "display": "block" };
    }

    $scope.get_currency_usd = function (currency) {
      $http.get(items.$parent.apiAddress + '/getCurrencyUsdPrice?currency=' + currency)
        .then(function (resp) {

          var currency_usd = resp.data.result;
          let temco_usd = 0.006333;
          if (currency === 'BTC') {
            items.btc_rate = currency_usd / temco_usd;
          } else if (currency === 'ETH') {
            items.eth_rate = currency_usd / temco_usd;
          } else if (currency === 'RBTC') {
            items.rrc_rate = currency_usd / temco_usd;
          }

        });
    }



    // ETH RBTC
    $scope.update_rrc_addr = function (currency) {
      $http.get(items.$parent.apiAddress + '/getCrowdSaleAddress?currency=' + currency)
        .then(function (resp) {
          var address = resp.data.result;
          if (currency === 'BTC') {
            items.btc_temco_rrc_addr = address;
          } else if (currency === 'ETH') {
            items.eth_temco_rrc_addr = address;
          } else if (currency === 'RBTC') {
            items.rrc_temco_rrc_addr = address;
          }

        });
    }

    // BTC
    $scope.update_btc_addr = function () {
      var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      $http.get(items.$parent.apiAddress + '/assignBtcAddress?email=' + temcoEmail + '&type=' + items.sale_status)
        .then(function (resp) {
          var address = resp.data.result;
          items.btc_temco_rrc_addr = address;
          items.btc_3();
        });
    }

    $scope.dismiss = function () {
      $uibModalInstance.dismiss();

      items.rrc_addr = '';

      // 참여 비트코인, 이더리움 주소
      items.btc_addr = '';
      items.eth_addr = '';

      // 템코 지갑주소
      items.btc_temco_rrc_addr = '';
      items.eth_temco_rrc_addr = '';
      items.rrc_temco_rrc_addr = '';
    };

    $scope.dismisslogout = function () {
      $scope.dismiss();
      $scope.$parent.$parent.logout();
    }

    $scope.to_choose_crypto_from_start = function () {
      if ($scope.user.termCheck === true) {
        $scope.dismiss();
        items.choose_crypto();
      } else {
        // console.log($scope.termCheck);
        $scope.termCheck = false;
        // console.log($scope.termCheck);
      }
    };

    $scope.to_choose_crypto = function () {
      $scope.dismiss();
      items.choose_crypto();
    };


    // 경고 메시지에 대한 $scope 값 init
    $scope.validRRCAddress = '';
    $scope.validETHAddress = '';
    $scope.validBTCAddress = '';

    $scope.to_btc_1 = function () {
      $uibModalInstance.dismiss();
      items.btc_1();
    };

    $scope.to_btc_2 = function () {

      items.rrc_addr = $scope.rrc_addr;

      if (validate_rrc($scope.rrc_addr)) {
        $uibModalInstance.dismiss();
        items.btc_2();
      }
      else {
        $scope.validRRCAddress = false;
      }
    };

    $scope.to_btc_3 = function () {

      items.btc_addr = $scope.btc_addr;
      $scope.get_currency_usd('BTC');

      if (validate_btc($scope.btc_addr)) {
        $scope.updateWhiteList('BTC', $scope.btc_addr, $scope.rrc_addr);

        // if($scope.updateWhiteList('BTC', $scope.btc_addr, $scope.rrc_addr)){
        //   $scope.update_btc_addr();
        // }

        // $scope.updateWhiteList('BTC', $scope.btc_addr, $scope.rrc_addr);
        // $uibModalInstance.dismiss();
        // items.btc_3();
      }
      else {
        $scope.validBTCAddress = false;
      }

    };

    $scope.to_eth_1 = function () {
      $uibModalInstance.dismiss();
      items.eth_1();
    };

    $scope.to_eth_2 = function () {
      // items.rrc_addr = $scope.rrc_addr;

      // $uibModalInstance.dismiss();
      // items.eth_2();

      items.rrc_addr = $scope.rrc_addr;

      if (validate_rrc($scope.rrc_addr)) {
        $uibModalInstance.dismiss();
        items.eth_2();
      }
      else {
        $scope.validRRCAddress = false;
      }
    };


    $scope.to_eth_3 = function () {

      items.eth_addr = $scope.eth_addr;
      $scope.get_currency_usd('ETH');

      if (validate_eth($scope.eth_addr)) {
        $scope.updateWhiteList('ETH', $scope.eth_addr, $scope.rrc_addr);
        // $uibModalInstance.dismiss();
        // items.eth_3();
      }
      else {
        $scope.validETHAddress = false;
      }

    };

    $scope.to_rrc_2 = function () {
      items.rrc_addr = $scope.rrc_addr;

      $uibModalInstance.dismiss();
      items.rrc_2();
    };

    $scope.to_rrc_3 = function () {

      items.rrc_addr = $scope.rrc_addr;
      $scope.get_currency_usd('RBTC');

      if (validate_rrc($scope.rrc_addr)) {
        $scope.updateWhiteList('RBTC', $scope.rrc_addr, $scope.rrc_addr);
        // $uibModalInstance.dismiss();
        // items.rrc_3();
      }
      else {
        $scope.validRRCAddress = false;
      }


    };

    // var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    // $scope.getUserEthAmount = function () {
    //   console.log(temcoEmail);
    //   $http.get(items.$parent.apiAddress + '/getUserEthAmount?email=' + temcoEmail)
    //     .then(function (resp) {
    //       console.log("test async");
    //       items.user_eth_amount = resp.data;
    //     });
    // }
    // $scope.getUserEthAmount();
    // $scope.getUserBtcAmount = function () {
    //   $http.get(items.$parent.apiAddress + '/getUserBtcAmount?email=' + temcoEmail)
    //     .then(function (resp) {
    //       console.log(resp);
    //       items.user_btc_amount = resp.data;
    //     });
    // }

    // $scope.getUserRbtcAmount = function () {
    //   $http.get(items.$parent.apiAddress + '/getUserRbtcAmount?email=' + temcoEmail)
    //     .then(function (resp) {
    //       console.log(resp);
    //       items.user_rrc_amount = resp.data;
    //     });
    // }

    // $scope.getUserRbtcAddress = function () {
    //   $http.get(items.$parent.apiAddress + '/getUserRbtcAddress?email=' + temcoEmail)
    //     .then(function (resp) {
    //       console.log(resp);
    //       items.user_rrc_addr = resp.data;
    //     });
    // }
    if (items.clickedModal === 'dashboard') {
      var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      $scope.getUserEthAmount = function () {
        $http.get(items.$parent.apiAddress + '/getUserEthAmount?email=' + temcoEmail)
          .then(function (resp) {
            // console.log(resp);
            $scope.user_eth_amount = resp.data;
          },
            function (error) {
              console.log(error);
            });
      }

      $scope.getUserBtcAmount = function () {
        $http.get(items.$parent.apiAddress + '/getUserBtcAmount?email=' + temcoEmail)
          .then(function (resp) {
            // console.log(resp);
            $scope.user_btc_amount = resp.data;
          },
            function (error) {
              console.log(error);
            });
      }

      $scope.getUserRbtcAmount = function () {
        $http.get(items.$parent.apiAddress + '/getUserRbtcAmount?email=' + temcoEmail)
          .then(function (resp) {
            // console.log(resp);
            $scope.user_rrc_amount = resp.data;
          },
            function (error) {
              console.log(error);
            });
      }

      $scope.getUserRbtcAddress = function () {
        $http.get(items.$parent.apiAddress + '/getUserRbtcAddress?email=' + temcoEmail)
          .then(function (resp) {
            // console.log(resp);
            $scope.user_rrc_addr = resp.data;
          },
            function (error) {
              console.log(error);
            });
      }

      $scope.getUserEthAmount();
      $scope.getUserBtcAmount();
      $scope.getUserRbtcAmount();
      $scope.getUserRbtcAddress();
    }

    $scope.toCheckDashboardData = function () {
      $scope.getUserEthAmount();

    }

    $scope.to_dashboard = function () {
      $uibModalInstance.dismiss();
      items.toCheckDashboardData();
    };

    $scope.updateWhiteList = function (currency, userAddress, rrcAddress) {

      var temcoEmail = document.cookie.replace(/(?:(?:^|.*;\s*)temcoEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      // console.log("email :", temcoEmail);
      // console.log("currency : ", currency);
      // console.log("user address", userAddress);
      // console.log("rrc address", rrcAddress);
      var req = {
        method: 'POST',
        url: apiAddress + '/updateWhiteList',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        transformRequest: function (obj) {
          var str = [];
          for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: {
          emailAddress: temcoEmail,
          currency: currency,
          userAddress: userAddress,
          rrc20Address: rrcAddress
        }
      }

      $http(req).then(function (resp) {
        if (resp.data.result === 'SUCCESSFUL') {
          if (currency === 'BTC') {
            $scope.update_btc_addr();
            $uibModalInstance.dismiss();
          } else if (currency === 'ETH') {
            $uibModalInstance.dismiss();
            items.eth_3();
          } else if (currency === 'RBTC') {
            $uibModalInstance.dismiss();
            items.rrc_3();
          }
        }
      },
        function (error) { // optional
          console.log("error", error);
        });
    }

    // modal function

    $scope.calc_temco = function (currency) {
      $scope.temco_amount = 0;

      if (currency === "btc") {
        if ($scope.btc_amount < 0) {
          $scope.temco_amount = 0;
        } else {
          $scope.temco_amount = Math.floor($scope.btc_amount * items.btc_rate);
        }
      } else if (currency === "eth") {
        if ($scope.eth_amount < 0) {
          $scope.temco_amount = 0;
        } else {
          $scope.temco_amount = Math.floor($scope.eth_amount * items.eth_rate);
        }
      } else if (currency === "rrc") {
        if ($scope.rrc_amount < 0) {
          $scope.temco_amount = 0;
        } else {
          $scope.temco_amount = Math.floor($scope.rrc_amount * items.rrc_rate);
        }
      }
    }

    $scope.check_rrc_address = function () {
      if (validate_rrc($scope.rrc_addr)) {
        $scope.validRRCAddress = true;
      }
      else {
        $scope.validRRCAddress = false;
      }
    };

    $scope.check_btc_address = function () {
      if (validate_btc($scope.btc_addr))
        $scope.validBTCAddress = true;
      else
        $scope.validBTCAddress = false;
    };

    $scope.check_eth_address = function () {
      if (validate_eth($scope.eth_addr)) {
        $scope.validETHAddress = true;
      }
      else {
        $scope.validETHAddress = false;
      }
    };

    function validate_btc(btc_addr) {
      var valid = WAValidator.validate(btc_addr, 'bitcoin');
      // var valid = WAValidator.validate(btc_addr, 'bitcoin', 'testnet');

      return valid;
    }

    function validate_eth(eth_addr) {
      var valid = WAValidator.validate(eth_addr, 'ethereum');
      // var valid = WAValidator.validate(eth_addr, 'ethereum','testnet');

      return valid;
    }

    function validate_rrc(rrc_addr) {
      var valid = isValidChecksumAddress(rrc_addr, 30);
      // var valid = isValidChecksumAddress(rrc_addr, 31);

      return valid;
    }

    $scope.copy_address = function (altcoin) {

      if (altcoin === "btc") {
        var copyText = document.getElementById("btc_rrc_addr");
        copyText.select();
        document.execCommand("copy");
      } else if (altcoin === "eth") {
        var copyText = document.getElementById("eth_rrc_addr");
        copyText.select();
        document.execCommand("copy");
      } else if (altcoin === "rrc") {
        var copyText = document.getElementById("rrc_rrc_addr");
        copyText.select();
        document.execCommand("copy");
      }
    }
  });