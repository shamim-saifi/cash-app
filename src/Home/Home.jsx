import React from 'react'
import './Home.css'
import logo from '../img/logo.png'
import mobile from '../img/intro-phone 1.png'
import smallCube from '../img/intro-cube 1.png'
import biglCube from '../img/intro-cubes 1.png'
import stairs from '../img/intro-stairs 1.png'
import pillar from '../img/intro-pillar 1.png'
import bg from '../img/raysBG.png'
import { Link } from 'react-router-dom'
import { AiFillApple, AiOutlineArrowDown } from 'react-icons/ai'
import { BsGooglePlay, BsInstagram, BsTwitter, BsFillChatLeftDotsFill } from 'react-icons/bs'

const Home = () => {
    return (
        <div className='Home'>
            <img id='bg' src={bg} alt="bf" />
            <div className='nav'>
                <div id='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div id='menu'>
                    <Link to='/' >SignUp</Link>
                    <Link to='/' >Legal</Link>
                    <Link to='/' >Licenses</Link>
                    <Link to='/' >Security</Link>
                    <Link to='/' >Careers</Link>
                    <Link to='/' >Press</Link>
                    <Link to='/' >Support</Link>
                    <Link to='/' >Status</Link>
                    <Link to='/' >Codeblog</Link>
                </div>
                <div className='eyeContainer'>
                    <div id='eye'>
                        <div id='eyeBall'>
                            <div id='iris'></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* center page work */}
            <div className='centerCashPhone'>
                <div className='phoneAndText'>
                    <p id='cashText'>CASH</p>
                    <img src={mobile} alt="phone" />
                    <p id='appText'>APP</p>
                </div>
                <div id='smallCube'>
                    <img src={smallCube} alt="smallCube" />
                </div>
                <div id='biglCube'>
                    <img src={biglCube} alt="biglCube" />
                </div>
                <div id='stairs'>
                    <img src={stairs} alt="stairs" />
                </div>
                <div id='pillar'>
                    <img src={pillar} alt="pillar" />
                </div>
            </div>

            {/* Footer of home*/}

            <div className='footer'>
                <div className='appAndGoogleBtn' id='pp'>
                    <button><AiFillApple />APP STORE</button>
                    <button><BsGooglePlay />GOOGLE PLAY</button>
                </div>
                <div className='downArrow' >

                    <AiOutlineArrowDown />
                </div>

                <div className='socialAndPara'>

                    <div>
                        <p>
                            wfpewjfwefkwe fkfkworpwirweir230 r098402nvsdrj0r3 2r0923 jfolfjsdlfjwo r32rnet
                            ewtewrwe wfpewjfwefkw efkf kworpwirwei r230r0 9840 2nvsdrj0r32 r0923 jfolfj sdl
                            fjwor32rne tew tewrwe
                            f;lek fpwerow kep ofwmvd;lwefwef jfolfjsdlf jwor3 2rn wfpewjfwe fkwef kfkw orpwi
                            rwei r230 r09840 2nvs drj0r32 r0923
                        </p>
                    </div>

                    <div id='social'>
                        <Link to='your social icons'><BsFillChatLeftDotsFill /></Link>
                        <Link to='your social icons'><BsTwitter /></Link>
                        <Link to='your social icons'><BsInstagram /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home