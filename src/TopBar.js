import filmCityLogo from './assets/filmCityLogo.png';

export const TopBar = () => {
    return <nav className="topBar">
        <img src={filmCityLogo} className={"logoImg"}/>
        <p className={"LemaWeb"}>Nos mueve el cine</p>
    </nav>
}