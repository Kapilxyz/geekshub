import React from 'react'

function FooterComponent() {
    return (
        <div class="footerwrap">
        <div class="container">
            <div class="row clearfix">
                <div class="col-xs-6 col-sm-3 col-md-2">
                    <div class="shoplinksbx">
                        <h4>Online Shopping</h4>
                        <ul>
                            <li><a href="javascript:void(0);">Men</a></li>
                            <li><a href="javascript:void(0);">Women</a></li>
                            <li><a href="javascript:void(0);">Kids</a></li>
                            <li><a href="javascript:void(0);">Home & Living</a></li>
                            <li><a href="javascript:void(0);">Gift Cards</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-2 col-md-2">
                    <div class="shoplinksbx">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="javascript:void(0);">Contact Us</a></li>
                            <li><a href="javascript:void(0);">FAQ</a></li>
                            <li><a href="javascript:void(0);">T&C </a></li>
                            <li><a href="javascript:void(0);">Terms Of Use</a></li>
                            <li><a href="javascript:void(0);">Track Orders</a></li>
                            <li><a href="javascript:void(0);">Shipping</a></li>
                            <li><a href="javascript:void(0);">Cancellation</a></li>
                            <li><a href="javascript:void(0);">Returns</a></li>
                        </ul>
                    </div>
                </div>
                <div class="clearbth"></div>
                <div class="col-xs-6 col-sm-3 col-md-4">
                    <div class="shoplinksbx">
                        <h4>App on Mobile</h4>
                        <div class="downLinkContainer">
                            <a href="javascript:void(0);"><img class="androidDownLink"
                                    src="assets/images/google_play.png" alt="" /></a>
                            <a href="javascript:void(0);"><img class="iOSDownLink" src="assets/images/apple_store.png"
                                    alt="" /></a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-4">
                    <div class="wakipromises">
                        <div class="promisesbx">
                            <div class="imgsbx"><span class="original"></span></div>
                            <div class="promisecon"><span>100% ORIGINAL</span> guarantee for all products at Geekshub</div>
                        </div>
                        <div class="promisesbx">
                            <div class="imgsbx"><span class="return"></span></div>
                            <div class="promisecon"><span>Return within 30 days</span> of receiving your order </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FooterComponent
