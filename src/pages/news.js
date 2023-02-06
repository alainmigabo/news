import React from 'react';
import {RichNavigation} from '../components/richnavigation';
import { ChatSection } from "../components/chat";
import '../styles/news.css';
import { NewsCard } from "../components/newscard";
import { Footer } from "../components/footer";
import axios from 'axios';
import { useState,useEffect } from 'react';

export const News = () => {
    const [news,setNews] = useState([]);
    useEffect(() => {
        getData();
    },[]);
    const getData = () => {
        axios({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=302cab8a146f44a49326e279a6e77809"
        }).then((outcome) => {
            setNews(outcome.data.articles);
        }).catch((error) => {console.log(error);
        })
    }
    let newcontent;
    return (
        <div>
            <ChatSection/>
            <RichNavigation/>
            <div className='blog-header'>
                <div style={
                    {height: 16,width: "100%"}
                }></div>
                <div className="blog">Our Blog</div>
                <div className="under-blog">The Latest Real Estate News And Insights From San Diego, And Beyond.</div>
            </div>
            <div className="news-cards-container">
                {
                news && news.map((element) => {
                    if ((element.urlToImage != null)&&(element.content != null)) {
                        if(element.content?.length > 350) {
                            newcontent = element.content.slice(0,340)
                            return(
                                <NewsCard title={element.title} author={element.source.name} authorImage={"https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg"} houseImage={element.urlToImage} content={newcontent + "[...]"}/>
                                );
                        }
                        else {
                            return(
                                <NewsCard title={element.title} author={element.source.name} authorImage={"https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg"} houseImage={element.urlToImage} content={element.content}/>
                                );
                        }
                        
                    }
                    })
                }        
            </div>
            <Footer/>
        </div>
    )
}