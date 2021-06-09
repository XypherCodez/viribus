import React from 'react';

function Home() {
    return (
        <div className="header">
            <h1><span className="header-top-text-large">Viribus</span><span className="header-top-text-small">Your fitness app</span></h1>
            <div className="header-top-elements"id="header-top">
                <div className="header-top-elements-left">
                    <h3><a href="/about">About</a></h3>
                    <h3><a href="https://github.com/viribusapp/viribus">Github</a></h3>
                    <h3><a href="/fordevs">For Developers</a></h3>
                    <h3><a href="/contact">Contact Us</a></h3>
                </div>
                <div className="header-top-elements-right">
                    <h3>hi</h3>
                </div>
            </div>
        </div>
    )
}
export default Home