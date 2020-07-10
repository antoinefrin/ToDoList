import React from 'react';

const headerStyle = {
    height: '50px',
    background: 'linear-gradient(to top, rgb(196, 6, 47), #b3003b'
};

const h1Style = {
        textAlign: 'center'
};

function Header() {
    return (
            <div style={headerStyle}>
                <h1 style={h1Style}>To do List</h1>
            </div>
    );
}

export default Header;