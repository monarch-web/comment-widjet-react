import React from 'react';

import './header.css';

function Header() { 
    return(
        <section className="container d-flex justify-content-between align-items-baseline">
            <span><i className="fas fa-list"></i> Виталий Петров</span>
            <span>Список комментариев на моей странице</span>
        </section>
    )
 }


 export default Header;