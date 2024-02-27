// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

// function Navbar(props) {
//   const { sections, title } = props;

//   return (
//     <React.Fragment>
//       <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} style={{backgroundColor:"grey"}}>
//         <Button size="small">Subscribe</Button>
//         <Typography
//           component="h2"
//           variant="h5"
//           color="inherit"
//           align="center"
//           noWrap
//           sx={{ flex: 1 }}
//         >
//           {/* {title} */}
//           NEWS APPLICATION
//         </Typography>
//         <IconButton>
//           <SearchIcon />
//         </IconButton>
//         <Button variant="outlined" size="small">
//           Sign up
//         </Button>
//       </Toolbar>
//       <Toolbar
//         component="nav"
//         variant="dense"
//         sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
//       >
//                     {/* NEWS APPLICATION */}

//         {/* {sections?.map((section) => (
//           <Link
//             color="inherit"
//             noWrap
//             key={section.title}
//             variant="body2"
//             href={section.url}
//             sx={{ p: 1, flexShrink: 0 }}
//           >
//             {section.title}
//             NEWS APPLICATION
//           </Link>
//         ))} */}
//       </Toolbar>
//     </React.Fragment>
//   );
// }

// Navbar.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Navbar;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link to="/">
  <a class="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + '/icons8-news-64.png'} alt="Bootstrap" style={{width:"30px", height:"34px"}}/></a>
    <a class="navbar-brand" href="#">NEWS APPLICATION</a>
    </Link>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">helol</span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to="/advertising">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ADVERTISING</a>
        </li>
        </Link>
        <Link to="/publishers"> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">PUBLISHERS</a>
        </li>
        </Link>
       
        
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
        {/* <li class="nav-item dropdown">  
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <IconButton>
          <SearchIcon />
         </IconButton>
         <Link to="/signup">
         <Button variant="outlined" size="small">
           Sign up for daily updates
         </Button>
         </Link>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar

