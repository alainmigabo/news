import React from 'react';
import '../styles/newscard.css';
import {Link} from 'react-router-dom';
import { More } from "../pages/moreonblog";
import '../styles/blog.css';
import {useDispatch} from 'react-redux';
import { holdArticle } from '../features/newsholder/holderSlice';

export const NewsCard = ({title,author,authorImage,content,houseImage,properties}) => {
    const dispatch = useDispatch();
    return(
        <div className='newsCard'>
            <div className='cardImage' style={{background:`url(${houseImage})`,backgroundPosition:'center',backgroundSize:'cover'}}></div>
            <div className='cardContent'>
                <div className='cardTitle'>
                    <div id='ownerImage' style={{background:`url(${authorImage})`,backgroundPosition:'center',backgroundSize:'cover'}}></div>
                    <div id='blogTitle'>
                        <div id='newstitle'>{title}</div>
                        <div id='authorName'>{"By " + author}</div>
                    </div>                 
                </div>
                <div id='blogContent'>{content}</div>
                <Link to="/dashboard/news/blog" element={<More/>}><button onClick={()=>{
                    dispatch(holdArticle(properties))
                }}>Read More</button></Link>
            </div>
        </div>
    )
}