<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>{{ App\SiteConfig::config('SITE_TITLE') }}</title>
<link href="{{asset('landingpage/css/bootstrap.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/font-awesome')}}.min.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/slick.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/styles.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('landingpage/css/responsive.css')}}" rel="stylesheet" type="text/css"/>
<style>
</style>


<body>
<div class="mainpage clearfix">

<!-- Header Start -->
@include('landingpage.nav')
<!-- Banner Start -->
<section class="banner clearfix" id="particles-js">
        <div class="container">
            <div class="row">
            <div class = text-center>
                <h1>Dont Be Stranger</h1>
                <h2>Just Say Hello And Contact Us</h2>
            </div>
            </div>
        </div>
</section>

<section class="offercoinwrap clearfix">
    <div class="container">
            <div class="row">
              <div class="col-sm-5">
                <h2 class="text-start" style="padding: 10px;">CONTACT US</h2>
                <p style="padding: 10px;">Contact us and we'll get back to you within 24 hours.</p>
                <p><span class="glyphicon glyphicon-map-marker" style="padding: 5px;"></span> {{App\SiteConfig::config('CONTACT_ADDRESS')}}</p>
                <p><span class="glyphicon glyphicon-phone"  style="padding: 5px;"></span> {{App\SiteConfig::config('CONTACT_PHONE_NUMBER')}}</p>
                <p><span class="glyphicon glyphicon-envelope"   style="padding: 5px;"></span> {{App\SiteConfig::config('CONTACT_EMAIL')}}</p>
            </div>
            <div class="col-sm-7">
                    <div class="row">
                      <div class="col-sm-6 form-group">
                        <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
                      </div>
                      <div class="col-sm-6 form-group">
                        <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
                      </div>
                      <div class="col-sm-6 form-group">
                            <input class="form-control" id="phone" name="email" placeholder="+628" type="tel" required>
                        </div>
                    </div>
                    <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
                    <div class="row">
                      <div class="col-sm-12 form-group">
                        <button class="btn btn-success pull-right" type="submit">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
</section>

<!--Footer Section-->
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
<!--End Footer-->

</body>
</html>
<script type="text/javascript" src="{{asset('landingpage/js/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/bootstrap.min.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/particles.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/app.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/slick.js')}}"></script>
<script type="text/javascript" src="{{asset('landingpage/js/custom.js')}}"></script>
<script>



</script>
</body>
</html>
