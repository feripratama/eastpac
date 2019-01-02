@extends('layouts.app')

@section('css')
<link rel="stylesheet" href="{{asset('dist/css/contribution.css')}}">
@endsection

@section('content')
<!-- Main content -->
<section class="content" style="padding-left: 30px;padding-right: 30px;">
    <div class="card">
        <div class="row">
            <div class="box box-warning">
                <div class="box-header">
                    <h3 class="box-title">Referral</h3>
                </div>

                <div class="box-body">
                <div class="user-panel">

                    <h4>Invite your friends and family and recive free tokens</h4><br>
                    <p><strong>Each member recives a unique referral link to share with friends and family and recive a bonus - 5% of the value of their contribution.</strong></p>
                    <p>The referral link may be used during a token contribution, in the pre-sale and the ICO.</p>
                    <p>Imagine giving your unique referral link to your crypto-friend and he or she contributes tokens using your link, the bonus will be sent to your account automatically. The strategy is simple: the more links you send to your collagues, family and friends - the more tokens you may earn!</p><br>
                    <h6>My unique referral link</h6>
                    <div class="refferal-info">
                        <span class="refferal-copy-feedback copy-feedback"></span>
                        <i class="fa fa-link"></i>
                        <input type="text" class="refferal-address" id="ref-link" value="https://demo.themenio.com/ico?ref=7d264f90653733592" readonly>
                        <button class="refferal-copy copy-clipboard" data-clipboard-target="#ref-link"><i class="fa fa-copy" id="btn-cpy-link-ref"></i></button>
                    </div><!-- .refferal-info --> <!-- @updated on v1.0.1 -->
                    <div class="gaps-2x"></div>
                    <ul class="share-links">
                        <li>Share with : </li>
                        <li><a href="#"><i class="fa fa-at"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa fa-google"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
<!--                            <li><a href="#"><i class="fa fa-viber"></i></a></li>-->
                        <li><a href="#"><i class="fa fa-vk"></i></a></li>
                    </ul><!-- .share-links -->
                    <div class="gaps-1x"></div>
                    <h4>Refferal Statistics</h4>
                    <div class="refferal-statistics">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="refferal-statistics-item">
                                    <h6>Visit Count</h6>
                                    <span>420</span>
                                </div>
                            </div><!-- .col -->
                            <div class="col-md-4">
                                <div class="refferal-statistics-item">
                                    <h6>Signin Count</h6>
                                    <span>31</span>
                                </div>
                            </div><!-- .col -->
                            <div class="col-md-4">
                                <div class="refferal-statistics-item">
                                    <h6>Total Bonus</h6>
                                    <span>155</span>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .refferal-statistics -->
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Table Section-->
<section class="content" style="padding-left: 30px;padding-right: 30px;">
    <div class="card">
        <div class="row">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Referral List</h3>
                </div>

                <div class="box-body">
                    <table id="example" class="display" style="width:100%">
                    <thead>
                        <tr>
                            <th>Referee</th>
                            <th>Bought Token</th>
                            <th>Bonus</th>
                            <th>Date</th>
                            <th>Channel</th>
                        </tr>
                    </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

@section('script')
<script src="{{asset('dist/js/clipboard/clipboard.min.js')}}"></script>
<script>


    $(document).ready(function() {
        new ClipboardJS('.refferal-copy');
        var responseObj = [
        { "referee": "Cynthia Foster", "btoken": "800",  "bonus":"8", "date":"25-12-2018", "channel":"Facebook"},
        { "referee": "Cynthia Foster", "btoken": "800",  "bonus":"8", "date":"25-12-2018", "channel":"Facebook"},
        { "referee": "Cynthia Foster", "btoken": "800",  "bonus":"8", "date":"25-12-2018", "channel":"Facebook"},
        { "referee": "Cynthia Foster", "btoken": "800",  "bonus":"8", "date":"25-12-2018", "channel":"Facebook"},
        { "referee": "Cynthia Foster", "btoken": "800",  "bonus":"8", "date":"25-12-2018", "channel":"Facebook"},
        { "referee": "Cynthia Foster", "btoken": "800",  "bonus":"8", "date":"25-12-2018", "channel":"Facebook"},


    ];
    $('#example').dataTable({
        "data": responseObj,
        "columns": [

            { "data": "referee"},
            { "data": "btoken"},
            { "data": "bonus"},
            { "data": "date"},
            { "data": "channel"},
        ]
    });




        });

</script>
@endsection
