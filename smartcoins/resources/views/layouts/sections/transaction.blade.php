@extends('layouts.app')

@section('css')

@endsection

@section('content')

<section class="content" style="padding-left: 30px;padding-right: 30px;">
    <div class="card">
        <div class="row">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Transaction</h3>
                </div>

                <div class="box-body">
                    <table id="example" class="display" style="width:100%">
                    <thead>
                        <tr>
                            <th>TxHash</th>
                            <th>Block</th>
                            <th>Age</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Value</th>
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
<script>


    $(document).ready(function() {
        var responseObj = [
        { "txhash": "0xc5b42f52eaab33e..", "block": "90898",  "age":"21 sec ago", "from":"0x3c66e1269ae137..", "to":"0x87sad", "value":"0 ether"},
        { "txhash": "0xc2fd8a0e3907df7..", "block": "90898",  "age":"22 sec ago", "from":"	0xf20d07900431142..", "to":"0xss4a4", "value":"0.002 ether"},
        { "txhash": "0x2092d11700bca9..", "block": "90898",  "age":"23 sec ago", "from":"0x52bfab512f937fe4..", "to":"0xsad45", "value":"0 ether"},
        { "txhash": "0xe1813da5e378a1..", "block": "90898",  "age":"24 sec ago", "from":"0xd2db057a0fac0c5..", "to":"0xasd49", "value":"0 ether"},
        { "txhash": "0xc9dbded8861ea0..", "block": "90898",  "age":"25 sec ago", "from":"0xba3fd1990281283..", "to":"0xasd54", "value":"0.002 ether"},
        { "txhash": "0x7d324f67860c574..", "block": "90898",  "age":"26 sec ago", "from":"0x169c796a64a520..", "to":"0xadwa8", "value":"0.002 ether"},
        { "txhash": "0x9629ccc92bee98..", "block": "90898",  "age":"27 sec ago", "from":"0xc2624420c6aa5e..", "to":"0xzsd45d", "value":"0.1437461 ether"},

    ];
    $('#example').dataTable({
        "data": responseObj,
        "columns": [

            {
                "data": "txhash",
                "render": function(data, type, row, meta){
                if(type === 'display'){
                    data = '<a href="txhash.html">' + data + '</a>';
                }

                return data;
                }
            },
            {
                "data": "block",
                "render": function(data, type, row, meta){
                if(type === 'display'){
                    data = '<a href="block.html">' + data + '</a>';
                }

                return data;
                }
            },
            {
                "data": "age",

            },
            {
                "data": "from",
                "render": function(data, type, row, meta){
                if(type === 'display'){
                    data = '<a href="from.html">' + data + '</a>';
                }

                return data;
                }
            },
            {
                "data": "to",
                "render": function(data, type, row, meta){
                if(type === 'display'){
                    data = '<a href="to.html">' + data + '</a>';
                }

                return data;
                }
            },
            {

                "data": "value",

            }
        ]
    });




        });

</script>
@endsection
