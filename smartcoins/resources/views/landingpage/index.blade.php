<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>{{ App\SiteConfig::where('key', 'SITE_TITLE')->first()->value }}</title>
<link href="{{asset('landingpage/css/bootstrap.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/font-awesome')}}.min.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/slick.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/styles.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/responsive.css')}}" rel="stylesheet" type="text/css"/>
<style>


</style>
</head>
<body>
<div class="mainpage clearfix">

<!-- Header Start -->
@include('landingpage.nav')

<!-- Banner Start -->
<section class="banner clearfix"  id="particles-js">
<div class="container">
<div class="row">
<div class="col-sm-7">
  <h1>EASTERNSTAR ISO ENDING SOON</h1>
  <h2>900,000 TAKENS ALREADY  SOLDOUT !</h2>
  <h3>The next offer will start again at 21 : 30</h3>
  <div class="timerwrap clearfix">


  </div>
  </div>
</div>
</section>

<!-- Buy & Sell -->
<section class="buysellwrap clearfix">
<div class="container">
  <div class="row">
    <div class="col-md-6 col-sm-6">
      <h2>Total Coin Sold 622,000 VOC</h2>

       <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
          aria-valuemin="0" aria-valuemax="100" style="width:70%">
            70%
          </div>
        </div>
      </div>
 </div>
      <div class="von-form clearfix">
        <div class="von-left">
          <h4>You get in Bitcoins </h4>
          <input class="form-control" placeholder="0.00004023">
        </div>
        <div class="von-right">
          <select class="custom-select">
            <option>BTC</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<!-- Initial coin offering Start  -->
<section class="offercoinwrap clearfix">
<div class="container">
  <h2>Von ICO</h2>
  <h3>Initial coin offering</h3>
  <div class="row">
    <div class="col-md-4 col-sm-4 text-center">
      <div class="sale-heading">Pre Sale I</div>
      <div class="sale-price">600.000 VOC Price $0.65</div>
      <div class="sale-date">20 March 2018</div>
    </div>
    <div class="col-md-4 col-sm-4 text-center">
      <div class="sale-heading">Pre Sale 2</div>
      <div class="sale-price">600.000 VOC Price $0.65</div>
      <div class="sale-date">21 March 2018</div>
    </div>
    <div class="col-md-4 col-sm-4 text-center">
      <div class="sale-heading">Pre Sale 3</div>
      <div class="sale-price">600.000 VOC Price $0.65</div>
      <div class="sale-date">22 March 2018</div>
    </div>
  </div>
  <div class="coinoffer text-center">
    <center>
      <img src="{{asset('landingpage/images/coin-offering.png')}}" class="img-responsive" alt="Initial coin offering">
    </center>
  </div>
  <h4>Hurry up to get the best price!</h4>
  <div class="text-center">
    <button type="button" class="btn btn-primary">Create Account &amp; Buy Exacoins</button>
    <button type="button" class="white-btn">Whitepaper</button>
  </div>
</div>
</section>

<!-- Platform  -->
<section class="platformwrap clearfix">
<div class="container">
  <div class="row">
    <div class="col-md-4 col-sm-4">
      <div class="plat-indent clearfix">
        <p>
          <center>
            <img src="{{asset('landingpage/images/coin.png')}}" width="42" height="38" alt="Coin">
          </center>
        </p>
        <h3>20,000,000 </h3>
        <p>Total Coin Supply</p>
      </div>
    </div>
    <div class="col-md-4 col-sm-4">
      <div class="plat-indent clearfix">
        <p>
          <center>
            <img src="{{asset('landingpage/images/smile-icon')}}.png" width="42" height="38" alt="Smile">
          </center>
        </p>
        <h3>55,125</h3>
        <p> Happy customers</p>
      </div>
    </div>
    <div class="col-md-4 col-sm-4">
      <div class="plat-indent clearfix">
        <p>
          <center>
            <img src="{{asset('landingpage/images/offer-icon')}}.png" width="42" height="38" alt="offer">
          </center>
        </p>
        <h3>1,289</h3>
        <p>Trusted offers</p>
      </div>
    </div>
    <div class="col-md-12 col-sm-12 text-center">
      <div class="lendingwrap clearfix">
        <h2>EASTERNSTAR Lending Platform</h2>
        <p>EASTERNSTAR uses a binary concept based on the performance downline of the total lending value program </p>
        <p>
          <button type="button" class="btn btn-warning">REFFERAL</button>
        </p>
      </div>
    </div>
  </div>
</div>
</section>

<!-- Roadmap Start -->

<!-- Why Choose VANCOIN  -->
<section class="choosevancoinwrap clearfix">
<div class="container">
  <h2>Why Choose EASTERNSTAR </h2>
  <h3>Buy EASTERNSTAR instantly with over different ways to pay</h3>
  <div class="row">
    <div class="col-md-4 col-sm-6">
      <div class="box clearfix">
        <div class="why-icon"><img src="{{asset('landingpage/images/chat-icon.png')}}" alt="chat"></div>
        <h4>Experts Support</h4>
        <p>Support will answer your questions regarding bitcoins.</p>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="box clearfix">
        <div class="why-icon"><img src="{{asset('landingpage/images/lock-icon.png')}}" alt="chat"></div>
        <h4>Safe & Secure</h4>
        <p>Be sure in your account security and
          your funds safe.</p>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="box clearfix">
        <div class="why-icon"><img src="{{asset('landingpage/images/instant-icon.png')}}" alt="chat"></div>
        <h4>Instant Exchange</h4>
        <p>Instant Exchange allows you to send
          bitcoin and pay for it</p>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="box clearfix">
        <div class="why-icon"><img src="{{asset('landingpage/images/wallet-icon.png')}}" alt="chat"></div>
        <h4>Balance Wallet</h4>
        <p>Easy-to-use personal wallet will
          keep your bitcoins in safe.</p>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="box clearfix">
        <div class="why-icon"><img src="{{asset('landingpage/images/buy-icon.png')}}" alt="chat"></div>
        <h4>Recuring Buys</h4>
        <p>Recurring transaction feature allows
          you to schedule future</p>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="box clearfix">
        <div class="why-icon"><img src="{{asset('landingpage/images/market-icon.png')}}" alt="chat"></div>
        <h4>Margin Trading</h4>
        <p>Perfectly developed mobile apps
          will open new opportunities.</p>
      </div>
    </div>
  </div>
</div>
</section>

<!-- WALLET Start -->
<section class="freewalletwrap clearfix">
<div class="container text-center">
  <h2>GET FREE EASTERNSTAR BIT COIN WALLET</h2>
  <p>Buy Easternstar instantly with over different ways to pay</p>
  <p>
    <button type="button" class="btn btn-warning">Buy Von coins now</button>
  </p>
</div>
</section>

<!-- Technologies EasternStar Start -->
<section class="technologieswrap clearfix">
<div class="container">
<h2>Only the finest technologies are used in EasternStar</h2>

<ul>
 <li>
 <center><img src="{{asset('landingpage/images/coin-logo-1.jpg')}}" alt="Coin"></center>
 </li>
 <li>
 <center><img src="{{asset('landingpage/images/coin-logo-2.jpg')}}" alt="Coin"></center>
 </li>
 <li>
 <center><img src="{{asset('landingpage/images/coin-logo-3.jpg')}}" alt="Coin"></center>
 </li>
 <li>
 <center><img src="{{asset('landingpage/images/coin-logo-4.jpg')}}" alt="Coin"></center>
 </li>
 <li>
 <center><img src="{{asset('landingpage/images/coin-logo-5.jpg')}}" alt="Coin"></center>
 </li>
 <li>
 <center><img src="{{asset('landingpage/images/coin-logo-6.jpg')}}" alt="Coin"></center>
 </li>
 <li>
 <center><img src="{{asset('landingpage/images/coin-logo-7.jpg')}}" alt="Coin"></center>
 </li>


</ul>
</div>
</section>

<!-- Technologies Easternstar Start -->
<section class="ICOPricing clearfix">
<div class="container">
<h2>ICO Pricing and Conditions</h2>
<p>During our Initial Coin Offering, everyone is able to purchase the Lancer Token (LNC). Funds raised will be  used to build and execute the Easternstar-platform vision. </p>

<div class="row">

    <div class="col-md-6 col-sm-12 padded">
        <div class="panel panel-default wow zoomIn  animated" style="visibility: visible; animation-name: zoomIn;">
            <div class="panel-heading">

                <h3>Summary</h3>
            </div>
            <div class="panel-body">
                <table class="table icotxt text-left">
                    <tbody><tr>
                        <td class="text-left" style="border-top:none;"><strong>Token</strong></td>
                        <td style="border-top:none;">Lancer</td>
                    </tr>
                    <tr>
                        <td><strong>Symbol</strong></td>
                        <td>LNC</td>
                    </tr>

                    <tr>
                        <td><strong>Technology</strong></td>
                        <td>Ethereum</td>
                    </tr>
                        <tr>
                        <td style="padding-bottom: 50px;"><strong>Maximum Cap</strong></td>
                        <td>$10M</td>
                    </tr>
                    <tr style="margin-top:30px;">
                        <td style="border-top:none;"><strong><i class="fa fa-calendar-check-o margin-right"></i> Date</strong></td>
                        <td style="border-top:none;">January 16th - February 28th</td>
                    </tr>
                    <tr>
                        <td><strong><i class="fa fa-flag margin-right"></i> Goal</strong>
                        </td>
                        <td>$1M</td>
                    </tr>

                    <tr>
                        <td><strong><i class="fa fa-plus margin-right"></i> Benefits</strong></td>
                        <td>
                            <ul style="padding-left: 12px;">
                                <li> <p>Blocklancer’s fees are distributed among Tokenholders</p></li>
                                <li><p>LNC is a tradeable token</p></li>
                            </ul>

                            </td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    </div>

<div class="col-md-6 col-sm-12 padded">
<div class="panel panel-default wow zoomIn  animated" style="visibility: visible; animation-name: zoomIn;">
<div class="panel-heading">
    <h3>Spendings &amp; Distribution</h3>
</div>
<div class="panel-body">
    <div id="ico-spendings"></div>
    <hr style="margin: 0px;">
<div id="tokendistri"></div>
</div>

</div>

</div>


</div>
</div>

</section>

<!-- Media Partners -->
<section class="MediaPartners clearfix">
<div class="container">
<h2>Media Partners</h2>

<div class="row">
<div class="col-md-3 col-sm-6">
<center>
  <img src="{{asset('landingpage/images/media-logo-1.jpg')}}" class="img-responsive" alt="Media">
</center>
</div>
<div class="col-md-3 col-sm-6">
<center>
  <img src="{{asset('landingpage/images/media-logo-2.jpg')}}" class="img-responsive" alt="Media">
</center>
</div>
<div class="col-md-3 col-sm-6">
<center>
  <img src="{{asset('landingpage/images/media-logo-3.jpg')}}" class="img-responsive" alt="Media">
</center>
</div>
<div class="col-md-3 col-sm-6">
<center>
  <img src="{{asset('landingpage/images/media-logo-4.jpg')}}" class="img-responsive" alt="Media">
</center>
</div>


</div>


</div>
</section>

<!-- Footer Start -->
<footer>
<div class="container">
  <div class="row">
    <div class="col-md-3 col-sm-6 hidden-xs hidden-sm"></div>
    <div class="col-md-3 col-sm-4">
      <h2>quick links <i></i></h2>
      <ul>
        <li><a href="#">buy EXOcoins</a></li>
        <li><a href="#">sell EXOcoins</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Contact US</a></li>
      </ul>
    </div>
    <div class="col-md-3 col-sm-4">
      <h2>social media <i></i></h2>
      <ul>
        <li><a href="#"><span><i class="fa fa-facebook" aria-hidden="true"></i></span> Facebook</a></li>
        <li><a href="#"><span><i class="fa fa-twitter" aria-hidden="true"></i></span> Twitter</a></li>
        <li><a href="#"><span><i class="fa fa-linkedin" aria-hidden="true"></i></span> Youtube</a></li>
        <li><a href="#"><span><i class="fa fa-google-plus" aria-hidden="true"></i></span> google </a></li>
      </ul>
    </div>
    <div class="col-md-3 col-sm-4">
      <h2>newsletter <i></i></h2>
      <h3>SUBSCRIBE TO OUR NEWS</h3>
      <p>Lorem Ipsum is simply dummy text of the printing ndustry.</p>
    </div>
  </div>
</div>
<div class="copyright text-center">
  <div class="container">Copyright &copy; 2017 EasternStar.com. All rights reserved.</div>
</div>
</footer>

</div>
<script type="text/javascript" src="{{asset('landingpage/js/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/bootstrap.min.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/particles.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/app.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/slick.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/custom.js')}}"></script>
<script>
// Set the date we're counting down to
var countDownDate = new Date("March 1, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="timer"
document.getElementById("timer").innerHTML = "<li>" + days + "</li><li>" + hours + "</li><li>"
+ minutes + "</li><li>" + seconds + "</li>";

// If the count down is over, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
}
}, 1000);
</script>
</body>
</html>
