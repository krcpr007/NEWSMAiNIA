import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultPropes = {
        country: "in",
        pageSize: 8,
        category: "general",
        
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        news_type:PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5351d3ed6f0744fcbd8f3d6f9d05078d&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })

        let data = await fetch(url);
        let parasedData = await data.json();
        this.setState({ articles: parasedData.articles, totalResults: parasedData.totalResults, loading: false })
    }
    handleNextclick = async () => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5351d3ed6f0744fcbd8f3d6f9d05078d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })

            let data = await fetch(url);
            let parasedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parasedData.articles,
                loading: false
            })
        }

    }
    handlePrevclick = async () => {
        console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5351d3ed6f0744fcbd8f3d6f9d05078d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })

        let data = await fetch(url);
        let parasedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parasedData.articles
        })
        this.setState({
            page: this.state.page - 1,
            loading: false
        })
    }
    render() {
        return (
            <div className="container my-3">
                <h1>Top Headlines</h1>
                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between ">
                <button className="btn btn-sm btn-dark" type="button" disabled={this.state.page <= 1} onClick={this.handlePrevclick} >
                       {this.state.loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                       &larr; Prev
                    </button>
                    <button className="btn btn-sm btn-dark" type="button"  disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} onClick={this.handleNextclick}>
                       {this.state.loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                       Next &rarr;
                    </button>
                </div>
            </div>
        )
    }
}
export default News
