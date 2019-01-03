<header>
<nav class="navbar">
    <div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> <span class="icon-bar"></span> <span class="icon-bar"></span><span class="icon-bar"></span></button>
        <a class="navbar-brand" href="#"><img src="{{asset('landingpage/images/logo2.png')}}" alt="Logo"></a> </div>
    <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-center" style="margin-top:10px;">
        <li><a href="{{route('welcome')}}" class="{{ (Route::currentRouteName() == 'welcome') ? 'active' : '' }}">Home </a></li>
        <li><a href="{{ route('about') }}">About</a></li>
        <li><a href="#">Whitepaper</a></li>
        <li><a href="{{ route('faq') }}" class="{{ (Route::currentRouteName() == 'faq') ? 'active' : '' }}">FAQ</a></li>
        <li><a href="{{ route('contactus') }}" class="{{ (Route::currentRouteName() == 'contactus') ? 'active' : '' }}">Contact Us</a></li>
        </ul>
    <ul class="nav navbar-nav navbar-right">
        @guest
            <li><a href="{{ route('login') }}">Login</a></li>
            <li><a href="{{ route('register') }}">Register</a></li>
        @else
        <li><a href="{{ route('home') }}">Dashboard</a></li>
        @endguest
    </ul>
    </div>
    </div>
</nav>
</header>
