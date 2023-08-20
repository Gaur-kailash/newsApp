import React, { useEffect, useState } from "react";
// import loadingGif from "./ZZ5H.gif";
import { DotWave } from "@uiball/loaders";
import { Link, useParams, useLocation } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";

function Home() {
  let params = useParams();
  let location = useLocation();
  let [news, setNews] = useState({ articles: [] });
  let [page, setPage] = useState(1);
  let [searchText,setText] = useState("");
  let [totalResults, setResults] = useState(1);
  let [totalPages, setTotalPages] = useState(1);
  let [category, setCategory] = useState("general");
  let [loader, setLoader] = useState(false);
  let [fetchingUrl,setUrl] = useState("");
  let apiKey = "&apiKey=8a07d8011e3b40309873d88201df37dd";
  let response;
  async function fetchingNews() {
    setLoader(true);
    if (location.pathname == "/") {
      setUrl(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=9&page=${page}`);
      response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=9&page=${page}${apiKey}`
      );
    } else {
      if (params.category === undefined) {
        setUrl(`https://newsapi.org/v2/top-headlines?country=${params.country}&category=general&pageSize=9&page=${page}`);
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${params.country}&category=general&pageSize=9&page=${page}${apiKey}`
        );
      } else {
        setUrl(`https://newsapi.org/v2/top-headlines?country=${params.country}&category=${params.category}&pageSize=9&page=${page}`)
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${params.country}&category=${params.category}&pageSize=9&page=${page}${apiKey}`
        );
      }
    }
    const data = await response.json();
    setNews(data);
    setResults(data.totalResults);
    let pages = Math.round(data.totalResults / 9);
    setTotalPages(pages);
    setLoader(false);
    console.log(data);
  }

  async function handlePrevious() {
    setLoader(true);
    if (location.pathname == "/") {
      setUrl(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=9&page=${
        page - 1
      }`)
      response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=9&page=${
          page - 1
        }${apiKey}`
      );
    } else {
      setUrl(`https://newsapi.org/v2/top-headlines?country=${
        params.country
      }&category=general&pageSize=9&page=${
        page - 1
      }`)
      if (params.category === undefined) {
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${
            params.country
          }&category=general&pageSize=9&page=${
            page - 1
          }${apiKey}`
        );
      } else {
        setUrl(`https://newsapi.org/v2/top-headlines?country=${
          params.country
        }&category=${params.category}&pageSize=9&page=${
          page - 1
        }`)
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${
            params.country
          }&category=${params.category}&pageSize=9&page=${
            page - 1
          }${apiKey}`
        );
      }
    }
    const data = await response.json();
    setNews(data);
    setPage(page - 1);
    setResults(data.totalResults);
    let pages = Math.round(data.totalResults / 9);
    setTotalPages(pages);
    setLoader(false);
  }
  async function handleNext() {
    setLoader(true);
    if (location.pathname == "/") {
      setUrl(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=9&page=${
        page + 1
      }`)
      response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=9&page=${
          page + 1
        }${apiKey}`
      );
    } else {
      setUrl(`https://newsapi.org/v2/top-headlines?country=${
        params.country
      }&category=general&pageSize=9&page=${
        page + 1
      }`)
      if (params.category === undefined) {
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${
            params.country
          }&category=general&pageSize=9&page=${
            page + 1
          }${apiKey}`
        );
      } else {
        setUrl(`https://newsapi.org/v2/top-headlines?country=${
          params.country
        }&category=${params.category}&pageSize=9&page=${
          page + 1
        }`)
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${
            params.country
          }&category=${params.category}&pageSize=9&page=${
            page + 1
          }${apiKey}`
        );
      }
    }
    const data = await response.json();
    setPage(page + 1);
    setNews(data);
    setResults(data.totalResults);
    let pages = Math.round(data.totalResults / 9);
    setTotalPages(pages);
    setLoader(false);
  }
  async function addtoWatch(urlToImage,title,description,url){
    let result = await fetch("http://localhost:5000/addNews",{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({urlToImage,title,description,url})
    })
    result = await result.json();
    console.log(result);
  }
  async function handleSearch(){
    setLoader(true);
    let searchedUrl = `${fetchingUrl}&q=${searchText}${apiKey}`;
    console.log(searchedUrl)
    response = await fetch(searchedUrl);
    const data = await response.json();
    setNews(data);
    setResults(data.totalResults);
    setLoader(false);
    let pages = Math.round(data.totalResults / 9);
    setTotalPages(pages);
  }

  useEffect(() => {
    console.log(location.pathname);
    fetchingNews();
  }, [location]);
  return (
    <div id="home"  className="bg-gray-950">
      <header className="header">
        <Link to="/watchlist"className="btns">Watchlist</Link>
        {/* <h1>Top Headlines are Here !</h1> */}
        <div className="form">
          <input type="text" className="search-bar" onChange={(e)=>{
            setText(e.target.value);
            console.log(searchText);
          }} placeholder="Search here" />
          <button className="btns" onClick={handleSearch}>Search</button>
        </div>
      </header>
      {/* {loader && <img src={loadingGif} alt="Loading..." />} */}
      {loader && (
        <center>
          <DotWave size={50} speed={1} color="white" />
        </center>
      )}
      <div className="container">
        {news.articles.length > 1
          ? news.articles.map((element, index) => {
              return (
                <div key={index} className="news-container bg-gray-900 max-w-sm rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="news-img w-full"
                    src={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=2048x2048&w=gi&k=20&c=sPie4Vi4Emn0mo7dYK33Ac3Mh5TnujvRMq0BEoOYjxk="
                    }
                    alt="img"
                  />
                  <h4 className="title text-white font-bold text-xl leading-6 my-2">
                    {element.title ? element.title.slice(0, 55) : ""}...
                  </h4>
                  <p className="desc text-gray-500">
                    {element.description
                      ? element.description.slice(0, 95)
                      : ""}
                    ...
                  </p>
                  <div className="btn-div">
                  <Link
                    target="_blank"
                    to={element.url}
                    class="relative inline-flex items-center justify-center mt-4 mb-2   py-1 px-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Read more
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </Link>
                    <Link className="addtolater text-violet-400 mt-5" onClick={()=>{
                      addtoWatch(element.urlToImage,element.title,element.description,element.url)
                    }}>Add to watchlist</Link>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      <div className="btn-div">
        <button disabled={page === 1} onClick={handlePrevious} className="btns">
          {" "}
          &larr;Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={handleNext}
          className="btns"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default Home;
