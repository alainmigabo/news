import React from 'react';
import {RichNavigation} from '../components/richnavigation';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {RelatedBox} from '../components/morereadcard';
import {Footer} from '../components/footer';
import {useSelector} from 'react-redux';

export const More = ({image,authorImage,richcontent,author}) => {
    const {article: blog} = useSelector((state)=> state.holder)
    return(
        <div>
            <RichNavigation/>
            <div className="moreImage" style={{background:`url(${blog.urlToImage})`,backgroundPosition:'center',backgroundSize:"cover"}}>
                <div className="moreOwner" style={{background:`url(${"https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg"})`,backgroundPosition:'center',backgroundSize:'cover'}} ></div>
                <div className='moreAddress'>{blog.source.name}</div>
            </div>
            <div className='blogMessage'>{blog.content}</div>
            <div className='shareSection'>
                Share This
                <div className='shareIcons'>
                    <div className='shareIcon'><FaFacebookF/></div>
                    <div className='shareIcon'><AiOutlineTwitter/></div>
                    <div className='shareIcon'><FaLinkedinIn/></div>
                </div>
            </div>
            <div className='relatedPosts'>
                <div className='title'>Related Posts</div>
                <div className='relatedBoxes'>
                    <RelatedBox/>
                    <RelatedBox/>
                    <RelatedBox/>
                </div>
                <div className='backbox'>
                    <div className='icon'><IoIosArrowBack/></div>
                    <div className='backMessage'> New Development: The Crosby Estates At Rancho Sante Fe</div>
                </div>
                <div className='nextbox'>
                    <div className='nextMessage'>New Development: The Bluffs at La Jolla Shores</div>
                    <div className='icon'><IoIosArrowForward/></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}