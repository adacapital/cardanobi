import React from 'react'
import { useEffect, useState, useCallback } from 'react';
import TestIcon from '../icons/icons8-cardano.svg'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { BiNetworkChart } from 'react-icons/bi'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { BsInfoSquare } from 'react-icons/bs'
import { GiInterstellarPath } from 'react-icons/gi'
import { GiNinjaHeroicStance } from 'react-icons/gi'
import { GiTeamIdea } from 'react-icons/gi'
import { IoMdCopy } from 'react-icons/io'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import IconCard from './IconCard'
import { message } from 'antd';

const Staking = () => {
    const [card_focus, setCardFocus] = useState({"cardGrp1": "cardGrp1_default", "cardGrp2": "cardGrp2_default"})

    const onItemClick = useCallback((grp_id, card_id) => {
        // alert(`I was clicked, ${card_id}`);
        console.log('You clicked: ', grp_id, ' , ', card_id, ' prev card_focus: ', card_focus);

        const e = document.getElementById(card_id);
        if (e && !e.classList.contains("card_focus")) {
            var cf = card_focus[grp_id]
            document.getElementById(cf).classList.remove("card_focus"); 
            document.getElementById(cf+"_content").style.display = "none";

            document.getElementById(card_id).classList.add("card_focus"); 
            document.getElementById(card_id+"_content").style.display = "block";

            setCardFocus(card_focus => ({...card_focus, [grp_id]: card_id}))
            // console.log('New card_focus: ', card_focus);
        } 
      });

    const copyToClipboard = (text) => {
        window.copyToClipboard(text);
    }

    return (
        <div class="page-header bg-dark" id="staking">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col d-flex justify-content-center">
                        <h1><strong>What Is Staking?</strong></h1>
                    </div>
                </div>
                <div class="row d-flex text-center align-items-center justify-content-center pt-3">
                    <div class="col-lg-3">
                        <IconCard Icon={GiReceiveMoney} iconSize={40} tabIndex={1} grp_id={'cardGrp1'} id={'cardGrp1_default'} text={'Passive Income'} onItemClick={onItemClick} />
                    </div>
                    <div class="col-lg-3">
                        <IconCard Icon={AiOutlineSafetyCertificate} iconSize={40} tabIndex={2} grp_id={'cardGrp1'} id={'cardGrp1_2'} text={'100% Safe'} onItemClick={onItemClick} />
                    </div>
                    <div class="col-lg-3">
                        <IconCard Icon={BiNetworkChart} iconSize={40} tabIndex={3} grp_id={'cardGrp1'} id={'cardGrp1_3'} text={'Decentralization'} onItemClick={onItemClick} />
                    </div>
                    <div class="col-lg-3">
                        <IconCard Icon={BsPersonBoundingBox} iconSize={40} tabIndex={4} grp_id={'cardGrp1'} id={'cardGrp1_4'} text={'Single Pool Operator'} onItemClick={onItemClick} />
                    </div>
                </div>
                <div class="row align-items-center justify-content-center pt-3">
                    <br/>
                </div>
                <div class="row align-items-center justify-content-center p-4">
                    <div id="cardGrp1_default_content">
                        <p class="large-first-letter"><strong>ADA</strong> held on the Cardano network represents a user’s <strong>stake</strong> in the protocol, the size of which is proportional to the amount of ada held.</p>
                        <p class="large-first-letter">Users who hold a stake in Cardano can <strong>earn passive rewards for validating blocks</strong>. The amount of rewards they can earn is proportional to the amount of ada they pledge or delegate to a stake pool.</p>
                        <p class="large-first-letter"><strong>Staking</strong> is a way for delegators to earn a passive income <strong>each time</strong> a block is forged by the pool they are staking with.
                        It is important to note that this passive income <strong>comes on top of</strong> capital gains achieved through <strong>ADA</strong> price appreciation.
                        </p><br/>
                    </div>
                    <div id="cardGrp1_2_content" style={{display: 'none'}}>
                        <p class="large-first-letter">Staking is <strong>100% safe</strong> as your <strong>ADA</strong> never ever leave your wallet. In other terms, staking on Cardano is <strong>non-custodial</strong> unlike other <strong>Proof of Stake (PoS)</strong> blockchains. </p>
                        <p class="large-first-letter">Consequently you remain in <strong>full control</strong> of your tokens at all times: they are <strong>not locked</strong> in any shape or form and you can use them at <strong>any time</strong>.</p>
                        <p class="large-first-letter"><br/><br/><br/><br/> </p>
                    </div>
                    <div id="cardGrp1_3_content" style={{display: 'none'}}>
                        <p class="large-first-letter">As Cardano is a <strong>Proof of Stake (PoS)</strong> blockchain, owning <strong>ADA</strong> not only allows you to buy goods or services, but also grants you the right and obligation to participate in the protocol.</p>
                        <p class="large-first-letter">Staking is a mechanism inherent in the <a class="a-grad1 glow-on-hover" href="https://iohk.io/en/blog/posts/2020/03/23/from-classic-to-hydra-the-implementations-of-ouroboros-explained/" target="_blank" rel="noopener noreferrer"><strong>Ouroboros</strong></a> protocol that allows it to scale even in a setting where the set of stakeholders might be highly fragmented.</p>
                        <p class="large-first-letter">By delegating your <strong>ADA</strong> to a stake pool operator, you support the <strong>secure decentralization</strong> of Cardano's blockchain infrastructure, support the vision to build a <strong>fair</strong> future of <strong>mass participation</strong> without the need for a central authority, and last but not least, you contribute actively to the <strong>good health</strong> of the Cardano network and community.</p>
                    </div>
                    <div id="cardGrp1_4_content" style={{display: 'none'}}>
                        <p class="large-first-letter">Stake Pool Operators (SPOs) are responsible for processing transactions that will be placed in the ledger, as well as producing new blocks. As such SPOs are at the core of the <a class="a-grad1 glow-on-hover" href="https://iohk.io/en/blog/posts/2020/03/23/from-classic-to-hydra-the-implementations-of-ouroboros-explained/" target="_blank" rel="noopener noreferrer"><strong>Ouroboros</strong></a> protocol.</p>
                        <p class="large-first-letter">To be secure, <strong>Ouroboros</strong> requires a good number of stake pools to be online and maintain sufficiently good network connectivity at any given time.</p>
                        <p class="large-first-letter">Single Pool Operators strive to <strong>increase</strong> the number of stake pools available to <strong>secure</strong> Cardano's network and to <strong>reduce</strong> the stake concentration effect that occurs when only a few entities control a large percentage of all stakes available.</p>
                    </div>
                </div>
                <br/><br/>

                <div class="row align-items-center justify-content-center">
                    <div class="col d-flex justify-content-center">
                        <h1><strong>Our Pool</strong></h1>
                    </div>
                </div>
                <div class="row d-flex text-center align-items-center justify-content-center pt-3">
                    <div class="col-lg-3">
                        <IconCard Icon={BsInfoSquare} iconSize={40} tabIndex={1} grp_id={'cardGrp2'} id={'cardGrp2_default'} text={'Info'} onItemClick={onItemClick} />
                    </div>
                    <div class="col-lg-3">
                        <IconCard Icon={GiInterstellarPath} iconSize={40} tabIndex={2} grp_id={'cardGrp2'} id={'cardGrp2_2'} text={'Mission Driven'} onItemClick={onItemClick} />
                    </div>
                    <div class="col-lg-3">
                        <IconCard Icon={GiNinjaHeroicStance} iconSize={40} tabIndex={3} grp_id={'cardGrp2'} id={'cardGrp2_3'} text={'Professional'} onItemClick={onItemClick} />
                    </div>
                    <div class="col-lg-3">
                        <IconCard Icon={GiTeamIdea} iconSize={40} tabIndex={4} grp_id={'cardGrp2'} id={'cardGrp2_4'} text={'Community Support'} onItemClick={onItemClick} />
                    </div>
                </div>
                <div class="row align-items-center justify-content-center pt-3">
                    <br/>
                </div>
                <div class="row align-items-center justify-content-center p-4 col-12">
                    <div id="cardGrp2_default_content">
                        <div class="card-static slide-in-bottom custom-width-70">
                            <span class="badge rounded-pill bg-success-bright" style={{float: 'right'}}><strong>LIVE</strong></span>
                            <div class="card-static-item">
                                <div class="card-static-item-title">Pool Ticker</div>
                                <div class="card-static-item-value h1">
                                    <strong>
                                        <span role="button" onClick={() => { copyToClipboard("ADACT"); message.success('Pool Ticker Copied!'); }}>
                                            ADACT<span class="ms-2">{!!IoMdCopy && <IoMdCopy size={20}/>}</span>
                                        </span>
                                    </strong>
                                </div>
                            </div>
                            <div class="card-static-item">
                                <div class="card-static-item-title">Pool Id</div>
                                <div class="card-static-item-value">
                                    <strong>
                                        <span role="button" onClick={() => { copyToClipboard("pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"); message.success('Pool Id Copied!'); }}>
                                            pool1y24nj...see29w5axc<span class="ms-2">{!!IoMdCopy && <IoMdCopy size={20}/>}</span>
                                        </span>
                                    </strong>
                                </div>
                            </div>
                            <div class="card-static-item">
                                <div class="card-static-item-title">Pool Hash</div>
                                <div class="card-static-item-value">
                                    <strong>
                                        <span role="button" onClick={() => { copyToClipboard("22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395"); message.success('Pool Hash Copied!'); }}>
                                            22ab39540d...07fb343395<span class="ms-2">{!!IoMdCopy && <IoMdCopy size={20}/>}</span>
                                        </span>
                                    </strong>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">Live Stake</div>
                                        <div class="card-static-item-value"><strong><span>88,932<sup> ADA</sup></span></strong></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">Margin</div>
                                        <div class="card-static-item-value"><strong><span>4%<sup class="glow-on-hover no-pointer"> <a class="a-grad1 no-pointer" target="_blank" rel="noopener noreferrer">ADA CAPITAL REWARDS<sup>*</sup></a></sup></span></strong></div>
                                    </div>
                                </div>
                            {/* </div>
                            <div class="row"> */}
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">Pledge</div>
                                        <div class="card-static-item-value"><strong><span>10,000<sup> ADA</sup></span></strong></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">Fixed Costs</div>
                                        <div class="card-static-item-value"><strong><span>340<sup> ADA</sup></span></strong></div>
                                    </div>
                                </div>
                            {/* </div>
                            <div class="row"> */}
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">Saturation</div>
                                        <div class="card-static-item-value"><strong><span>0.13%</span></strong></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">Lifetime Blocks</div>
                                        <div class="card-static-item-value"><strong><span>0</span></strong></div>
                                    </div>
                                </div>
                            {/* </div>
                            <div class="row"> */}
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">Delegators</div>
                                        <div class="card-static-item-value"><strong><span>10</span></strong></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-static-item">
                                        <div class="card-static-item-title">ADA CAPITAL REWARDS</div>
                                        <div class="card-static-item-value"><strong>
                                            <span>
                                                {!!AiOutlineCheckCircle && <AiOutlineCheckCircle size={20} />}
                                            </span>
                                        </strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pt-5">
                            <figure>
                                <h6><a class="a-grad1 glow-on-hover no-pointer"><strong><sup>*</sup>ADA CAPITAL REWARDS</strong></a> is a bonus incentive to reward our <strong>largest</strong> and <strong>most loyal</strong> delegators:</h6>
                            </figure>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <figure>
                                <h6>
                                <ul style={{paddingLeft: '90px'}}>
                                    <li class="pt-1"><strong>Stake size award</strong>: 2% of total reward will go to delegators with the 3 largest delegations.</li>
                                    <li class="pt-1"><strong>Loyalty award</strong>: 2% of total reward will go to delegators with the 3 highest delegation durations.</li>
                                    <li class="pt-1">This scheme will run <strong>each epoch</strong> until pool saturation.</li>
                                    <li class="pt-1">Once pool saturation is reached, the pool margin <strong>will be reduced to 1.99%.</strong></li>
                                </ul>
                                </h6>
                            </figure>
                        </div>
                    </div>
                    <div id="cardGrp2_2_content" style={{display: 'none'}}>
                        <p class="large-first-letter">We are a <strong>Mission Driven</strong> pool, committed to helping others reach their full potential. To that end, every month, we will donate <strong>20%</strong> of our stake pool operator fixed fees to charities and ESG organizations with a mission to make a difference in our communities.</p>
                        <p class="large-first-letter">By delegating to us you will support local and international communities which are less fortunate than us when it comes to access to <strong>education, health and energy</strong>.</p>
                        <p class="large-first-letter">We are very excited to announce that we are currently supporting <a class="a-grad1 glow-on-hover" href="https://solar-aid.org/vision-mission/" target="_blank" rel="noopener noreferrer"><strong>SolarAid</strong></a> in their vision to bring <strong>clean and renewable energy</strong> to millions of people in sub-Saharan Africa.</p>
                        <p class="large-first-letter">Please stake with us and help us <strong>End the Darkness.</strong></p>
                        {/* <div class="html5-video-container" data-layer="0"><video class="video-stream html5-main-video" webkit-playsinline="" playsinline="" controlslist="nodownload" style={{width: '654px', height: '368px', left: '0px', top: '0px'}} src="https://www.youtube.com/daee8857-3cd8-45d4-a976-83893dfdec30"></video></div> */}
                        <div class="d-flex align-items-center justify-content-center card-static slide-in-bottom"><iframe width="560" height="315" src="https://www.youtube.com/embed/txdI0jQraXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </div>
                    <div id="cardGrp2_3_content" style={{display: 'none'}}>
                        <p class="large-first-letter">We are a team of highly skilled <strong>IT Professionals</strong> with a combined <strong>20+ years</strong> of experience in managing and developing high availability, business critical, distributed systems for the Financial Services Industry.</p>
                        <p class="large-first-letter">Our pool's <strong>system architectures</strong> follows first-class principles in <strong>Security</strong>, <strong>Resiliency</strong> and <strong>Monitoring</strong>. These principles ensure that our pool is up and running <strong>24/7</strong> to forge blocks and produce rewards for our delegators.</p>
                        <p class="large-first-letter">Some of our pool's key features:</p>
                        <div class="d-flex align-items-center justify-content-center card-static slide-in-bottom custom-width-70">
                        <figure>
                            <ul style={{paddingLeft: '10px'}}>
                                <li class="pt-1"><a class="a-grad1 glow-on-hover" href="https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?tabs=cli" target="_blank" rel="noopener noreferrer"><strong>Hub-spoke</strong></a> Cloud native architecture to promote a higher security model and workload isolation between Cardano nodes.</li>
                                <li class="pt-3"><a class="a-grad1 glow-on-hover" href="https://cloud.netapp.com/blog/save-time-and-headaches-with-infrastructure-as-code-on-azure-cvo-blg" target="_blank" rel="noopener noreferrer"><strong>Infrastructure as Code (IaC)</strong></a> to provision <strong>reliably, consistently and automatically</strong> our pool's IT resources. This increases by an order of magnitude our ability to bring changes <strong>quickly and safely</strong> from the Cardano <strong>testnet</strong> to the Cardano <strong>mainnet</strong>. This also allows us to automate the expansion of our Cardano node topology thus contributing to Cardano's infrastructure health. </li>
                                <li class="pt-3"><a class="a-grad1 glow-on-hover" href="https://docs.microsoft.com/en-us/azure/azure-monitor/overview" target="_blank" rel="noopener noreferrer"><strong>Realtime monitoring</strong></a> to guarantee that if anything were to happen at <strong>system or application</strong> level, alert notifications would instantly be sent to our support engineers, leading to <strong>less downtime</strong> and <strong>more rewards</strong> for our delegators. </li>
                                <li class="pt-3"><a class="a-grad1 glow-on-hover no-pointer"><strong>Geo-dispersed</strong></a> Cardano relays to help mitigate potential <strong>DDos attacks</strong>, <strong>increase redundancy</strong> and <strong>propagate blocks faster</strong> across the whole network.</li>
                            </ul>
                        </figure>
                        </div>
                    </div>
                    <div id="cardGrp2_4_content" style={{display: 'none'}}>
                        <p class="large-first-letter">We actively support the Cardano Testnet by running the <a class="a-grad1 glow-on-hover" href="https://bit.ly/3wluNw0" target="_blank" rel="noopener noreferrer"><strong>ADACT Testnet Pool</strong></a> and the <a class="a-grad1 glow-on-hover" href="https://bit.ly/3F4jk6H" target="_blank" rel="noopener noreferrer"><strong>ADAKT Peer-to-Peer Testnet Pool</strong></a> 24/7.</p>
                        <p class="large-first-letter">We commit <strong>financial resources, time and effort</strong> to keep our Testnet pools running because we believe it is crucial for Cardano to have a <strong>state-of-the-art Testnet</strong> as it allows the Cardano Developer Community to test, refine and perfect their projects and initiatives before bringing them to Mainnet and <strong>add new utilities on Cardano</strong>.</p>
                        {/* <div class="d-flex align-items-center justify-content-center card-static slide-in-bottom" style={{ width: '50%'}}> */}
                            <div class="d-flex align-items-center justify-content-center">
                                <a class="a-grad1 glow-on-hover" href="https://bit.ly/3wluNw0" target="_blank" rel="noopener noreferrer"><img src="img/adact_testnet_card.png" alt="" class="responsive-image"/></a>
                                <a class="a-grad1 glow-on-hover" href="https://bit.ly/3F4jk6H" target="_blank" rel="noopener noreferrer"><img src="img/adakt_testnet_card.png" alt="" class="responsive-image"/></a>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <svg id="svg" viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150">
            <defs>
            <linearGradient id="gradient_2">
                <stop offset="5%" stop-color="#d6ff30ff"></stop>
                <stop offset="95%" stop-color="#00f6ffff"></stop>
            </linearGradient>
            </defs>
            <path d="M 0,400 C 0,400 0,200 0,200 C 106.42857142857142,225.96428571428572 212.85714285714283,251.92857142857142 328,252 C 443.14285714285717,252.07142857142858 567.0000000000001,226.25000000000003 684,200 C 800.9999999999999,173.74999999999997 911.1428571428571,147.07142857142856 1036,147 C 1160.857142857143,146.92857142857144 1300.4285714285716,173.46428571428572 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient_2)" class="transition-all duration-300 ease-in-out delay-150"></path>
            </svg>
            <svg id="svg2" viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150">
            <defs>
            <linearGradient id="gradient">
                <stop offset="5%" stop-color="#00f6ffff"></stop>
                <stop offset="95%" stop-color="#d6ff30ff"></stop>
            </linearGradient>
            </defs>
            <path d="M 0,400 C 0,400 0,200 0,200 C 141.75,221.28571428571428 283.5,242.57142857142856 401,256 C 518.5,269.42857142857144 611.7499999999999,275 722,268 C 832.2500000000001,261 959.5000000000002,241.42857142857142 1082,228 C 1204.4999999999998,214.57142857142858 1322.25,207.28571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
            </svg>
        </div>
    )
}

export default Staking
