import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        
        <div className="footer">
            <p>© 2021 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
            <div className="social_media">
               <FacebookIcon className="socialMediaIcons">
                   <a href="https://facebook.com"/>
               </FacebookIcon>
               <TwitterIcon className="socialMediaIcons">
                   <a href="https://twitter.com"/>
               </TwitterIcon>
               <InstagramIcon className="socialMediaIcons">
                   <a href="https://instagram.com"/>
               </InstagramIcon>

            </div>
        </div>
    )
}

export default Footer
