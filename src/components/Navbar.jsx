import logo from "../assets/logo.png"
import Image1 from "../assets/Image1.png"
import Image2 from "../assets/Image2.png"
import Image3 from "../assets/Image3.png"
import Image4 from "../assets/Image4.png"

function Navbar(){
            return(<div>
    <div className="nav-container">
        <div className="logo-heading">
            <img src={logo} alt="logo" className="logo-img"/>     
            <h2>Visual Studio Code</h2>
        </div>
        <ul className="nav-links">
            <li>Doc</li>
            <li>Updates</li>
            <li>Blog</li>
            <li>API</li>
            <li>Extensions</li>
            <li>GitHub Copilot</li>
        </ul>
        <div className="right">
            <input type="text" className="search-bar" placeholder="Search Docs" />
            <button className="download-button">Download</button>
        </div>
        </div>
        <div className="main-content">
          <a href="#version-1.94" className="version-link">Version 1.94</a><p1> is now available! Read about the new features and fixes from September.</p1>
          <h1>Code faster with AI</h1>
          <p>Visual Studio Code with GitHub Copilot supercharges your</p><p>code with AI-powered suggestions, right in your editor.</p>
          <div className="buttons">
            <button className="download-windows-btn">Download for Windows</button>
            <button className="try-copilot-btn">Try GitHub Copilot</button>
          </div>
        </div>
        <div className="Image1">
            <img src={Image1} alt="Image1" className="Image1-img"/>
        </div>
        <div className='block-1'>
          <h2 className='git'>Code with GitHub Copilot</h2>
          <div>
        <p className="para1">Write code faster and smarter with GitHub Copilot, your AI pair programmer.
        <a href="30-days">Try GitHub Copilot free for 30 days</a>
        <a href='completion'>Completions</a> present suggestions automatically to help you code more efficiently
        <a href='copilot'>Copilot Chat</a> understands the context of your code, workspace, extensions, settings, and more.
        <a href='inline'>Inline Chat</a> enables you to iteratively generate edits and get answers to quick questions, directly on your code.</p>
        </div>
        <div className="Image2">
        <img src={Image2} alt="Image2"></img>
        </div>
       </div>
     
      <div className='block-2'>
      <p><h2 className='code-in-any'>Code in any language</h2></p>
      <p>VS Code supports almost every major</p>
       <p>programming language. Several ship in the box,</p><p>like JavaScript, TypeScript, CSS, and HTML, but</p> <p>extensions for others can be found in the VS</p><p> Code Marketplace.</p>
      <div className="Image3">
        <img src={Image3} alt="Image3"></img>
        </div>
    </div>
    <div className='block-3'>
     <p><h2 className='extensions'>Code with Extensions</h2></p>
      <p>Whether you're a beginner or an expert, we've</p><p> got you covered. Choose from hundreds of</p><p> extensions to power up your VS Code experience.</p>
      <a href='learn'>Learn more about extensions</a>
        <div className="Image4">
            <img src={Image4} alt="Image4"></img>
        </div>
      </div>
        
</div>

    
  
    )
}
export default Navbar;
