import React from 'react'
import profile from '../images/profile.png';

function About() {
    return (
        <section id ="about">
        <div className="pt-28 mb-20 lg2:mx-80 md:mx-48 xm:mx-36 sm:mx-8 2xl:pl-36 md:pl-2 sm:pl-0 max-w-5xl">
            <h1 className="underline font-sans text-hovercolor text-3xl text-left sm:mb-10 xm:mb-6">About Me</h1>

            <div className="">

                <div>
                    <img className=" sm2:float-right  shadow-2xl border-solid border-2 border-hovercolor 2xl:h-80 sm2:h-56 rounded sm2:ml-4 mb-8 justify-center " src={profile} alt="Profile"/>

                    <p className="text-left text-base font-body text-primary tracking-wide">Hello! My name is Vinam and I have been building things for the web since my second year in university. I have done
                    remote work with agencies, consulted for university-level web development projects and collaborated with some amazing people 
                    to create digital products for both business and consumer use. 
                    </p>
                    
                    <p className="text-left text-base font-body text-primary mt-4 tracking-wide">I got exposed to frontend development when I got together with my friends
                    and tried building a web application called Health in Time which aimed to help with extensive wait times patients face when visiting ERs. We eventually folded
                    the project as we decided to go our seperate ways, but the experience kick started my journey as a web developer. Lately I have been working on creating more
                    personal projects to showcase my skills on here. </p>

                    <p className="text-left text-base  font-body text-primary mt-4 mb-4 tracking-wide"> I am a big on perpetual learning so I love challenging myself with picking up newer technologies.
                    Here are some that I have been working with recently. </p>

                    <div className = "pl-5 flex flex-row">
                        <ul className="text-left text-base   text-hovercolor font-body list-disc mr-16">
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>jQuery</li>
                            
                        </ul>

                        <ul className="text-left text-base  text-hovercolor font-body list-disc mb-8">
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>NextJS</li>
                            <li>Tailwind CSS</li>
                            <li>Firebase</li>
                        </ul>
                    </div>

                    <h2 className="underline font-sans text-primary text-2xl text-left sm:my-10">Career Timeline</h2>
                    <div id="work-history" className ="py-6">
                        <div className = 'mb-12'>
                            <h3 className='text-hovercolor text-xl text-left'>VIN-T<span className='mx-2 text-primary'>(Web Developer)</span></h3>
                            <h4 className='text-hovercolor text-base text-left'>2020 - CURRENT</h4>
                            <ul className="text-left text-base  text-primary font-body list-disc my-6">
                                <li>Design, develop and launch robust websites for local businesses helping them build an online presence, increase their sales and generate new leads. </li>
                                <li>Help a diverse portfolio of local clients establish a digital presence, adapt to ever changing business needs particularly in the pandemic and develop personalized business plans that best meet their requirements.</li>
                                <li>Provide actionable brand development plans/ social media strategies to businesses just getting started, helping them increase their online sales by 8-10% on average.</li>
                            </ul>
                        </div>

                        <div className = 'mb-12'>
                            <h3 className='text-hovercolor text-xl text-left'>Bestbuy Canada<span className='mx-2 text-primary'>(Frontend Developer)</span></h3>
                            <h4 className='text-hovercolor text-base text-left'>2019 - 2020</h4>
                            <ul className="text-left text-base  text-primary font-body list-disc my-6">
                                <li>Started working part time in Bestbuy retail, was quickly promoted to Mobile manager position.</li>
                                <li>Early 2019, got an opportunity to go to corporate Bestbuy as a Junior Frontend Developer where I spent the following year as part of the team that built the new
                                mobile activation interface called, Bestbuy Activate.</li>
                                <li>Experience from working in retail allowed me to positively contribute to a successful launch of the product that is being used at Best Buy retail stores.</li>
                            </ul>
                        </div>

                        <div className = 'mb-12'>
                            <h3 className='text-hovercolor text-xl text-left'>Ciena<span className='mx-2 text-primary'>(Full Stack Developer Intern)</span></h3>
                            <h4 className='text-hovercolor text-base text-left'>2018-2019</h4>
                            <ul className="text-left text-base  text-primary font-body list-disc my-6">
                                <li>Spent most of time with application support and troubleshooting procedures.</li>
                                <li>Mainly worked on the frontend side with technologies including but not limited to HTML, Javascript, Transact SQL, Azure cloud and more.</li>
                                <li>Got exposed to migration process of applications from IaaS to PaaS on Microsoft Azure Cloud.</li>
                            </ul>
                            
                        </div>

                        <div className = 'mb-12'>
                            <h3 className='text-hovercolor text-xl text-left'>Health in Time<span className='mx-2 text-primary'>(Co-Founder/Frontend Developer)</span></h3>
                            <h4 className='text-hovercolor text-base text-left'>2016-2018</h4>
                            <ul className="text-left text-base  text-primary font-body list-disc my-6">
                                <li>Started as a University Project, HIT was a healthcare management application that aimed to make patient flow in Emergency Rooms, and clinics easier to manage and cut down extensive wait times. </li>
                                <li>Successfully tested the app in 4 clinics in Surrey, helping complement their existing information systems.</li>
                                <li>Designed and developed business strategies based on the input provided directly by the office BC Ministry of health & Fraser health authority.</li>
                            </ul>
                            
                        </div>

                        <div className = 'mb-12'>
                            <h3 className='text-hovercolor text-xl text-left'>Ace Multimedia<span className='mx-2 text-primary'>(Business Development/Lead Marketing Web Developer)</span></h3>
                            <h4 className='text-hovercolor text-base text-left'>2014-2017</h4>
                            <ul className="text-left text-base  text-primary font-body list-disc my-6">
                                <li>Worked in partnership with a popular south asian television channel, ZeeTV Canada. Handled their online ad campaigns, website development and negotiated television ad sales for local businesses on their behalf.</li>
                                <li>Managed and organized revenue generating sponsored south-asian cultural events in BC and Alberta including talk shows, networking events and concerts. </li>
                                <li>Developed online banner ads and landing pages for businesses associated with ZeeTV for increasing online growth and revenue.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-hovercolor text-xl text-left'>Absolute Software<span className='mx-2 text-primary'>(Associate Developer Intern)</span></h3>
                            <h4 className='text-hovercolor text-base text-left'>2015</h4>
                            <ul className="text-left text-base  text-primary font-body list-disc my-6">
                                <li>Spent most of my time here testing existing code, strengthening my techinal skills working within a team of senior software developers.</li>
                                <li>Developed great understanding of concepts like endpoint security,threat analysis and more.</li>
                                <li>Got an opportunity to work in a research based project which included student technology analytics
                                tool that provided amazingly detailed report of student technology usage</li>
                            </ul>
                           
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
    )
}

export default About
