import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (e) => {
        e.preventDefault();
        // changes url display without refreshing the page
        window.history.pushState({}, '', href);

        // communicates to the route components that the url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href}>{children}</a>
};

export default Link;