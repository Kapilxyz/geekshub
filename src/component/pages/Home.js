import React from 'react'
import { Link } from 'react-router-dom';
import {disney,marvel,dclogo,harrypotter,gamethrones, Banimg, Banimg2, pro1} from "../../assets/images";
import Layout from '../../Layouts/DashboardLayout';
function Home() {
    return (
        <Layout>
        <div class="homepgwrap">
            {/* <!--Banner Start Here--> */}
            <div class="homeban">
                <div id="bannerslider" class="owl-carousel owl-theme">
                    <div class="item clearfix"><img class="img-responsive" src={Banimg}
                            alt="Banner" /> </div>
                    <div class="item clearfix"><img class="img-responsive" src={Banimg2}
                            alt="Banner" /> </div>
                </div>
            </div>
            {/* <!--Banner End Here--> */}

            {/* <!--Home Page Middle Section Start Here--> */}
            <div class="homepgmiddleCon">
                {/* <!--Brands Row Start Here--> */}
                <div id="brandslogo" class="owl-carousel brandslogo owl-theme">
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={marvel} alt="" /></div>
                    </div>
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={dclogo} alt="" /></div>
                    </div>
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={harrypotter} alt="" /></div>
                    </div>
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={gamethrones} alt="" /></div>
                    </div>
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={disney} alt="" /></div>
                    </div>
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={marvel} alt="" /></div>
                    </div>
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={dclogo}alt="" /></div>
                    </div>
                    <div class="item clearfix">
                        <div class="brandsbx"><img src={harrypotter} alt="" /></div>
                    </div>
                </div>
                {/* <!--Brands Row End Here--> */}

                {/* <!--Tabs Featured Section Start Here--> */}
                <div class="tabsfeature">
                    <div class="tabsrw">
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#toppicks">Top Picks</a></li>
                            <li><a data-toggle="tab" href="#arrivals">New Arrivals</a></li>
                            <li><a data-toggle="tab" href="#featured">Featured</a></li>
                             <li><Link to="/feature">
                             Featured
                             </Link></li>

                        </ul>
                    </div>
                    <div class="tab-content">
                        <div id="toppicks" class="tab-pane fade in active">
                            <div class="productslistbox">
                                <div class="row mnlist clearfix">
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="arrivals" class="tab-pane fade">
                            <div class="productslistbox">
                                <div class="row mnlist clearfix">
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="featured" class="tab-pane fade">
                            <div class="productslistbox">
                                <div class="row mnlist clearfix">
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 padzero">
                                        <div class="productwtview">
                                            <div class="imgview"><img src={pro1} alt="" /></div>
                                            <div class="proinfo">
                                                <div class="pronm">Ceramic Monster Figurine</div>
                                                <div class="proprice">US$ 24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Tabs Featured Section End Here--> */}

                
            </div>
            {/* <!--Home Page Middle Section End Here--> */}

        </div>
       
        </Layout>
    )
}

export default Home
