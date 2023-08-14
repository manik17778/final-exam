
function createHeader() {
    const headerDiv = document.createElement('header');
    headerDiv.id = 'header'; 
    headerDiv.innerHTML = `
        <div id="header-container">
            <div class="logo">
                <img src="./resources/sample-logo.png" alt="Logo">
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="search-container">
            <input type="text" placeholder="Search...">
           
        
    </div>
        </div>
    `;
    document.body.prepend(headerDiv);
}


function createFooter() {
    const footerDiv = document.createElement('footer');
    footerDiv.id = 'footer'; 
    footerDiv.innerHTML = `
        <div id="footer-container">
            <div class="logo">
                <img src="./resources/sample-logo.png" alt="Logo">
            </div>
            <div class="footer-text">
                <p>Title</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta quibusdam voluptate eum
                </p>
            </div>
        </div>
    `;
    document.body.appendChild(footerDiv);
}

createHeader();
createFooter();
