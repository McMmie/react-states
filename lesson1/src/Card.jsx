import prof from './assets/badge.png';
import shadow from './assets/Shaddow.jpg';
function Card() {
    return(
        <div className="card">
        <img src={shadow} alt="campaign card" />
        <h2>Cyber Security Campaign</h2>
        <p>This is a Cyber Security campaign</p>
        <p>Status: <b>Applied</b></p>
        <button className='view'><h3>View</h3></button>
    </div>

    )

}

export default Card;