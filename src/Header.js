import React,{useState} from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';

function Header() {
    const [toggleBox,setTogglebox] = useState(false);
    const toggleHandler = () =>{
        setTogglebox(!toggleBox)
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                {toggleBox? <ExpandLess onClick={toggleHandler}/>:<ExpandMoreIcon onClick={toggleHandler}/>}
                
                <Avatar />
            </div>
        </div>
    )
}

export default Header
