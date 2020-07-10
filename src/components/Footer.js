import React from 'react';

const footerStyle = {
    width: '100%',
    marginBottom: '0',
    background: 'linear-gradient(to top, rgb(196, 6, 47), #b3003b',
    textAlign: 'center'
};

function Footer() {
    return (
        <div>
            <footer className="footer">
            <div className="footer" style={footerStyle} /*class="container"*/>
                <span  /*class="text-muted"*/><h3>@antoinef</h3></span>
            </div>
            </footer>
        </div>
  );
}

export default Footer;