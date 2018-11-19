import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-asterisk"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Semanticore</h1>
                <p>A Linguistic approach to Natural Language Processing</p>
                
                {/* //<p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                //for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p> */}
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Information Extraction</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Social Media</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>ChatBots</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Chicho</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
