import React, { useState, useEffect } from 'react'


function App() {
  return (
    <div id="wrapper" className="wrapper">
        <div className="tm-header tm-header-fixed tm-sticky-header sticky-top">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-5 col-md-9 col-9 logg">
                            <img src="assets/images/log4.png" 
                            alt="appmyil logo" className="logo1" />
                            <span  className="logo2" >
                                Ask to Learn AI
                            </span>
                    </div>
                    <div className="col-lg-7 col-md-3 col-3">
                        <nav className="tm-navigation tm-header-navigation">
                            <ul className='menuTop'>
                                <li><a target="_blank" href="https://tutors23.vercel.app">
                                Login</a></li>
                                <li><a target="_blank" href="https://tutors23.vercel.app">
                                click here for demo </a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="tm-mobilenav"></div>
            </div>
        </div>
        
        <div id="tm-area-heroslider" className="tm-heroslider">
            <div className="tm-heroslider-inner">
                <img src="assets/images/heroslider-overlay-shape.png"  className="tm-heroslider-ovelayshape" />
                <div className="container"><br /><br />
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
                            <div className="tm-heroslider-content">
                                <h1 className='mainT2'>
                                    
                                    We help teachers create AI tutors to assist students with their questions
                                    
                                    
                                     

                                </h1>                                
                                <p className='mainT3'>                                    
                                    Our platform use  (RAG) technology
                                    to Train AI on your courses, videos, documents, and 
                                    all your teaching material to create AI tutors 
                                    to assist your students 24/7 with their questions and answer 
                                    strictly from class syllabus and your teaching materials

                                    
                                         
                                         
                                </p>
                                <div className="tm-buttongroup">
                                    <a target="_blank" href="https://tutors23.vercel.app" className="tm-button tm-button-lg tm-button-white tm-button-transparent">
                                        <span>Create your tutor for free </span></a>                                    
                                </div>
                                <a  className="tm-heroslider-scrolldown">
                                    <i className="zmdi zmdi-square-down"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 order-1 order-lg-2">
                            <div className="tm-heroslider-mobileshow">
                                <img 
                                    src="https://teachbetter.ai/wp-content/uploads/2025/01/Homepage-Image-1.png" 
                                    alt="appmyil mobile" 
                                    className='headerImg'
                                     />
                                <div className="tm-heroslider-mobileshowanim">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main className="page-content">        
        <section class="work__area grey-bg pt-120 pb-60"><br /><br /><br />
                <div class="container">
                    <div class="row">
                    <div class="col-12">
                    <div class="section__title-wrapper text-center mb-70">
                    <div className="tm-sectiontitle text-center piece1">
                                <h3>
                                We believe in empowering teachers with AI not replacing them                           

                                </h3>
                                <span className="tm-sectiontitle-divider"><i className="zmdi zmdi-fullscreen"></i></span>
                            </div>                     
                     <p className='piece2'>       
                    {/* Offer a more complete  and  engaging learning experience to your students. <br className='brr' />            */}
                    {/* Most of the times students have a hard time <br />
                    trying to implement or follow what they learned in a online course        */}
                    {/* You and your students don't need to be online at the same time <br /> */}
                    Your AI tutor can answer questions from students around the world 24/7
                                 
                                                 
                    </p>
                  </div>
                    </div>
                    </div><br /><br /><br />
                    <div class="row wow fadeInUp" data-wow-delay=".3s">
                    <div class="work__item-grid">
                        <div class="work__item mb-60">
                            <div class="work__flow-shape"></div>
                            <div class="work__thumb">
                                <img 
                                    src="assets/images/course.png" 
                                    alt="image not found" 
                                    className='workImg22'
                                />
                            </div>
                            <div class="work__content">
                                <h3><a >Students get stuck learning a new skill</a></h3>
                                <p>
                                   {/* Upload a course and set a predefined number of questions
                                    your students can ask you for a monthly subscription */}
                                    When your students get stuck learning a new skill 
                                    send them to your 24/7 tutor assistant

                                </p>
                            </div>
                        </div>
                        <div class="work__item mb-60">
                        <div class="work__flow-shape"></div>

                            <div class="work__thumb">
                                <img src="assets/images/teach1.png" alt="image not found" className='workImg2' />
                            </div>
                            <div class="work__content">
                                <h3><a >Students ask your AI tutor questions  </a></h3>
                                <p>
                               
                                Your students use our platform to ask 
                                your tutor questions via chat, audio or video
                                </p>                                                                
                            </div>
                        </div>
                        <div class="work__item mb-60">
                            <div class="work__thumb">
                                <img 
                                    src="assets/images/teach2.png" 
                                    alt="image not found"
                                    className='workImg4' 
                                />
                            </div>
                            <div class="work__content">
                                <h3><a> Your AI tutor Start answering your students   </a></h3>
                                <p>
                                Your AI tutor is trained on all your teaching material to answer from your teaching material 
                                </p>
                            </div>
                        </div>                        
                    </div>
                    </div>
                </div><br /><br /><br />
      </section>
        
        <div id="tm-area-about" className="tm-about-area tm-section tm-padding-section bg-grey">                    
                <section className="section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">                   
                            <div className="col-lg-6">
                                <div className="text-center mb-4">
                                    <h3>Getting started is easy</h3>
                                    <p className="text-muted">                                    
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="timeline-page position-relative py-4">                                    
                                    <div className="timeline-item mb-5 pb-5">
                                        <div className="row ">
                                            <div className="col-lg-6 howText">
                                                <div className="works-description-left text-start bg-light mx-lg-3 mx-4 text-lg-end ">
                                                    <h5 className="fs-18 ">
                                                        Set up your Subjects                                                  
                                                    </h5>
                                                    <p className="text-muted mb-0  ">
                                                        {/* Upload one or more courses and set up your   payouts<br className='brr' />
                                                        account to start receiving monthly payments <br  className='brr' /> from your subscribers */}
                                                        You can create one or more subjects that your students <br className='brr' />
                                                         can subscribe to and start asking you video questions
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-first order-lg-last">
                                                <div className="text-center mb-5 mb-lg-0">
                                                    <img src="assets/images/work-2.png" alt="Work" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row align-items-start">
                                            <div className="col-lg-6">
                                                <div className="text-center mb-5 mb-lg-0">
                                                    <img src="assets/images/work-3.png" alt="Work" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="works-description-right text-start bg-light mx-lg-3 mx-4">
                                                    <h5 className="fs-18">
                                                             Train your AI tutor                                          
                                                    </h5>
                                                    <p className="text-muted mb-0">
                                                    Upload or share links to your learning materials like courses, videos, documents, podcast, 
                                                    online communities to teach your AI tutor to answer like you
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                    <br /><br /><br />
                                    <div className="timeline-item mb-5 pb-5">
                                        <div className="row">
                                            <div className="col-lg-6 howText2">
                                                <div className="works-description-left text-start bg-light mx-lg-3 mx-4 text-lg-end">
                                                    <h5 className="fs-18">
                                                        Share your AI tutor with your students
                                                    </h5>
                                                    <p className="text-muted mb-0">                                                   
                                                    Share a link of your AI tutor with your students so they can start asking  questions

 
                                                                   
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-first order-lg-last">
                                                <div className="text-center mb-5 mb-lg-0">
                                                    <img src="assets/images/work-1.png" alt="Work" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

           

            {/* <div id="tm-area-services" className="tm-services-area tm-section tm-padding-section bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tm-sectiontitle text-center">
                                <h2>Create an additional source of monthly income
                                </h2>
                                <span className="tm-sectiontitle-divider"><i className="zmdi zmdi-fullscreen"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="row mt-40-reverse">
                                <div className="col-lg-12 col-md-6 col-12 mt-40">
                                    <div className="tm-service">
                                        <span className="tm-service-icon">
                                            <i className="flaticon-friendship"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                width="70px" height="72px">
                                                <path fillRule="evenodd" d="M52.556,54.307 C64.348,37.302 73.747,12.982 68.512,4.877 C60.795,-7.064 13.848,4.659 2.850,20.520 C2.466,21.074 2.124,21.636 1.831,22.199 C-6.854,38.889 17.104,75.968 33.774,71.638 C39.513,70.148 46.364,63.237 52.556,54.307 " />
                                            </svg>
                                        </span>
                                        <div className="tm-service-content">
                                            <h4>You set Pricing </h4>
                                            <p>
                                                You are the best one who knows what your knoledge is worth. <br  className='brr' />
                                                Create different plans and pricing for each plan
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6 col-12 mt-40">
                                    <div className="tm-service">
                                        <span className="tm-service-icon">
                                            <i className="flaticon-support"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                width="70px" height="72px">
                                                <path fillRule="evenodd" d="M52.556,54.307 C64.348,37.302 73.747,12.982 68.512,4.877 C60.795,-7.064 13.848,4.659 2.850,20.520 C2.466,21.074 2.124,21.636 1.831,22.199 C-6.854,38.889 17.104,75.968 33.774,71.638 C39.513,70.148 46.364,63.237 52.556,54.307 " />
                                            </svg>
                                        </span>
                                        <div className="tm-service-content">
                                            <h4>Create different monthly Plans</h4>
                                            <p>
                                               Give your subscribers the option to choose between different plans
                                                  with a different amount of questions and price for each plan
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6 col-12 mt-40">
                                    <div className="tm-service service1">
                                        <span className="tm-service-icon">
                                            <i className="flaticon-team"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                width="70px" height="72px">
                                                <path fillRule="evenodd" d="M52.556,54.307 C64.348,37.302 73.747,12.982 68.512,4.877 C60.795,-7.064 13.848,4.659 2.850,20.520 C2.466,21.074 2.124,21.636 1.831,22.199 C-6.854,38.889 17.104,75.968 33.774,71.638 C39.513,70.148 46.364,63.237 52.556,54.307 " />
                                            </svg>
                                        </span>
                                        <div className="tm-service-content">
                                            
                                            <h4>You Predifined the number of questions </h4>
                                            <p>
                                                your subscribers can only  ask you a predifined  amount of monthly questions
                                                 for the plan that they subscribed                                             
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6 col-12 mt-40">
                                    <div className="tm-service">
                                        <span className="tm-service-icon">
                                            <i className="flaticon-hourglass"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                width="70px" height="72px">
                                                <path fillRule="evenodd" d="M52.556,54.307 C64.348,37.302 73.747,12.982 68.512,4.877 C60.795,-7.064 13.848,4.659 2.850,20.520 C2.466,21.074 2.124,21.636 1.831,22.199 C-6.854,38.889 17.104,75.968 33.774,71.638 C39.513,70.148 46.364,63.237 52.556,54.307 " />
                                            </svg>
                                        </span>
                                        <div className="tm-service-content">
                                            <h4>Get a monthly Payment</h4>
                                            <p>
                                                At the end of each month you will receive a monthly payment generated from 
                                                your subscriptions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tm-service-image">
                                <div className="tm-service-image-1 is-visible">
                                    <img src="assets/images/2037850.png" alt="appmyil mobile" />
                                </div>
                                <div className="tm-service-image-2">
                                    <img src="assets/images/2037850.png" alt="appmyil mobile" />
                                </div>
                                <div className="tm-service-mobileshowanim">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="tm-area-about" className="tm-about-area tm-section tm-padding-section bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tm-sectiontitle text-center">
                                <h2> AI Tutors plus teachers expertise is <br />  a winning combo for students</h2>
                                <span className="tm-sectiontitle-divider"><i className="zmdi zmdi-fullscreen"></i></span>
                                <p className='piece2'>
                     <br /><br />                                
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tm-about-image">
                                <img className="tm-about-mobilethumb img3" 
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/teacher-giving-ai-education-to-students-illustration-svg-download-png-12925241.png"
                                    alt="about mobile" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tm-about-content">
                                <h4 className="text-center">
                                    
                                    <br />
                                    Large language models (LLMs) like Chat GPT are great with general knowledge,
                                     but they are not in sync with your specific teaching material. <br className='brr' />

                                                                   
                                    
                                </h4>
                                <h6 className="text-center">  <br />
                                Your AI Tutor (Curriculum-aware) can
                                Answers questions strictly from Class syllabus and your teaching materials
                                </h6>
                                <p>
                                </p>
                                
                                <a target="_blank" href="https://tutors23.vercel.app" className="tm-button create2">
                                    <span >Create your tutor for free </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="work__area grey-bg pt-120 pb-60 bg-grey"><br /><br /><br />
                <div class="container">
                    <div class="row">
                    <div class="col-12">
                    <div class="section__title-wrapper text-center mb-70">
                    <div className="tm-sectiontitle text-center piece1">
                                <h2>
                                Choose how your AI tutor will answer your student questions <br />
                                                          
                                </h2>
                                <span className="tm-sectiontitle-divider"><i className="zmdi zmdi-fullscreen"></i></span>
                     </div>                                          
                  </div>
                    </div>
                    </div>
                    <br /><br />
                    <div class="row wow fadeInUp" data-wow-delay=".3s">
                    <div class="work__item-grid">
                        <div class="work__item mb-60">
                            <div class="work__flow-shape"></div>
                            <div class="work__thumb">
                                <img 
                                    src="assets/images/ai.png" 
                                    alt="image not found" 
                                    className='workImg23'
                                />
                            </div>
                            <div class="work__content">
                                <h3><a >Chat </a></h3>
                                <p>
                                   Students chat with your AI tutor via text to get instant answers to your questions
                                </p>
                            </div>
                        </div>
                        <div class="work__item mb-60">
                        <div class="work__flow-shape"></div>

                            <div class="work__thumb">
                                <img 
                                src="https://voiser.net/images/clone.webp" 
                                alt="image not found" 
                                className='workImg233' />
                            </div>
                            <div class="work__content">
                                <h3><a >Voice  </a></h3>
                                <p>
                                Clone your voice and let your students ask questions via audio                            
                                </p>                                                                
                            </div>
                        </div>
                        <div class="work__item mb-60">
                            <div class="work__thumb">
                                <img 
                                    src="https://cdn-static.dupdub.com/frontend/autoupload/dupdub/image/voice_cloning_mobile/voice_cloning_mobile/cloning-banner-mobile.png"
                                    alt="image not found"
                                    className='workImg44' 
                                />
                            </div>
                            <div class="work__content"><br />
                                <h3 className='global1'>Video </h3>
                                <p>
                               Create an clone  avatar that uses your voice to answer questions from your students via video
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div><br /><br /><br />
      </section>

            

            <div id="tm-area-blog" className="tm-blog-area tm-section tm-padding-section bg-grey">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tm-sectiontitle text-center">
                                <h2>We are seeking to partner with</h2>
                                <span className="tm-sectiontitle-divider"><i className="zmdi zmdi-fullscreen"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="row tm-blog-slider tm-slider-arrow">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="https://acerforeducation.acer.com/wp-content/uploads/2020/07/banner-54.jpg" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center categoryText">
                                    <h4><a  className="text-center categoryText"> Teachers</a></h4>
                                    
                                </div>
                            </div><br /><br />
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="https://www.pewresearch.org/wp-content/uploads/sites/20/2024/06/SR_24.05.07_SchoolTypes_feature.jpg" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText"> Schools</a></h4>                                    
                                </div>
                            </div><br /><br />
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="https://d1wci53n4f20tv.cloudfront.net/articles/_1920xAUTO_crop_center-center_none/Best-of-Academic-Library-Trends-Western-Kentucky-University-Commons-at-Helm-Library-_-Nick-McGinn.jpg" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText">Universities</a></h4>
                                    
                                </div>
                            </div><br /><br />
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="assets/images/top5.webp" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText">Governments</a></h4>                                    
                                </div>
                            </div><br /><br />
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="assets/images/top3.jpeg" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText">Academies</a></h4>                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="assets/images/top1.jpg" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText">Organizations</a></h4>                                    
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="assets/images/top7.jpg" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText">Photography</a></h4>                                    
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="assets/images/top8.jpg" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText"> Animation</a></h4>                                    
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-blog">
                                <div className="tm-blog-topside">
                                    <div className="tm-blog-image">
                                        <img 
                                            src="assets/images/top9.webp" 
                                            alt="appmyil blog image" className="topicImg"
                                        />
                                    </div>
                                </div>
                                <div className="tm-blog-content text-center">
                                    <h4><a  className="text-center categoryText">Video Editing</a></h4>                                    
                                </div>
                            </div><br /><br /><br />
                        </div> */}
                        <div className="offset-lg-3 col-lg-6 col-md-6 col-12">
                        <a target="_blank" href="https://tutors23.vercel.app" className="tm-button create1">
                            <span >Create your tutor for free </span></a>
                        </div>
                    </div>
                </div>
            </div>                    
        </main>

        <div className="tm-footer bg-gradient ">
            <div className="tm-footer-bgshape">
                <img src="assets/images/footer-bgshape.png" alt="footer background shape" />
            </div>
            <div className="container ">
                <div className="tm-footer-toparea tm-padding-section foot33">
                    <div className="row widgets tm-footer-widgets">
                        <div className="col-xl-6 col-lg-4 col-md-6 col-12">
                            <div className="single-widget widget-info">
                                <a  className="widget-info-logo">
                                    <img src="assets/images/log4.png" alt="appmyil logo"  className="logo11" />
                                    <span  className="logo3" >
                                Ask to Learn
                            </span>
                                </a>
                                <p>
                                Use our platform to offer your subscribers a place where they can ask your AI tutor questions 24/7
                                </p>
                            </div>
                        </div>
                        <div className="offset-xl-2 col-xl-2 col-lg-2 col-md-6 col-12 foot32">
                            <div className="single-widget widget-quicklinks">
                                <h5 className="widget-title">Home </h5>
                                <ul>
                                    <li>
                                    <a target="_blank" href="https://tutors23.vercel.app">                                       
                                         Login</a></li>
                                    <li><a target="_blank" href="https://tutors23.vercel.app">
                                        Create your tutor </a></li>                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-12 foot32">
                            <div className="single-widget widget-quicklinks">
                                <h5 className="widget-title">Support</h5>
                                <ul>
                                    <li><a >Help center</a></li>
                                    <li><a >Terms of use</a></li>
                                </ul>
                            </div>
                        </div>                         
                    </div>
                </div>
                <div className="tm-footer-bottomarea">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <p className="tm-footer-copyright">Copyright  <a >Ask to Learn</a></p>
                        </div>
                        <div className="col-md-5">
                            <ul className="tm-footer-social">
                                <li>
                                    <a >
                                        <i className="zmdi zmdi-facebook"></i>
                                        <i className="zmdi zmdi-facebook"></i>
                                    </a>
                                </li>                                                               
                                <li>
                                    <a >
                                        <i className="zmdi zmdi-twitter"></i>
                                        <i className="zmdi zmdi-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <i className="zmdi zmdi-pinterest"></i>
                                        <i className="zmdi zmdi-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
