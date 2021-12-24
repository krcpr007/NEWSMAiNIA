import React from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
function Search() {
  const [text, setText] = useState("");
  const [heading, setHeading] = useState(true);
  const [loader, SetLoader] = useState(false);
  const [data, setData] = useState([]);
  const hadnleOnclick = (e) => {
    e.preventDefault();
    fetch(
      `https://newsapi.org/v2/everything?q=${text}&apiKey=5351d3ed6f0744fcbd8f3d6f9d05078d`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.articles);
        setData(json.articles);
        
      });

    //  @todo we have to erase the text inside the input

    setHeading(false);
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Search any news</h2>
        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Search News"
            aria-label="Search"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            onClick={hadnleOnclick}
            className="btn btn-outline-dark"
          >
            Go
          </button>
        </form>
        {heading ? <h2>Your news Will show here </h2> : null}

        {loader ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border ml-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        ) : null}

        <div className="row">
          {data.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
