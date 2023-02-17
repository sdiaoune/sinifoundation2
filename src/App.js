import logo from './logo.svg';
import './App.css';
// import './stylesheet/style.scss'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div id="wrapper">
    {/* <!--=================================
    loading --> */}
    <div className="preloader">
        <div className="icon"></div>
    </div>
{/* 
    <!--=================================
    loading -->

    <!-- ==================== Start progress-scroll-button ==================== --> */}

    <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
    </div>

    {/* <!-- ==================== End progress-scroll-button ==================== --> */}

    {/* <!-- Main Header --> */}
    <header className="main-header header-style-one">

        {/* <!-- Header Upper --> */}
        <div className="header-upper">
            <div className="inner-container clearfix">
                {/* <!--Logo--> */}
                <div className="logo-box">
                    <div className="logo">
                        <a href="index.html" title="Linoor - DIgital Agency HTML Template">
                            <img src="images/logo/logo.png" alt="chirota" width="141" height="37" data-retina="images/logo/logo@2x.png" data-width="141" data-height="37"/>

                        </a>
                    </div>
                </div>
                <div className="nav-outer clearfix">
                    {/* <!--Mobile Navigation Toggler--> */}
                    <div className="mobile-nav-toggler"><i className="icofont-navigation-menu"></i><span className="txt">Menu</span></div>

                    {/* <!-- Main Menu --> */}
                    <nav className="main-menu navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className="dropdown"><a href="index.html">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="home-v2.html">Home Two</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="testimonials.html">Testimonials</a></li>
                                        <li><a href="causes.html">Causes</a></li>
                                        <li><a href="causes-detail.html">Causes Detail</a></li>
                                        <li><a href="event.html">Event</a></li>
                                        <li><a href="event-detail.html">Event Details</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="about.html">About Us</a>
                                </li>

                                <li className="dropdown"><a href="blog.html">Blogs</a>
                                    <ul>
                                        <li><a href="blog.html">Blog Grid</a></li>
                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="other-links clearfix">
                    {/* <!-- caall btn --> */}
                    <div className="phone-number">
                        <a href="tel:6668880000"><i className="icofont-headphone-alt"></i>Phone (+00 555 666 99)</a>
                    </div>
                    {/* <!--Btn--> */}
                    <div className="btn-header">
                        <a href="#" className="btn-main"><i className="far fa-heart"></i>Donate Now<span className="hover-effect dark"></span></a>
                    </div>
                    <div className="link-box">
                        <ul className="list-social">
                            <li><a href="#"><i className="icofont-facebook"></i></a></li>
                            <li><a href="#"><i className="icofont-instagram"></i></a></li>
                            <li><a href="#"><i className="icofont-behance"></i></a></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
        {/* <!--End Header Upper--> */}


    </header>
    {/* <!-- End Main Header --> */}

    {/* <!--Mobile Menu--> */}
    <div className="side-menu__block">


        <div className="side-menu__block-overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
        </div>
        {/* <!-- /.side-menu__block-overlay --> */}
        <div className="side-menu__block-inner ">
            <div className="side-menu__top justify-content-end">

                <a href="#" className="side-menu__toggler side-menu__close-btn"><img src="images/icon/close-1-1.png" alt=""/></a>
            </div>
            {/* <!-- /.side-menu__top --> */}


            <nav className="mobile-nav__container">
                {/* <!-- content is loading via js --> */}
            </nav>
            <div className="side-menu__sep"></div>
            {/* <!-- /.side-menu__sep --> */}
            <div className="side-menu__content">
                <p>Chirota is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.</p>
                <p><a href="mailto:themesflat@gmail.com">themesflat@gmail.com</a> <br/> <a href="tel:6668880000">6668880000</a></p>
                <div className="side-menu__social">
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
            </div>
            {/* <!-- /.side-menu__content --> */}
        </div>
        {/* <!-- /.side-menu__block-inner --> */}
    </div>
    {/* <!-- /.side-menu__block --> */}

    {/* <!-- Banner Section --> */}
    <section className="banner-section banner-two">

        <div className="banner-carousel owl-theme owl-carousel">
            {/* <!-- Slide Item --> */}
            <div className="slide-item">
                <div className="image-layer" style={{backgroundImage: 'url(images/slider/bg-slider-1.jpg)'}}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content">
                            <div className="inner">

                                <h2>Chirota is a Latin word.<br/> Literally it means <span>“Charity”</span> <br/> or universal love.</h2>
                                <div className="form-donat link-box">
                                    <form method="post" action="contact.html">
                                        <div className="form-group clearfix">
                                            <input type="text" name="text" value="" placeholder="$20" required=""/>
                                            <div className="custom-select">
                                                <select className="cars">
                                                  <option value="0">/mo</option>
                                                  <option value="1">/3mo</option>
                                                  <option value="2">/year</option>
                                                  <option value="3">/3year</option>
                                                </select>
                                            </div>

                                            <button type="submit" className="btn-main">First Donated Now!<span className="hover-effect"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Slide Item --> */}
            <div className="slide-item">
                <div className="image-layer" style={{backgroundImage: 'url(images/slider/bg-slider-2.jpg)'}}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content">
                            <div className="inner">

                                <h2>Chirota is a Latin word.<br/> Literally it means <span>“Charity”</span> <br/> or universal love.</h2>
                                <div className="form-donat link-box">
                                    <form method="post" action="contact.html">
                                        <div className="form-group clearfix">
                                            <input type="text" name="text" value="" placeholder="$20" required=""/>
                                            <div className="custom-select">
                                                <select className="cars">
                                                  <option value="0">/mo</option>
                                                  <option value="1">/3mo</option>
                                                  <option value="2">/year</option>
                                                  <option value="3">/3year</option>
                                                </select>
                                            </div>

                                            <button type="submit" className="btn-main">First Donated Now!<span className="hover-effect"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
    {/* <!--End Banner Section --> */}

    {/* <!-- Section About --> */}

    <div className="tf-section section-about no-padding-bottom">
        <div className="container">
            <div className="main-about">
                <div className="content-left-about">
                    <div className="progress-about">
                        <div className="couter">
                            <div className="chart" id="chart" data-percent="60">
                                <span className="percent"></span>
                            </div>
                        </div>
                        <h5>Donation</h5>
                    </div>
                    <div className="group-img">
                        <img className="img-sm wow fadeInDown" src="images/about/img-01.jpg" alt=""/>
                        <div className="img-big  wow fadeInUp">
                            <img src="images/about/img-02.jpg" alt=""/>
                            <div className="tf-icon">
                                <span className="icon-generous"></span>
                            </div>
                        </div>
                        <img className="wow fadeInDown" src="images/about/img-03.jpg" alt=""/>

                    </div>
                </div>
                <div className="content-right-about">
                    <div className="info-about">
                        <h6 className="sub-title">Essential Medical Care</h6>
                        <h3 className="title wow" data-splitting>Children are the <br/> future, and <span className="featured-text">knowledge</span> <br/> is power.</h3>
                        <p className="text">Nam pharetra est metus, sed congue dui cursus sit amet. Donec nec sapien tristique, tempus orci sit amet, hendrerit ex. </p>
                        <div className="team">
                            <div className="list-img-team">
                                <img src="images/about/team-sm-01.png" alt="chirota"/>
                                <img src="images/about/team-sm-02.png" alt="chirota"/>
                                <img src="images/about/team-sm-03.png" alt="chirota"/>
                                <img src="images/about/team-sm-04.png" alt="chirota"/>
                                <div className="number-team">
                                    <span>+10</span>
                                </div>
                            </div>
                            <div className="info">
                                <h5>Immamul Papan</h5>
                                <p>Cufko Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- End About --> */}

    {/* <!-- Section Services --> */}

    <section className="tf-section section-services style-1 no-padding-bottom">
        <div className="container">
            <div className="intro">
                <span className="icon-love-icon-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>
                <h3 className="title wow" data-splitting>Donate To <br/>People In Our Service.</h3>
            </div>
            <div className="main-services">
                <div className="list-services-box">
                    <div className="box-item wow fadeInUp">
                        <div className="img-box">
                            <img src="images/services/img-01.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-01 transition"></span></div>
                            <h5 className="title-box">
                                <a href="services.html">
                                COVID-19 Crisis
                            </a>
                            </h5>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="400ms">
                        <div className="img-box">
                            <img src="images/services/img-02.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-02 transition"></span></div>
                            <h5 className="title-box">
                                <a href="services.html">
                                Health & Medicin
                            </a></h5>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="800ms">
                        <div className="img-box">
                            <img src="images/services/img-03.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-03 transition"></span></div>
                            <h5 className="title-box">
                                <a href="services.html">
                                Pure Water Supply
                            </a></h5>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="1200ms">
                        <div className="img-box">
                            <img src="images/services/img-04.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-04 transition"></span></div>
                            <h5 className="title-box">
                                <a href="services.html">
                                Vegitable And Food
                            </a></h5>
                        </div>
                    </div>
                </div>
                <div className="btn-services  wow fadeInUp" data-wow-delay="400ms">
                    <a href="services.html" className="btn-main">
                        <span>View All Next</span>
                        <span className="hover-effect"></span>
                        <i className="icofont-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- end Services --> */}

    {/* <!-- Section Partner --> */}
    <section className="tf-section section-partner style-1">
        <div className="container">
            <div className="partners">
                <div className="banners-z">
                    <div className="flat-carousel-box data-effect clearfix" data-zero="0" data-gap="70" data-column="6" data-column2="5" data-column3="4" data-column4="2" data-dots="false" data-auto="true" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            <img src="images/partner/partner-01.png" alt="images"/>
                            <img src="images/partner/partner-02.png" alt="images"/>
                            <img src="images/partner/partner-03.png" alt="images"/>
                            <img src="images/partner/partner-04.png" alt="images"/>
                            <img src="images/partner/partner-05.png" alt="images"/>
                            <img src="images/partner/partner-06.png" alt="images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end Partner --> */}

    {/* <!-- Section Counter --> */}
    <section className="tf-section section-counter">
        <div className="container">
            <div className="list-counter">
                <div className="themesflat-content-box">
                    <div className="themesflat-counter v1">
                        <div className="counter-item">
                            <div className="inner">
                                <div className="text-wrap">
                                    <div className="number-wrap">
                                        <span className="number" data-speed="2000" data-to="3520" data-inviewport="yes">3520</span><span>+</span>
                                    </div>
                                    <h6 className="heading">Project Complated</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.themesflat-counter --> */}
                </div>

                <div className="themesflat-content-box">
                    <div className="themesflat-counter v2">
                        <div className="counter-item">
                            <div className="inner">
                                <div className="text-wrap">
                                    <div className="number-wrap">
                                        <span className="number" data-speed="2000" data-to="2013" data-inviewport="yes">2013</span><span>+</span>
                                    </div>
                                    <h6 className="heading">Total volunteer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.themesflat-counter --> */}
                </div>

                <div className="themesflat-content-box">
                    <div className="themesflat-counter v3">
                        <div className="counter-item">
                            <div className="inner">
                                <div className="text-wrap">
                                    <div className="number-wrap">
                                        <span className="number" data-speed="2000" data-to="1015" data-inviewport="yes">1015</span><span>+</span>
                                    </div>
                                    <h6 className="heading">Trusted Founds</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.themesflat-counter --> */}
                </div>

                <div className="themesflat-content-box">
                    <div className="themesflat-counter v4">
                        <div className="counter-item">
                            <div className="inner">
                                <div className="text-wrap">
                                    <div className="number-wrap">
                                        <span className="number" data-speed="2000" data-to="7846" data-inviewport="yes">7846</span><span>+</span>
                                    </div>
                                    <h6 className="heading">Donation People</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.themesflat-counter --> */}
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Counter --> */}

    {/* <!-- Section-Video --> */}
    <section className="tf-section section-video no-padding-bottom">
        <div className="container-fluid">
            <div className="main-video">
                <div className="box-video">
                    <div className="box">
                        <div className="flat-video-fancybox">
                            <a className="fancybox" data-type="iframe" href="https://www.youtube.com/embed/2Ge1GGitzLw?autoplay=1">
                                <div className="crirle">
                                    <span className="semicircle"></span>
                                    <img src="svg/play-button.svg" alt=""/>
                                    <span className="ripple"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info-video  wow fadeInRight">
                    <div className="text-wrap">
                        <div className="number-wrap">
                            <span className="number" data-speed="2000" data-to="1200" data-inviewport="yes">1.2</span><span>k+</span>
                        </div>
                        <h6 className="heading">Videos</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end Video --> */}

    {/* <!-- Section Charity Causes --> */}
    <section className="tf-section section-charitycauses">
        <div className="container">
            <div className="charity-main">
                <div className="charity-control">
                    <span className="icon-love-icon-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>
                    <h3 className="title wow fadeInLeft">Donate To People In Charity Causes
                        <br/>The World.</h3>
                </div>
                <div className="charity-list-main  wow fadeInUp">
                    <div className="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix" data-gap="30" data-column="3" data-column2="2" data-column3="1" data-auto="true">
                        <div className="owl-carousel owl-theme">
                            <div className="box-item">
                                <a className="click-img" href="project-detail.html">
                                    <div className="img-box">
                                        <img src="images/donat/img-01.jpg" alt=""/>
                                    </div>
                                </a>
                                <div className="content-box">
                                    <ul className="list">
                                        <li className="category"><a href="#"><i className="icofont-water-drop"></i>Pure Water</a></li>
                                        <li>/</li>
                                        <li>
                                            <a href="#">South Africa</a>
                                        </li>
                                    </ul>
                                    <h6 className="title-box">
                                        <a href="project-detail.html">Rohingya Refugees Blanket Distribution Program.</a>
                                    </h6>
                                    <div className="donat-bg" data-percent="72%">
                                        <div className="custom-donat"></div>
                                    </div>
                                    <div className="money">
                                        <div className="price">
                                            <p><span>$3550</span>Raised of $5000 </p>
                                        </div>
                                        <div className="time">
                                            <p>/mo</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main active">
                                            <span>Donat Now</span>
                                            <span className="hover-effect dark"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="project-detail.html">
                                    <div className="img-box">
                                        <img src="images/donat/img-02.jpg" alt=""/>
                                    </div>
                                </a>
                                <div className="content-box">
                                    <ul className="list">
                                        <li className="category"><a href="#"><i className="icofont-heart"></i>Health</a></li>
                                        <li>/</li>
                                        <li>
                                            <a href="#">Bangladesh</a>
                                        </li>
                                    </ul>
                                    <h6 className="title-box">
                                        <a href="project-detail.html">Rohingya Refugees Blanket Distribution Program.</a>
                                    </h6>
                                    <div className="donat-bg" data-percent="72%">
                                        <div className="custom-donat"></div>
                                    </div>
                                    <div className="money">
                                        <div className="price">
                                            <p><span>$3550</span>Raised of $5000 </p>
                                        </div>
                                        <div className="time">
                                            <p>/mo</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="project-detail.html">
                                    <div className="img-box">
                                        <img src="images/donat/img-03.jpg" alt=""/>
                                    </div>
                                </a>
                                <div className="content-box">
                                    <ul className="list">
                                        <li className="category"><a href="#"><i className="icofont-food-basket"></i>food </a></li>
                                        <li>/</li>
                                        <li>
                                            <a href="#">South Africa</a>
                                        </li>
                                    </ul>
                                    <h6 className="title-box">
                                        <a href="project-detail.html">Rohingya Refugees Blanket Distribution Program.</a>
                                    </h6>
                                    <div className="donat-bg" data-percent="72%">
                                        <div className="custom-donat"></div>
                                    </div>
                                    <div className="money">
                                        <div className="price">
                                            <p><span>$3550</span>Raised of $5000 </p>
                                        </div>
                                        <div className="time">
                                            <p>/mo</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="project-detail.html">
                                    <div className="img-box">
                                        <img src="images/donat/img-01.jpg" alt=""/>
                                    </div>
                                </a>
                                <div className="content-box">
                                    <ul className="list">
                                        <li className="category"><a href="#"><i className="icofont-water-drop"></i>Pure Water</a></li>
                                        <li>/</li>
                                        <li>
                                            <a href="#">South Africa</a>
                                        </li>
                                    </ul>
                                    <h6 className="title-box">
                                        <a href="project-detail.html">Rohingya Refugees Blanket Distribution Program.</a>
                                    </h6>
                                    <div className="donat-bg" data-percent="72%">
                                        <div className="custom-donat"></div>
                                    </div>
                                    <div className="money">
                                        <div className="price">
                                            <p><span>$3550</span>Raised of $5000 </p>
                                        </div>
                                        <div className="time">
                                            <p>/mo</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="project-detail.html">
                                    <div className="img-box">
                                        <img src="images/donat/img-02.jpg" alt=""/>
                                    </div>
                                </a>
                                <div className="content-box">
                                    <ul className="list">
                                        <li className="category"><a href="#"><i className="icofont-water-drop"></i>Pure Water</a></li>
                                        <li>/</li>
                                        <li>
                                            <a href="#">South Africa</a>
                                        </li>
                                    </ul>
                                    <h6 className="title-box">
                                        <a href="project-detail.html">Rohingya Refugees Blanket Distribution Program.</a>
                                    </h6>
                                    <div className="donat-bg" data-percent="72%">
                                        <div className="custom-donat"></div>
                                    </div>
                                    <div className="money">
                                        <div className="price">
                                            <p><span>$3550</span>Raised of $5000 </p>
                                        </div>
                                        <div className="time">
                                            <p>/mo</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Charity Causes --> */}

    {/* <!-- Section Gallery --> */}
    <section className="tf-section section-gallery s1">
        <div className="container-fluid">
            <div className="intro">
                <span className="icon-love-icon-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>
                <h3 className="title wow" data-splitting>Donate To <br/>People In Our Gallery.</h3>
            </div>
            <div className="main-gallery">
                <div className="list-gallery-box">
                    <div className="box-item  wow fadeInUp">
                        <div className="img-box">
                            <img src="images/gallery/img-01.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-01 transition"></span></div>
                            <h5 className="title-box">
                                <a href="gallery.html">
                                COVID-19 Crisis
                            </a></h5>
                        </div>
                        <div className="btn-box">
                            <a href="images/gallery/img-01.jpg" className="btn-main-2 lightbox-image overlay-box" data-fancybox="gallery">
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="400ms">
                        <div className="img-box">
                            <img src="images/gallery/img-02.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-01 transition"></span></div>
                            <h5 className="title-box">
                                <a href="gallery.html">
                                COVID-19 Crisis
                            </a></h5>
                        </div>
                        <div className="btn-box">
                            <a href="images/gallery/img-02.jpg" className="btn-main-2 lightbox-image overlay-box" data-fancybox="gallery">
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="800ms">
                        <div className="img-box">
                            <img src="images/gallery/img-03.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-02 transition"></span></div>
                            <h5 className="title-box">
                                <a href="gallery.html">
                                Health & Medicin
                            </a></h5>
                        </div>
                        <div className="btn-box">
                            <a href="images/gallery/img-03.jpg" className="btn-main-2 lightbox-image overlay-box" data-fancybox="gallery">
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="1200ms">
                        <div className="img-box">
                            <img src="images/gallery/img-04.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-03 transition"></span></div>
                            <h5 className="title-box">
                                <a href="gallery.html">
                                Pure Water Supply
                            </a></h5>
                        </div>
                        <div className="btn-box">
                            <a href="images/gallery/img-04.jpg" className="btn-main-2 lightbox-image overlay-box" data-fancybox="gallery">
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="1600ms">
                        <div className="img-box">
                            <img src="images/gallery/img-05.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-04 transition"></span></div>
                            <h5 className="title-box">
                                <a href="gallery.html">
                                Vegitable And Food
                            </a></h5>
                        </div>
                        <div className="btn-box">
                            <a href="images/gallery/img-05.jpg" className="btn-main-2 lightbox-image overlay-box" data-fancybox="gallery">
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="2000ms">
                        <div className="img-box">
                            <img src="images/gallery/img-06.jpg" alt="chirota"/>
                        </div>
                        <div className="content-box transition">
                            <div className="icon-box"><span className="icon-icon-04 transition"></span></div>
                            <h5 className="title-box">
                                <a href="gallery.html">
                                Vegitable And Food
                            </a></h5>
                        </div>
                        <div className="btn-box">
                            <a href="images/gallery/img-06.jpg" className="btn-main-2 lightbox-image overlay-box" data-fancybox="gallery">
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="btn-gallery">
                    <a href="gallery.html" className="btn-main">
                        <span>View All Next</span>
                        <span className="hover-effect"></span>
                        <i className="icofont-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end Gallery --> */}

    {/* <!-- Section Testimonials --> */}
    <section className="tf-section section-testimonials s2 no-padding-top">
        <div className="container">
            <div className="main-testimonials">
                <div className="info">
                    <div className="img-box  wow fadeInUp"><img src="images/testimonial/img-01.jpg" alt="chirota"/></div>
                    <div className="list-img-team">
                        <img src="images/about/team-sm-01.png" alt="chirota"/>
                        <img src="images/about/team-sm-02.png" alt="chirota"/>
                        <img src="images/about/team-sm-03.png" alt="chirota"/>
                        <img src="images/about/team-sm-04.png" alt="chirota"/>
                        <div className="number-team">
                            <span>+10</span>
                        </div>
                    </div>
                    <span className="icon-inverted-commas  wow fadeInDown"></span>
                </div>
                <div className="themesflat-carousel-box  wow fadeInRight clearfix" data-gap="500" data-column="1" data-column2="1" data-column3="1" data-auto="true">
                    <div className="owl-carousel owl-theme">
                        <div className="themesflat-testimonial">
                            <div className="testimonials-item">
                                <div className="box-content">
                                    <h4 className="text">Pellentesque vel dolor consectetur, ate eros vitae, molestie felis. Vivamus orna reague lorem reague. Pellentesque vel dolor consectetur.</h4>
                                    <h5 className="author">
                                        Kamrul Islam
                                    </h5>
                                    <p className="category">Exclusive at UX/UI</p>
                                </div>
                            </div>
                        </div>
                        <div className="themesflat-testimonial">
                            <div className="testimonials-item">
                                <div className="box-content">
                                    <h4 className="text">Pellentesque vel dolor consectetur, ate eros vitae, molestie felis. Vivamus orna reague lorem reague. Pellentesque vel dolor consectetur.</h4>
                                    <h5 className="author">
                                        Kamrul Islam
                                    </h5>
                                    <p className="category">Exclusive at UX/UI</p>
                                </div>
                            </div>
                        </div>
                        <div className="themesflat-testimonial">
                            <div className="testimonials-item">
                                <div className="box-content">
                                    <h4 className="text">Pellentesque vel dolor consectetur, ate eros vitae, molestie felis. Vivamus orna reague lorem reague. Pellentesque vel dolor consectetur.</h4>
                                    <h5 className="author">
                                        Kamrul Islam
                                    </h5>
                                    <p className="category">Exclusive at UX/UI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.owl-carousel --> */}
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end Testimonial --> */}

    {/* <!-- Section Team --> */}
    <section className="tf-section section-team">
        <div className="container">
            <div className="intro">
                <span className="icon-love-icon-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>
                <h3 className="title wow" data-splitting>Donate To <br/>People In Our Team.</h3>
            </div>
            <div className="main-team">
                <div className="list-team-box">
                    <div className="box-item wow fadeInUp">
                        <div className="img-box">
                            <img src="images/team/team-01.png" alt=""/>
                        </div>
                        <a href="#" className="info"><i className="icofont-facebook"></i></a>
                        <h5 className="name">Kamrul Islam</h5>
                        <p className="category">Exclusive at UX/UI</p>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="400ms">
                        <div className="img-box">
                            <img src="images/team/team-02.png" alt=""/>
                        </div>
                        <a href="#" className="info"><i className="icofont-facebook"></i></a>
                        <h5 className="name">Jessica Brown</h5>
                        <p className="category">Exclusive at UX/UI</p>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="800ms">
                        <div className="img-box">
                            <img src="images/team/team-03.png" alt=""/>
                        </div>
                        <a href="#" className="info"><i className="icofont-facebook"></i></a>
                        <h5 className="name">Kevin Martin</h5>
                        <p className="category">Exclusive at UX/UI</p>
                    </div>
                    <div className="box-item wow fadeInUp" data-wow-delay="1200ms">
                        <div className="img-box">
                            <img src="images/team/team-04.png" alt=""/>
                        </div>
                        <a href="#" className="info"><i className="icofont-facebook"></i></a>
                        <h5 className="name">Christine Eve</h5>
                        <p className="category">Exclusive at UX/UI</p>
                    </div>
                </div>
                <div className="btn-team  wow fadeInUp" data-wow-delay="400ms">
                    <a href="team.html" className="btn-main">
                        <span>View All Next</span>
                        <span className="hover-effect"></span>
                        <i className="icofont-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Team --> */}

    {/* <!-- Section Facts --> */}
    <section className="tf-section section-facts no-padding-bottom">
        <div className="container">
            <div className="main-facts">
                <div className="intro">
                    <h3 className="title wow fadeInDown">
                        Change Lives Forever We <br/>Need to make the biggest impact.
                    </h3>
                    <p className="money wow fadeInUp">$500,000</p>
                </div>
                <div className="content">
                    <div className="question  wow fadeInUp">
                        <h4 className="title">Whare the money is going?</h4>
                        <ul className="list">
                            <li>
                                <p>COVID-19 Crisis</p>
                            </li>
                            <li>
                                <p>Health & Medicin</p>
                            </li>
                            <li>
                                <p>Vegitable And Food</p>
                            </li>
                            <li>
                                <p>Pure Water Supply</p>
                            </li>
                            <li>
                                <p>Education</p>
                            </li>
                            <li>
                                <p>Clothes</p>
                            </li>
                        </ul>
                    </div>
                    <div className="newsletter-form  wow fadeInRight">
                        <h4>Subscribe Now !</h4>
                        <p>Please Crate Your E-mail And Subscribe Now<span>*</span></p>
                        <form method="post" action="contact.html">
                            <div className="form-group clearfix">
                                <input type="email" name="email" value="" placeholder="Enter Your Email..." required=""/>
                                <button type="submit" className="theme-btn"><i className="far fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Facts --> */}

    {/* <!-- Section Blog --> */}
    <section className="tf-section section-blog">
        <div className="container">
            <div className="blog-main">
                <div className="blog-list-main  wow fadeInUp">
                    <div className="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix" data-gap="30" data-column="3" data-column2="3" data-column3="1" data-auto="true">
                        <div className="owl-carousel owl-theme">
                            <div className="box-item">
                                <a className="click-img" href="blog-detail.html">
                                    <div className="img-box">
                                        <img src="images/blog/img-01.jpg" alt=""/>
                                    </div>
                                </a>
                                <div className="meta">
                                    <a href="blog-detail.html" className="time">12 <br/>Dec</a>
                                </div>
                                <div className="category">
                                    <a href="blog-detail.html">
                                            Pure Water
                                        </a>
                                </div>
                                <div className="content-box">
                                    <a href="blog-detail.html">
                                        <h5 className="title-box">
                                            Praesent a congue ante laoret mauris dilam.
                                        </h5>
                                    </a>
                                    <p className="text">Morbi dapibus in mauris a eleifen dmmo laoreet ex, in maximus.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main active">
                                            <span>Donat Now</span>
                                            <span className="hover-effect dark"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="blog-detail.html">
                                    <div className="img-box">
                                        <img src="images/blog/img-02.jpg" alt=""/>
                                    </div>
                                </a>

                                <div className="meta">
                                    <a href="blog-detail.html" className="time">12 <br/>Dec</a>
                                </div>
                                <div className="category">
                                    <a href="blog-detail.html">
                                            Medical
                                        </a>
                                </div>
                                <div className="content-box">
                                    <a href="blog-detail.html">
                                        <h5 className="title-box">
                                            Praesent a congue ante laoret mauris dilam.
                                        </h5>
                                    </a>
                                    <p className="text">Morbi dapibus in mauris a eleifen dmmo laoreet ex, in maximus.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="blog-detail.html">
                                    <div className="img-box">
                                        <img src="images/blog/img-03.jpg" alt=""/>
                                    </div>
                                </a>

                                <div className="meta">
                                    <a href="blog-detail.html" className="time">12 <br/>Dec</a>
                                </div>
                                <div className="category">
                                    <a href="blog-detail.html">
                                            Food Rice
                                        </a>
                                </div>
                                <div className="content-box">
                                    <a href="blog-detail.html">
                                        <h5 className="title-box">
                                            Praesent a congue ante laoret mauris dilam.
                                        </h5>
                                    </a>
                                    <p className="text">Morbi dapibus in mauris a eleifen dmmo laoreet ex, in maximus.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="blog-detail.html">
                                    <div className="img-box">
                                        <img src="images/blog/img-03.jpg" alt=""/>
                                    </div>
                                </a>

                                <div className="meta">
                                    <a href="blog-detail.html" className="time">12 <br/>Dec</a>
                                </div>
                                <div className="category">
                                    <a href="blog-detail.html">
                                            Food Rice
                                        </a>
                                </div>
                                <div className="content-box">
                                    <a href="blog-detail.html">
                                        <h5 className="title-box">
                                            Praesent a congue ante laoret mauris dilam.
                                        </h5>
                                    </a>
                                    <p className="text">Morbi dapibus in mauris a eleifen dmmo laoreet ex, in maximus.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <a className="click-img" href="blog-detail.html">
                                    <div className="img-box">
                                        <img src="images/blog/img-03.jpg" alt=""/>
                                    </div>
                                </a>

                                <div className="meta">
                                    <a href="blog-detail.html" className="time">12 <br/>Dec</a>
                                </div>
                                <div className="category">
                                    <a href="blog-detail.html">
                                            Food Rice
                                        </a>
                                </div>
                                <div className="content-box">
                                    <a href="blog-detail.html">
                                        <h5 className="title-box">
                                            Praesent a congue ante laoret mauris dilam.
                                        </h5>
                                    </a>
                                    <p className="text">Morbi dapibus in mauris a eleifen dmmo laoreet ex, in maximus.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn-main">
                                            <span>Donat Now</span>
                                            <span className="hover-effect"></span>
                                            <i className="icofont-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="blog-control">
                    <span className="icon-love-icon-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>
                    <h3 className="title wow fadeInRight">Donate To People Our Letest Blogs
                        <br/>The World.</h3>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Blog -->

    <!-- Footer --> */}
    <footer className="footer">
        <div className="container">
            <div className="main-footer">
                <div className="top-footer">
                    <div className="left">
                        <div className="logo">
                            <a href="index.html">
                                <img src="images/logo/logo-2.png" alt="chirota" width="141" height="37" data-retina="images/logo/logo-2@2x.png" data-width="141" data-height="37"/>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <ul className="list-social">
                            <li><a className="active" href="#"><span className="icon-facebook"></span></a></li>
                            <li><a href="#"><span className="icon-twitter"></span></a></li>
                            <li><a href="#"><span className="icon-instagram"></span></a></li>
                            <li><a href="#"><span className="icon-google-plus"></span></a></li>
                        </ul>
                    </div>


                </div>
                <div className="content-footer">
                    <div className="widget widget-support  wow fadeInUp">
                        <h5 className="title">EXPLORE</h5>
                        <ul className="list">
                            <li><i className="icofont-thin-right"></i><a href="index.html">Home</a></li>
                            <li><i className="icofont-thin-right"></i><a href="blog.html">Blog</a></li>
                            <li><i className="icofont-thin-right"></i><a href="contact.html">Contact</a></li>
                            <li><i className="icofont-thin-right"></i><a href="event.html">Event</a></li>
                            <li><i className="icofont-thin-right"></i><a href="project.html">Project</a></li>
                        </ul>
                    </div>
                    <div className="widget widget-about  wow fadeInUp">
                        <h5 className="title">LINKS</h5>
                        <ul className="list">
                            <li><i className="icofont-thin-right"></i><a href="home-v2.html">Home 02</a></li>
                            <li><i className="icofont-thin-right"></i><a href="services.html">Services</a></li>
                            <li><i className="icofont-thin-right"></i><a href="team.html">Team</a></li>
                            <li><i className="icofont-thin-right"></i><a href="gallery.html">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="widget-surve  wow fadeInUp">
                        <ul className="list">
                            <li><a href="#">Water Surve</a></li>
                            <li><a href="#">Education For all</a></li>
                            <li><a href="#">Tretment Food</a></li>
                            <li><a href="#">Serving Clothes</a></li>
                            <li><a href="#">Selter Project</a></li>
                            <li><a href="#">Help Orphan</a></li>
                        </ul>
                    </div>
                    <div className="widget-text  wow fadeInRight">
                        <h2 className="">Chirota Charity.</h2>
                        <h3>Child care center for rohingya refugee children.</h3>
                        <div className="address">
                            <h6>ADDRESS</h6>
                            <p>121 King Street, Melbourne<br/> Victoria 3000, Australia.</p>
                        </div>
                        <div className="phone">
                            <h6>TELEPHONE</h6>
                            <p>(+99 000 111 222 55 00)<br/> (+99 000 111 222 55 00)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    {/* <!-- End Footer --> */}
    <div className="bottom-footer">
        <div className="container-fluid">
            <div className="content">
                <p>Copywright by <span>@themesflat</span> Rights Reserved </p>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
