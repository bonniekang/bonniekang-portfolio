import "../scss/intro.scss";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="icon">👋🏻</div>
                <div className="text-box">
                    <div className="text-1">Hey, I’m Jihye or Bonnie.</div>
                    <div className="text-2">I’m a full stack developer.</div>
                    <div className="text-3">I love to try new things and easily bounce back from failures. These natures make my approach to web development.</div>
                </div>
            </div>
            <div className="right">
                <div className="personal-info-box">
                    <div>
                        <img src="assets/selfie.JPG" alt=""/>
                    </div>
                    <div>
                        <div className="name">
                            Jihye Bonnie Kang
                        </div>
                        <div className="socials">
                            <a href="assets/Bonnie_Kang_CV.pdf" target="_blank" >CV</a>
                            <a href="mailto:jihye59kang@gmail.com?subject=Hello!">Email</a> 
                            <a href="https://www.linkedin.com/in/bonniek0827/" target="blank">LinkedIn</a>
                            <a href="https://github.com/bonniekang" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
