import NavBar from "./NavBar.jsx";

export default function Header() {
    //DATI RICAVATI PER LA GESTIONE DEI LINK DELLA NAVBAR
    const links = [
        { id: 1, text: 'Home', url: '/' },
        { id: 2, text: 'Posts', url: '/posts' },
    ];

    return (
        <header>
            <NavBar linksProp={links} />
        </header>
    );
}