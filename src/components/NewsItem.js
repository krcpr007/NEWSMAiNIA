import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title ,description, imgUrl ,newsUrl, author , date} = this.props ;
        return (
            <div>
                <div className="card m-2" >
                    <img src={!imgUrl?"https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png":imgUrl} className="card-img-top p-1" alt="..."/>
                        <div className="card-body ">
                            <h5 className="card-title">{title}...<span className="badge bg-primary rounded-pill">New</span></h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
         )
    }
}

export default NewsItem
