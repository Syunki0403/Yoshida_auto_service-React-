import React, { useEffect } from 'react';
import { News, Greeting, Outline, Brading, Recruit } from './contents/index';

const Contents = () => {
    let triggerNews = true;
    let triggerGreeting = true;
    let triggerOutline = true;
    let triggerBranding = true;
    let triggerRecruit = true;

    const watchCurrentPosition = () => {
        if (document.getElementById("top_news") !== null) {
            //let topY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let topNews = document.getElementById("top_news").getBoundingClientRect().top;
            let topGreeting = document.getElementById("top_greeting").getBoundingClientRect().top;
            let topOutline = document.getElementById("top_outline").getBoundingClientRect().top;
            let topBranding = document.getElementById("top_branding").getBoundingClientRect().top;
            let topRecruit = document.getElementById("top_recruit").getBoundingClientRect().top;

            if (topNews <= 0 && triggerNews) {
                document.getElementById("newsWrap").classList.add('fadeUp');
                triggerNews = false;
            } else if (topGreeting <= 0 && triggerGreeting) {
                document.getElementById("greetingWrap").classList.add('fadeUp');
                triggerGreeting = false;
            } else if (topOutline <= 0 && triggerOutline) {
                document.getElementById("outlineWrap").classList.add('fadeUp');
                triggerOutline = false;
            } else if (topBranding <= 0 && triggerBranding) {
                document.getElementById("brandingWrap").classList.add('fadeUp');
                triggerBranding = false;
            } else if (topRecruit <= 0 && triggerRecruit) {
                document.getElementById("recruitWrap").classList.add('fadeUp');
                triggerRecruit = false;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', watchCurrentPosition);
        return () => {
            window.removeEventListener('scroll', watchCurrentPosition);
        }
    }, []);

    return (
        <div>
            <News />
            <Greeting />
            <Outline />
            <Brading />
            <Recruit />
        </div>
    )
}

export default Contents;