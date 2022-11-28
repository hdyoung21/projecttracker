import { Link } from 'react-router-dom';
import img from "../assets/404.jpg";

const Error = () => {
    return (
    <div>
        <img src={img} alt='page not found' />
        <h3>Page Not Found</h3>
        <Link to='/'>Back to Home</Link>
    </div>
    )
}

export default Error; 