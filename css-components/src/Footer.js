import React from 'react';

const footerStyles =  {
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "width": "100%",
    "backgroundColor": "#4287f5",
    "color": "white",
    "textAlign": "center"
}

const Footer = () => {

  return (
    <div class="footer" style={footerStyles}>
      <p>Federated CSS Footer</p>
    </div>
  );
}

export default Footer;