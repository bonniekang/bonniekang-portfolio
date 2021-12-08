import "../scss/intro.scss";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="icon">👋🏻</div>
                <div className="text-box">
                    <div className="text-1">Hi  I'm Bonnie Kang,</div>
                    <div className="text-2">a full stack developer currently based in London, UK.</div>
                    <div className="text-3">I recently graduated a coding bootcamp to become a developer who creates user-friendly solutions, paying attention to clean and maintainable code.</div>
                </div>
            </div>
            <div className="right">
                <a href="assets/Bonnie_Kang_CV.pdf" target="_blank" >View my resume</a>
                <a href="mailto:jihye59kang@gmail.com?subject=Hello!">Email</a> 
                <a href="https://www.linkedin.com/in/bonniek0827/" target="blank">LinkedIn</a>
                <a href="https://github.com/bonniekang" target="blank">Github</a>
            </div>
        </div>
    )
}
