import './index.css';
import logo from '../../assets/soundspot-logo.svg'

function Header() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="React Logo" />
        </div>
        <div className='header-actions'>
          <div className='search'>
            <span className='search-icon'></span>
            <input className='search-input'
              type="text"
              placeholder='Pesquisar'
              onFocus={(e) => e.target.placeholder = "Pesquise por música, artista ou album..."}
              onBlur={(e) => e.target.placeholder = "Pesquisar"}>
            </input>
          </div>
          <a>Início</a>
          <a>Contribuir</a>
          <button>Entrar</button>
        </div>
      </header>
    </>
  );
}

export default Header;