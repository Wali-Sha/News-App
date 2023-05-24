import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";
function Search() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchTopHeadlines();
  }, []);
  const fetchTopHeadlines = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=16e3d729276b468a960bfbbf1aacaa26")
      .then((res) => {
        console.log(res.data);
        setNews(res.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    if (searchQuery) {
      axios
        .get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=16e3d729276b468a960bfbbf1aacaa26`)
        .then((res) => {
          console.log(res.data);
          setNews(res.data.articles);
        })
        .catch((error) => {
          console.error("Error fetching news:", error);
        });
    } else {
      fetchTopHeadlines();
    }
  };
  return (
    <div className="container my-5">
      <div className="row text-center">
      <h1 className="headingS mb-2"><b>Find the news that matters to you</b></h1>
        <form className="mb-3">
          <input
          className="searchn"
            type="text"
            placeholder="Search news"
            onChange={handleSearch}
          />
        </form>
        { (
          news.map((value) => (
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
          ))
        )}
      </div>
    </div>
  );
}
export default Search;