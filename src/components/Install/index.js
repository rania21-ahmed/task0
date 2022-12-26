import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylei.css";
import prog from '../../imge/prog.jpg'
function Install(){
    const style={
        width: '18rem',
        height: '15rem'
    }
    return(
        <>
            <div className="row install">
                <div className="col-6 textLeft">
                    <h3>We FILL Your Gap</h3>
                    <p>We FILL Your GapWe FILL Your GapWe FILL Your Gap We FILL Your Gap We FILL Your Gap We FILL Your Gap We FILL Your Gap We FILL Your Gap We FILL Your Gap</p>
                    <button>Install Now</button>
                </div>
                <div className="col-6 textRight">
                    <img src={prog}  style={style}/>
                </div>
            </div>

        </>
    )
}
export default Install;