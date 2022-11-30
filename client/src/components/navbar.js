import { useState } from 'react';
import favIcon from '../assets/favIcon-32x32.png';
import Wrapper from '../assets/wrappers/Navbar'

const Navbar = () => {
    return (
        <Wrapper>
            <div className='nav-center'>
                <div>
                    <favIcon />
                    <h2 className='titletext'>Project Tracker</h2>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar