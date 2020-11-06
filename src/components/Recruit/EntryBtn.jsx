import React from 'react';
import { Link } from 'react-scroll';

const EntryBtn = () => {
    return (
        <div className="entry-btn">
            <Link to="section_recruit_entry" smooth={true} duration={500}>
                <span></span>
                <p>ENTRY</p>
            </Link>
        </div>
    )
}

export default EntryBtn;
