import Logo from '/src/Client/assets/Petroman logo text white v2@12x.png';
function Teaser() {
    return (
        <div className="teaser-container">
            <img className="teaser-picture" src="src/Client/assets/teaser-picture.png" alt="Teaser" />
            <img style={{ cursor: 'pointer' }} src={Logo} alt="Petroman Logo" className="floater"/>
            <img className="teaser-product" src="src/Client/assets/teaser-product.png" alt="Teaser Product" />
        </div>
    );
}

export default Teaser;
