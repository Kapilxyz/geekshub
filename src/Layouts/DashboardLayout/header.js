import React from 'react'

function HeaderComponent() {
    return (
        <nav class="navbar navbar-default navbar-fixed-top nav-down">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Techugo navigation</span>
                        <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">Techugo logo</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="javascript:void(0);">HOME</a></li>
                        <li><a href="javascript:void(0);">ABOUT US</a></li>
                        <li><a href="javascript:void(0);">LATEST PRODUCTS</a></li>
                        <li><a href="javascript:void(0);">CONTACT US</a></li>
                        <li><a href="javascript:void(0);">SHOP</a></li>
                    </ul>
                </div>
                <div class="searchboxh">
                    <form>
                        <input autocomplete="off" type="text" name="search" placeholder="Enter Search Keyword..." /> 
                        <span class="txt">Search</span>
                    </form>
                </div>
                <div class="headerrtsnav">
                    <ul class="nav navbar-nav">
                        <li><a href="javascript:void(0);"><span class="stores"></span>Stores</a></li>
                        <li><a href="javascript:void(0);"><span class="account"></span>Account</a></li>
                        <li><a href="javascript:void(0);"><span class="cart"></span>Cart<i class="notif_num">10</i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="overlaybg"></div>
        </nav>
    )
}

export default HeaderComponent
