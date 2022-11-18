import logo from './assets/logo.jpg'
import OnClick from './UC4';

function Logo() {
    return (
        <img src={logo} onClick={OnClick}
            alt="A Bridgelabz logo: a Bridge to Employee through lab work"></img >
    )
}

export default Logo;