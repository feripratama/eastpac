<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>EasternStar</title>
<link href="{{asset('landingpage/css/bootstrap.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/font-awesome')}}.min.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/slick.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/styles.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/responsive.css')}}" rel="stylesheet" type="text/css"/>
<style> 
.platformwrap h4 {
    color: #5a5a5a;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
}
    
.platformwrap h3 {
    color: #fbfbfb;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
}

.offercoinwrap h4 { 
    font-size: 18px; 
    margin-bottom: 20px; 
}

.animatable {
  
  /* initially hide animatable objects */
  visibility: hidden;
  
  /* initially pause animatable objects their animations */
  -webkit-animation-play-state: paused;   
  -moz-animation-play-state: paused;     
  -ms-animation-play-state: paused;
  -o-animation-play-state: paused;   
  animation-play-state: paused; 
}

/* show objects being animated */
.animated {
  visibility: visible;
  
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
  
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;

  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
  -ms-animation-play-state: running;
  -o-animation-play-state: running;
  animation-play-state: running;
}
    
@-webkit-keyframes fadeInUp {
	0% {
		opacity: 0;
		-webkit-transform: translateY(20px);
	}	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
	}
}

@-moz-keyframes fadeInUp {
	0% {
		opacity: 0;
		-moz-transform: translateY(20px);
	}

	100% {
		opacity: 1;
		-moz-transform: translateY(0);
	}
}

@-o-keyframes fadeInUp {
	0% {
		opacity: 0;
		-o-transform: translateY(20px);
	}

	100% {
		opacity: 1;
		-o-transform: translateY(0);
	}
}

@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.animated.fadeInUp {
	-webkit-animation-name: fadeInUp;
	-moz-animation-name: fadeInUp;
	-o-animation-name: fadeInUp;
	animation-name: fadeInUp;
}
    
.team-name h5{
    margin-top: 20px;
    color: #c8d1da;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
}    

.team-role {
    color: #c8d1da;
    text-align: center;
    font-size: 12px;
}
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
    <div class="col-sm-16 text-center">
        <h1>ABOUT US</h1>
    </div>
  </div>
</div>
</section>



<!-- Initial coin offering Start  -->
<section class="offercoinwrap clearfix">
<div class="container">
  <h3>What is EasternStar?</h3>
  <div class="row">
    <div class="col-md-2 col-sm-2"></div>
    <div class="col-md-8 col-sm-8 text-justify" >
      <p style="margin-bottom: 10px; line-height: 1.6em">EasternStar is a community driven digital asset marketplace. We are a platform for users to trade digital assets and cryptocurrencies without many of the restrictions and complications of traditional exchanges. EasternStar has no market impact during trades, no trading pair restrictions, the ability to create private offers to remove listings from the public marketplace, and growing support for popular cryptocurrencies and digital assets. Join EasternStar today and be entered into our giveaways!</p>
    </div>
    
  </div>
</div>
</section>


<!-- Platform  -->
<section class="platformwrap clearfix">
<div class="container">
  <h3>Awesome Team</h3>
  <p style="text-align:center; color:white; margin-bottom:60px">Our people are our greatest asset and biggest differentiator.
They also believe in having a lot of fun along the way.</p>
 <div class="row">
      <div class="col-md-2 col-sm-4 col-xs-6"><!-- add col-md-offset-1 for 5 members -->
        <div class="team animatable fadeInUp">
          <div class="team-image">
            <a href="#">
              <img src="{{asset('landingpage/images/admin/team.png')}}" class="img-circle img-responsive">
            </a>
          </div><!-- /.team-image -->
          <div class="team-content">
            <div class="team-name"><h5>Herman Mach</h5></div>
            <div class="team-role">Software Developer</div>
            <div class="team-description"></div>
          </div><!-- /.team-content -->
        </div><!-- /.team -->
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="team animatable fadeInUp">
          <div class="team-image">
            <a href="#">
              <img src="{{asset('landingpage/images/admin/team.png')}}" class="img-circle img-responsive">
            </a>
          </div><!-- /.team-image -->
          <div class="team-content">
            <div class="team-name"><h5>Joyce Wagner</h5></div>
            <div class="team-role">Designer</div>
            <div class="team-description"></div>
          </div><!-- /.team-content -->
        </div><!-- /.team -->
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="team animatable fadeInUp">
          <div class="team-image">
            <a href="#">
              <img src="{{asset('landingpage/images/admin/team.png')}}" class="img-circle img-responsive">
            </a>
          </div><!-- /.team-image -->
          <div class="team-content">
            <div class="team-name"><h5>Donald Speth</h5></div>
            <div class="team-role">Account manager</div>
            <div class="team-description"></div>
          </div><!-- /.team-content -->
        </div><!-- /.team -->
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="team animatable fadeInUp">
          <div class="team-image">
            <a href="#">
              <img src="{{asset('landingpage/images/admin/team.png')}}" class="img-circle img-responsive">
            </a>
          </div><!-- /.team-image -->
          <div class="team-content">
            <div class="team-name"><h5>Frank McGuire</h5></div>
            <div class="team-role">Programmer</div>
            <div class="team-description"></div>
          </div><!-- /.team-content -->
        </div><!-- /.team -->
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="team animatable fadeInUp">
          <div class="team-image">
            <a href="#">
              <img src="{{asset('landingpage/images/admin/team.png')}}" class="img-circle img-responsive">
            </a>
          </div><!-- /.team-image -->
          <div class="team-content">
            <div class="team-name"><h5>Natasha Miley</h5></div>
            <div class="team-role">Journalist</div>
            <div class="team-description"></div>
          </div><!-- /.team-content -->
        </div><!-- /.team -->
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="team animatable fadeInUp">
          <div class="team-image">
            <a href="#">
              <img src="{{asset('landingpage/images/admin/team.png')}}" class="img-circle img-responsive">
            </a>
          </div><!-- /.team-image -->
          <div class="team-content">
            <div class="team-name"><h5>Lavona Smith</h5></div>
            <div class="team-role">Photographer</div>
            <div class="team-description"></div>
          </div><!-- /.team-content -->
        </div><!-- /.team -->
      </div>
    </div>
</div>
</section>

<!-- Initial coin offering Start  -->
<section class="offercoinwrap clearfix">
<div class="container">
  <h4>Our Mission</h4>
  <h3>Crypterium is the Best Crowdsale Service!</h3>
  <div class="row">
    <div class="col-md-2 col-sm-2"></div>
    <div class="col-md-8 col-sm-8 text-justify" >
      <p style="margin-bottom: 10px; line-height: 1.6em">Steelhead trumpeter, zingel saury grouper swallower threadfin pencilsmelt pufferfish hoki. Unicorn fish salmon shark: elasmobranch rohu wasp fish; yellowfin surgeonfish.</p>
      
      <p style="margin-bottom: 10px; line-height: 1.6em">Halfbeak, "tiger shark long-finned char gar yellowfin tuna blue whiting, cavefish Redfish murray cod." Squirrelfish lungfish gudgeon Sevan trout luminous hake bleak bocaccio glassfish gulf menhaden. Chum salmon mooneye pleco bango blue-redstripe danio. Driftwood catfish lemon shark arowana; wormfish sailfish sand dab! Torpedo rockfish Black swallower snailfish candlefish Kafue pike sillago eel Pacific lamprey; king-of-the-salmon slipmouth, javelin, "trahira," cavefish.</p>
    </div>
    
  </div>
</div>
</section>    
  

<!-- Footer Start -->
<footer>
<div class="container">
  <div class="row">
    <div class="col-md-3 col-sm-6 hidden-xs hidden-sm"> 
<!--        <a href="#"><img src="{{asset('landingpage/images/footer-logo.png')}}" class="img-responsive " alt="Footer "></a>-->
    </div>
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
      <div class="newsletter clearfix">
        <input type="text" class="form-control" placeholder="E-mail">
        <button class="btn btn-mail"><i class="fa fa-envelope-o" aria-hidden="true"></i></button>
      </div>
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

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
</script>
</body>
</html>
