@extends('layouts.app')

@section('css')
<link rel="stylesheet" href="{{asset('dist/css/contribution.css')}}">
<style>
.step-number {
    flex-shrink: 0;
    height: 48px;
    width: 48px;
    font-size: 16px;
    color: #758698;
    border: 2px solid #b1becc;
    text-align: center;
    line-height: 45px;
    border-radius: 50%;
    margin-right: 12px;
    margin-top: 4px;
    margin-bottom: 4px;
}
.note {
    padding: 15px 15px 15px 45px;
    border-radius: 4px;
    position: relative;
}
.note-info {
    background: #edf5ff;
}
.note-danger {
    background: rgba(255, 0, 0, 0.05);
}
</style>
@endsection

@section('content')

<section class="content">
    <div class="row">
        <div class="col-sm-12" style="margin-top: 10px">
            <div class="box box-warning">
                <div class="box-header with-border">
                <h2 class="box-title">Buy Tokens</h2>
                    <div class="box-body">
                    <div class="status status-empty">
                        <div class="row">
                            <div class="user-panel" style="text-align:left;">
                            <form action="#">
                                <div class="step-head" style="display: flex; align-items: center"><div class="step-number">01</div><div class="step-head-text"><h4 class="pull-left">Select the payment method and calculate token price</h4></div>
                                </div>
                                <hr>
                                <div class="gaps-1x"></div>
                                <div class="payment-list">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="payment-item">
                                                <input class="payment-check" type="radio" id="payeth" name="payOption" value="tranxETH" checked="">
                                                <label for="payeth">
                                                    <div class="payment-icon payment-icon-eth"><img src="{{asset('dist/img/icon-ethereum.png')}}" alt="icon"></div>
                                                    <span class="payment-cur">Ethereum</span>
                                                </label>
                                                <span>@ 0.1 ETH</span>
                                            </div>
                                        </div><!-- .col -->
                                        <div class="col-md-3 col-sm-6">
                                            <div class="payment-item">
                                                <input class="payment-check" type="radio" id="paylightcoin" name="payOption" value="tranxLTC" disabled>
                                                <label for="paylightcoin">
                                                    <div class="payment-icon payment-icon-ltc"><img class="payment-icon" src="{{asset('dist/img/icon-lightcoin.png')}}" alt="icon"></div>
                                                    <span class="payment-cur">Litecoin</span>
                                                </label>
                                                <span>@ 0.1 LTC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="payment-item">
                                                <input class="payment-check" type="radio" id="paybtc" name="payOption" value="tranxBTC" disabled>
                                                <label for="paybtc">
                                                    <div class="payment-icon payment-icon-btc"><img class="payment-icon" src="{{asset('dist/img/icon-bitcoin.png')}}" alt="icon"></div>
                                                    <span class="payment-cur">Bitcoin</span>
                                                </label>
                                                <span>@ 0.05 BTC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="payment-item">
                                                <input class="payment-check" type="radio" id="payusd" name="payOption" value="tranxUSD" disabled>
                                                <label for="payusd">
                                                    <div class="payment-icon payment-icon-usd"><img class="payment-icon" src="{{asset('dist/img/icon-dollar.png')}}" alt="icon"></div>
                                                    <span class="payment-cur">US Dollar</span>
                                                </label>
                                                <span>@ 0.5 USD</span>
                                            </div>
                                        </div>
                                    </div><!-- .row -->
                                </div><!-- .payment-list -->
                                <hr>
                                <div class="gaps-1x"></div>
                                <div class="step-head" style="display: flex; align-items: center"><div class="step-number">02</div><div class="step-head-text"><h4 class="pull-left">Set amount of EAST tokens you would like to purchase</h4></div>
                                </div>
                                <hr>

                                <p>To become a part of the ICO Crypto project and purchase of EAST token will only be possible after payment made and receving an approval.  As you like to participate our project, please select payment method and enter the amount of EAST tokens you wish to purchase. You can buy EAST tokens using ETH. </p>
                                <div class="gaps-1x"></div><br>
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="payment-calculator">
                                            <div class="form-group">
                                                <label for="paymentGet">Tokens to Purchase</label>
                                                <div class="payment-input">
                                                    <input class="form-control" type="text" id="paymentGet" value="1200">
                                                    <span class="payment-get-cur payment-cal-cur">EAST</span>
                                                </div>
                                            </div>
                                            <em class="ti ti-exchange-vertical"></em>
                                            <div class="form-group">
                                                <label for="paymentFrom">Payment Amount</label>
                                                <div class="payment-input">
                                                    <input class="form-control" type="text" id="paymentFrom" value="600">
                                                    <span class="payment-from-cur payment-cal-cur">USD</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gaps-2x d-md-none"></div>
                                    </div><!-- .col -->
                                    <div class="col-md-4">
                                        <div class="payment-bonus">
                                            <h6 class="payment-bonus-title">Current Bonus</h6>
                                            <span class="payment-bonus-amount">20% <span>on pre-sales</span></span>
                                            <span class="payment-bonus-time">End at - 09 Jan, 2019</span>
                                        </div>
                                        <div class="gaps-1x d-md-none"></div>
                                    </div><!-- .col -->
                                </div><!-- .row -->
                                <div class="gaps-1x"></div>
                                <div class="payment-calculator-note"><i class="fa fa-info-circle" style="color:#f39c12"></i>The calculator helps you to convert required currency to EAST tokens.</div>
                                <div class="gaps-3x"></div>
                                <div class="payment-summary">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="payment-summary-item payment-summary-final">
                                                <h6 class="payment-summary-title">Final Payment</h6>
                                                <div class="payment-summary-info">
                                                    <span class="payment-summary-amount">600.00</span> <span>usd</span>
                                                </div>
                                            </div>
                                        </div><!-- .col -->
                                        <div class="col-md-4">
                                            <div class="payment-summary-item payment-summary-bonus">
                                                <h6 class="payment-summary-title">Received Bonus</h6>
                                                <div class="payment-summary-info">
                                                    <span>+</span> <span class="payment-summary-amount">600.00</span> <span>east</span>
                                                </div>
                                            </div>
                                        </div><!-- .col -->
                                        <div class="col-md-4">
                                            <div class="payment-summary-item payment-summary-tokens">
                                                <h6 class="payment-summary-title">Tokens Received</h6>
                                                <div class="payment-summary-info">
                                                    <span class="payment-summary-amount">12,200</span> <span>icox</span>
                                                </div>
                                            </div>
                                        </div><!-- .col -->
                                    </div><!-- .row -->
                                </div><!-- .payment-summary -->
                                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#tranxETH">
                                    Purchase Token
                                </button>
                            </form><!-- form -->
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>
<div class="modal fade" id="tranxETH" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="tranx-popup">
                <h5>Purchase Details ETH</h5>
                <div class="tranx-payment-details">
                    <p>Hi, Your transaction <strong>ICIYOW0102</strong> is <strong>Pending Payment</strong><br> You will receive <strong>5,470 EAST</strong> tokens (incl. bonus of 450 EAST) once paid.</p>
                    <h6>Please make your Payment to the bellow Address</h6>
                    <div class="tranx-payment-info">
                        <span class="tranx-copy-feedback copy-feedback"></span>
                        <i class="fa fa-ethereum"></i>
                        <input type="text" class="tranx-payment-address" id="wallet-addr" value="0xFf2463e6c45B6263638168c54e8049842dFB73dF" readonly>
                        <button class="tranx-payment-copy copy-clipboard-modal" data-clipboard-target="#wallet-addr"><i class="fa fa-copy"></i></button>
                    </div><!-- .tranx-payment-info --><!-- @updated on v1.0.1 -->
                    <ul class="tranx-info-list">
                        <li><span>SET GAS LIMIT:</span> 120 000</li>
                        <li><span>SET GAS PRICE:</span> 95 Gwei</li>
                    </ul><!-- .tranx-info-list -->
                    <div class="row">
                        <div class="col-sm-5">
                            <div class="tranx-info-qr text-center">
                                <span>OR Scan bellow QR Code to pay</span>
                                <img class="tranx-info-qrimg img-responsive" style="margin: auto;" src="{{asset('dist/img/eth-qr.png')}}" alt="qr">
                                <div class="gaps-4x"></div><br>
<!--                                    <ul class="btn-grp guttar-20px">-->
                                    <button href="#" class="btn btn-primary" onclick="getPayments()">Yes, I want</button>
                                    <button href="#" class="btn btn-danger" data-dismiss="modal">No, Thanks</button>
<!--                                    </ul>-->
                            </div>
                        </div><!-- .col -->
                        <div class="col-sm-7">
                            <div class="note note-info">
                                <i class="fa fa-info-circle" style="color:#93d1ff;"></i>
                                <p>Do not make payment through exchange (Kraken, Bitfinex). You can use MetaMask, MayEtherWallet, Mist wallets etc.</p>
                            </div>
                            <div class="gaps-1x"></div>
                            <div class="note note-danger">
                                <i class="fa fa-info-circle" style="color:#ff4b4b"></i>
                                <p>In case you send a different amount ETH, the number of ICOX tokens will update accordingly.</p>
                            </div>
                        </div><!-- .col -->
                    </div><!-- .row -->
                </div><!-- .tranx-payment-details -->
            </div><!-- .tranx-popup -->
        </div>
        <!-- /.modal-content -->
    </div>

@endsection

@section('script')
<script src="{{asset('dist/js/sweetalert/sweetalert.min.js')}}"></script>
<script src="{{asset('dist/js/clipboard/clipboard.min.js')}}"></script>
<script>
    $(document).ready(function() {
        new ClipboardJS('.tranx-payment-copy');
    })

    function getPayments(){

        swal({ title: "We're reviewing your payment",
            text: "We’ll review your transaction and get back to your within 6 hours. You’ll receive an email with the details of your contribution.",
            icon: "success",
            button: "Purchase",
            type: "success"
        }).then(okay => {
            if (okay) {
                window.location.href = "{{ route('home.transaction') }}";
            }
        });
    }
</script>
@endsection
