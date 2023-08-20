import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Watchlist() {
    
  var [news, setNews] = useState([]);
  async function fetchingNews(){
    let response = await fetch(
        "http://localhost:5000/getNews"
      );
      const data = await response.json();
    setNews(data);
  }

  async function removeNews(newsId){
    fetch("http://localhost:5000/removeNews",{
        method:'POST',
        headers : {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({_id:newsId})  
    }).then(fetchingNews()).catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    fetchingNews();
  },[])

  return (
    <div className="container bg-gray-950">
        {news.length > 1
          ? news.map((element, index) => {
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
                    <button className="addtolater text-violet-400 mt-5" onClick={()=>removeNews(element._id)}>Remove</button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
  )
}

export default Watchlist