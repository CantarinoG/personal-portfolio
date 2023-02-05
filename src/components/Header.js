import "../styles/Header.css";

function Header() {

    return <header className="header-component">
        <nav>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home-variant</title><path d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" /></svg>
                HOME</a>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                ABOUT</a>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>xml</title><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" /></svg>
                PROJECTS</a>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-box</title><path d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>
                CONTACT</a>
        </nav>
    </header>;

}

export default Header;