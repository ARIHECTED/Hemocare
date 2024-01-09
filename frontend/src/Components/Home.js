import './Home.css';


function Home() {
    return (
      <div className="home">
        <svg xmlns="http://www.w3.org/2000/svg" width="946" height="968" viewBox="0 0 946 968" fill="none">
          <g filter="url(#filter0_d_93_102)">
            <path d="M897 811.5C731.274 699.342 302.232 960 22.5 960C-257.232 960 -484 733.232 -484 453.5C-484 173.768 -257.232 -53 22.5 -53C302.232 -53 1144.5 979 897 811.5Z" fill="url(#paint0_linear_93_102)" />
          </g>
          <defs>
            <filter id="filter0_d_93_102" x="-488" y="-53" width="1433.96" height="1021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.647059 0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_102" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_93_102" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_93_102" x1="-169.5" y1="26.9997" x2="330.5" y2="874.999" gradientUnits="userSpaceOnUse">
              <stop offset="0.221679" stop-color="#B32346" />
              <stop offset="0.66922" stop-color="#6A0B37" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className='Head'>
          Save Life Donate Blood
        </h1>
        <p className='HeadPara'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className='getBldBtn'>
          Get Blood Now
        </button>
        <h2 className='MissHead'>
          Our Mission
        </h2>
        <p className='MissPara'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className='Collab'>
          Our Collaborators
        </h3>
        <div className='CollabDivCont'>
          <div className='CollabDiv' id='d1'><p>NCC</p></div>
          <div className='CollabDiv' id='d2'><p>NSS</p></div>
          <div className='CollabDiv' id='d3'><p>YMCA</p></div>
        </div>
        <h3 className='HTGB'>
          How to get blood?
        </h3>
        <div className='step' id='step1'>
        </div>
        <div className='step' id='step2'></div>
        <div className='step' id='step3'></div>
        
      </div>
  
    );
  }
  
  export default Home;
  