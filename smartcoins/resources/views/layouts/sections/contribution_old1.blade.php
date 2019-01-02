@extends('layouts.app')

@section('css')
<link rel="stylesheet" href="{{asset('dist/css/contribution.css')}}">
@endsection

@section('content')

<section class="content">
  <div class="row">
    <div class="col-sm-12" style="margin-top: 10px">
      <div class="box box-warning">
        <div class="box-header with-border">
          <h2 class="box-title">Buy Tokens</h2>
          <div class="box-body">
            <div class="row">
              <div class="user-panel">
                <form action="#">
                  <h5 class="user-panel-subtitle">01. Select the payment method and calculate token price</h5>
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
                          <input class="payment-check" type="radio" id="paylightcoin" name="payOption" value="tranxLTC">
                          <label for="paylightcoin">
                            <div class="payment-icon payment-icon-ltc"><img class="payment-icon" src="{{asset('dist/img/icon-lightcoin.png')}}" alt="icon"></div>
                            <span class="payment-cur">Litecoin</span>
                          </label>
                          <span>@ 0.1 LTC</span>
                        </div>
                      </div><!-- .col -->
                      <div class="col-md-3 col-sm-6">
                        <div class="payment-item">
                          <input class="payment-check" type="radio" id="paybtc" name="payOption" value="tranxBTC">
                          <label for="paybtc">
                            <div class="payment-icon payment-icon-btc"><img class="payment-icon" src="{{asset('dist/img/icon-bitcoin.png')}}" alt="icon"></div>
                            <span class="payment-cur">Bitcoin</span>
                          </label>
                          <span>@ 0.05 BTC</span>
                        </div>
                      </div><!-- .col -->
                      <div class="col-md-3 col-sm-6">
                        <div class="payment-item">
                          <input class="payment-check" type="radio" id="payusd" name="payOption" value="tranxUSD">
                          <label for="payusd">
                            <div class="payment-icon payment-icon-usd"><img class="payment-icon" src="{{asset('dist/img/icon-creditcard.png')}}" alt="icon"></div>
                            <span class="payment-cur">US Dollar</span>
                          </label>
                          <span>@ 0.5 USD</span>
                        </div>
                      </div><!-- .col -->
                    </div><!-- .row -->
                  </div><!-- .payment-list -->
                  <div class="gaps-1x"></div>
                  <h5 class="user-panel-subtitle">02. Set amount of ICOX tokens you would like to purchase</h5>
                  <p>To become a part of the ICO Crypto project and purchase of ICOX token will only be possible after payment made and receving an approval.  As you like to participate our project, please select payment method and enter the amount of ICOX tokens you wish to purchase. You can buy ICOX tokens using ETH, BTC, LTC or USD. </p>
                  <div class="gaps-1x"></div>
                  <div class="row">
                    <div class="col-md-8">
                      <div class="payment-calculator">
                        <div class="payment-get">
                          <label for="paymentGet">Tokens to Purchase</label>
                          <div class="payment-input">
                            <input class="input-bordered" type="text" id="paymentGet" value="1200">
                            <span class="payment-get-cur payment-cal-cur">icox</span>
                          </div>
                        </div>
                        <em class="ti ti-exchange-vertical"></em>
                        <div class="payment-from">
                          <label for="paymentFrom">Payment Amount</label>
                          <div class="payment-input">
                            <input class="input-bordered" type="text" id="paymentFrom" value="600">
                            <span class="payment-from-cur payment-cal-cur">usd</span>
                          </div>
                        </div>
                      </div>
                      <div class="gaps-2x d-md-none"></div>
                    </div><!-- .col -->
                    <div class="col-md-4">
                      <div class="payment-bonus">
                        <h6 class="payment-bonus-title">Current Bonus</h6>
                        <span class="payment-bonus-amount">20% <span>on pre-sales</span></span>
                        <span class="payment-bonus-time">End at - 09 Jul, 2018</span>
                      </div>
                      <div class="gaps-1x d-md-none"></div>
                    </div><!-- .col -->
                  </div><!-- .row -->
                  <div class="gaps-1x"></div>
                  <div class="payment-calculator-note"><i class="fa fa-info-circle"></i>The calculator helps you to convert required currency to ICOX tokens.</div>
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
                            <span>+</span> <span class="payment-summary-amount">600.00</span> <span>icox</span>
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
                  <a href="#" class="btn btn-primary payment-btn" data-toggle="modal" data-target="#tranxETH">Purchase Tokens</a>
                </form><!-- form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

@endsection

@section('script')

@endsection
