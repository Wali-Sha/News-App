import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Card.css';
export default function Card({ cat }) {
  const [data, setData] = useState([])
  const fetchdata = async () => {
    await axios.get(
      cat ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=16e3d729276b468a960bfbbf1aacaa26` :
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=16e3d729276b468a960bfbbf1aacaa26").then((res) => setData(res.data.articles))
  }
  useEffect(() => {
    fetchdata();
  }, [cat])
  return (
    <>
      <div className='container'>
        <div className="row">
          {
            data.map((value) => {
              return (
                <>
                  <li className="cards_item my-5">
                    <div className="card">
                      <div className="card_image">
                        <img src={value.urlToImage} />
                      </div>
                      <div className="card_content">
                        <h2 className="card_title">{value.title}</h2>
                        <p className="card_text">{value.author}</p>
                        <p className="card_text">{value.publishedAt}</p>
                        <a href={value.url} target="blank"><button className="btn card_btn">Read More</button></a>
                      </div>
                    </div>
                  </li>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}