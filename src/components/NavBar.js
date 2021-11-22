import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../redux/actions/userActionCreators';

const Navbar = ({logout}) => {
    return (
        <div className="navbar">
            <ul>
                <li><button onClick={logout}>Logout</button></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/months">Months</Link></li>
            </ul>
        </div>
    );
}

export default connect(null, {logout})(Navbar);
   
// import React from 'react';
// import {Link} from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/months">Months</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;
