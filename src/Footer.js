import socialLogos from "./assets/socialLogos-modified.png"

export const Footer = () => {
    return <footer className={"footer"}>
        <div className={"copyrightMessage"}>Copyright ©FilmCity 2021</div>
        <div className={"socialMediaLinks"}>
            <p>Síguenos en nuestras redes sociales</p>
            <img src={socialLogos} className={"rrssImage"} alt={"social media logos"}/>

        </div>
    </footer>
}