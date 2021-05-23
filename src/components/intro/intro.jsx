import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="icon">👋🏻</div>
                <div className="text-box">
                    <div className="text-1">Hi  I'm Bonnie Kang,</div>
                    <div className="text-2">a full stack developer currently based in London, UK.</div>
                    <div className="text-3">I recently graduated a coding bootcamp to become a developer who creates user-friendly solutions, paying attention to clean and maintainable code.</div>
                    <a href="assets/Bonnie_Kang_Resume.pdf" target="_blank" >View my resume</a>
                </div>
            </div>
            <div className="right">
                <div className="scroll">⟻ scroll</div>
                
            </div>
        </div>
    )
}
