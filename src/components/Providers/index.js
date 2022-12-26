import 'bootstrap/dist/css/bootstrap.min.css'
import theImgeA from '../../imge/aramex.png';
import theImgeAmazon from '../../imge/amazon.png';
import theImgeHi from '../../imge/hitachi.png';
import './style.css'
function Proveder(){
    const card={
        width: '9rem',
        background:'#4674c8',
        padding:'1rem'
    } 
    return(
        <>
            <secton className="provider container">
                <h2>our Proveder</h2>
                <div className='bgprovider'>
                <div className="secProvider row">
                   
                   <div className='col-4'>
                        <div className="card"  style={card}>
                                <img src={theImgeA} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Aramex</p>
                                </div>
                        </div>
                   </div>
                   <div className='col-4'>
                    
                        <div className="card col-4 h-100"  style={card}>
                            <img src={theImgeAmazon} className="card-img-top w-100" />
                            <div className="card-body">
                                <p className="card-text">Amazon</p>
                            </div>
                        </div>
                   </div>

                   <div className='col-4'>
                    <div className="card col-4 h-100"  style={card}>
                            <img src={theImgeHi} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">hitachi</p>
                            </div>
                        </div>
                   </div>
                    

                </div>
                </div>
                
            </secton>
        </>
    )
}

export default Proveder;