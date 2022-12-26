import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../../imge/logo.png';
import "./style.css"
function NavBar(){
    return(
        <>
            <sectioon className="">
                <div className='row navbarr'>
                    <div className='col-4 left'> <i class="fa fa-regular fa-xmarks-lines"></i></div>
                    <div className='col-4 center'>
                    <img src={Logo}  className="logo"/>
                    <p>FORALL</p>
                    <p>We Fill The Gap</p>
                    </div>
                    <div className='col-4 right'>
                        <div className="row">
                        <div className='col-3'>Our Services</div>
                        <div className='col-2'>About Us</div>
                        <div className='col-2'>Join Us</div>
                        </div>
                    </div>
                </div>
            </sectioon>
        </>

    )
}

export default NavBar;