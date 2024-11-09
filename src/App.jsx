
import './App.css'
import Parallax from './Parallax'
import logo from './assets/zara.png'
import bg1 from './assets/img1.png'
import bg2 from './assets/img2.png'
import hash from './assets/hash.png'
import men from './assets/men.png'
import women from './assets/women.png'
import spray from './assets/spray.png'
import boot from './assets/boots.jpg'
import jacket from './assets/jacket.jpg'
import shirt from './assets/shirt.jpg'

function App() {

  return (
    <>
<img style={{borderRadius: '50%', left: '40%', top: '100px', width: '300px'}} className='position-absolute start-50' src={men} alt="Men" />
<h1 style={{marginTop: '600px', marginLeft: '100px', fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', letterSpacing: '2px'}} className='position-absolute start-50 text-light'> Men</h1>

<img style={{borderRadius: '50%', left: '20%', top: '100px', width: '350px'}} className='position-absolute' src={women} alt="Women" />
<h1 style={{marginTop: '600px', marginLeft: '400px', fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', letterSpacing: '2px'}} className='position-absolute text-light'>
  Women
</h1>

<nav style={{backgroundColor: '#2a3439'}} class="navbar navbar-expand-lg navbar-light w-100">
  <div class="container-fluid w-100">
    <a class="navbar-brand" href="#"><img style={{width: '100px'}} src={logo} alt="Logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
      <div class="mx-auto navbar-nav text-center">
        <a class="nav-link active text-light mx-5 navbar-link" aria-current="page" href="#">Home</a>
        <a class="nav-link text-light mx-5 navbar-link" href="#">Features</a>
        <a class="nav-link text-light mx-5 navbar-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>


<div className="fixed bg-center bg-cover" style={{backgroundImage: `url(${bg1})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <div style={{height: '600px', paddingTop: '80px'}} className="d-flex justify-content-center align-items-center">

  </div>
</div>





      {/* <div className='bg-info' style={{width:'100%',height:'500px'}}>
<Parallax/>
</div> */}
      <div className="fixed bg-center bg-cover" style={{ backgroundImage: `url(${bg2})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ height: '700px', paddingTop: '80px' }} className="d-flex justify-content-center align-items-center">


        <div style={{marginTop:'-50px'}} className="d-flex flex-wrap justify-content-center align-items-start ">
  <div className="card mx-3" style={{width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.3s'}}>
    <img src={spray} className="card-img-top" alt="Spray" style={{borderBottom: '1px solid #ddd', transition: 'transform 0.3s'}} />
    <div className="card-body text-center" style={{padding: '20px', background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
      <h5 className="card-title" style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>Sinsa Dong Gangnam-Gu Zara</h5>
      <p className="card-text" style={{fontSize: '0.9rem', color: '#555', marginBottom: '20px'}}>
        Zara Seoul 532-8 Sinsa Dong Gangnam-Gu was launched in 2015. Aromatic Spicy fragrance for men. Top notes are Tangerine and Nutmeg,  
      </p>
      <p>₹ 4,950.00</p>

      <a href="#" className="btn btn-primary" style={{width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '25px', backgroundColor: '#FF4D03', borderColor: '#FF4D03', transition: 'background-color 0.3s'}}>
        Add To Cart
      </a>
    </div>
  </div>

  <div className="card mx-3" style={{width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.3s'}}>
    <img src={jacket} className="card-img-top" alt="Jacket" style={{borderBottom: '1px solid #ddd', height: '330px', transition: 'transform 0.3s'}} />
    <div className="card-body text-center" style={{padding: '20px', background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
      <h5 className="card-title" style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>COMBINED PATCH JACKET</h5>
      <p className="card-text" style={{fontSize: '0.9rem', color: '#555', marginBottom: '20px'}}>
      Relaxed fit varsity jacket. Elasticated collar. Long sleeves. Welt pockets at the hip and an inside pocket detail
      </p>
      <p>₹ 5,950.00</p>

      <a href="#" className="btn btn-primary" style={{width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '25px', backgroundColor: '#FF4D03', borderColor: '#FF4D03', transition: 'background-color 0.3s'}}>
        Add To Cart
      </a>
    </div>
  </div>

  <div className="card mx-3" style={{width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.3s'}}>
    <img src={shirt} className="card-img-top" alt="Boot" style={{borderBottom: '1px solid #ddd', height: '330px', transition: 'transform 0.3s'}} />
    <div className="card-body text-center" style={{padding: '20px', background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
      <h5 className="card-title" style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>CHECK POCKET OVERSHIRT</h5>
      <p className="card-text" style={{fontSize: '0.9rem', color: '#555', marginBottom: '20px'}}>
      Relaxed fit collared overshirt with long sleeves and buttoned cuffs. Featuring chest patch pockets .
      </p>
      <p>₹ 7,650.00</p>

      <a href="#" className="btn btn-primary" style={{width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '25px', backgroundColor: '#FF4D03', borderColor: '#FF4D03', transition: 'background-color 0.3s'}}>
        Add To Cart
      </a>
    </div>
  </div>

  <div className="card mx-3" style={{width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.3s'}}>
    <img src={boot} className="card-img-top" alt="Shirt" style={{borderBottom: '1px solid #ddd', height: '330px', transition: 'transform 0.3s'}} />
    <div className="card-body text-center" style={{padding: '20px', background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
      <h5 className="card-title" style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>CHELSEA BOOTS WITH POINTED TOE</h5>
      <p className="card-text" style={{fontSize: '0.9rem', color: '#555', marginBottom: '20px'}}>
      Chelsea boots. Smooth upper. Features elasticated side gores and a back pull tab for slipping on with ease. 
      </p>
      <p>₹ 8,880.00</p>
      <a href="#" className="btn btn-primary" style={{width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '25px', backgroundColor: '#FF4D03', borderColor: '#FF4D03', transition: 'background-color 0.3s'}}>
        Add To Cart
      </a>
    </div>
  </div>
</div>


        </div>
      </div>
      <div style={{ backgroundColor: '#1E1E1E', height: '400px', width: '100%', }} className="footer text-light fw-bolder  d-flex justify-content-evenly align-items-center">
        <img src={logo} alt="" />
        <div style={{fontSize:'20px'}} className="about ">
          <h6>Offices </h6>
          <h6>Stores</h6>
          <h6>About Us</h6>
          <h6>Work With Us</h6>
         
        </div>
        <div style={{fontSize:'20px'}} className="about ">
          <h6>NewsLetter </h6>
          <h6>Instagram</h6>
          <h6>faceBook</h6>
          <h6>Twitter</h6>
         
        </div>
        <div style={{fontSize:'20px'}} className="about ">
          <h6>Privacy Policies </h6>
          <h6>Purchase Conditions</h6>
          <h6>Withdrawal Form</h6>
          <h6>Gift Card Conditions</h6>
         
        </div>
      </div>
    </>
  )
}

export default App
