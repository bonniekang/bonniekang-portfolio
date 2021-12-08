import "../scss/contact.scss";

export default function Intro() { 

    return (
        <div className="contact" id="contact">
            <div className="c-wrapper">
                <div className="title">
                    <h1>CONTACT</h1>
                    <div className="border"></div>
                </div>
                <div className="content">
                    <h1>LET'S CONNECT !</h1>
                    <h3>That's all, now I would like to hear from you!</h3>
                    <a href="mailto:jihye59kang@gmail.com?subject=Hello!"><h2>jihye59kang@gmail.com</h2></a>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/bonniek0827/" target="blank"><div className="icon devicon-linkedin-plain"></div></a>
                    <a href="https://github.com/bonniekang" target="blank"><div className="icon devicon-github-original"></div></a>
                </div>
            </div>
        </div>
    )
}