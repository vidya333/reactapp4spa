import React from 'react';
import './Home.css';

export default function Home() {
    return (<>
        <div className='aside animate__animated animate__fadeInLeft animate__delay-0.5s'>
            <ul className='list'>
                <li>
                    <span className='num'>1
                    <div className='days'>2 Days
                    <p className='p'>Yarki island special tour</p>
                    </div>
                    </span>
                </li>
                <li>
                    <span className='num'>2
                    <div className='days'>5 Days
                    <p className='p'>Yarki island special tour</p>
                    </div>
                    </span>
                </li>
                <li>
                    <span className='num'>3
                    <div className='days'>7 Days
                    <p className='p'>Yarki island special tour</p>
                    </div>
                    </span>
                </li>
                <li>
                    <span className='num'>4
                    <div className='days'>9 Days
                    <p className='p'>Yarki island special tour</p>
                    </div>
                    </span>
                </li>
            </ul>
            <div className='num'>
                <div className='days1'>12 Days
                <p className='p'>Special VIP Tour. All Inclusive.</p>
                </div>
            </div>
            <p className='p1'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
        </div>

        <div className='section  animate__animated animate__fadeInUp animate__delay-0.5s'>
            <p>
            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
            in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum 
            passage, and going through the cites of the word in classical literature, discovered 
            the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
            45 BC. This book is a treatise on the theory of ethics, very popular during the 
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
            from a line in section 1.10.32.
            </p>
        </div>
        </>
    )
}
