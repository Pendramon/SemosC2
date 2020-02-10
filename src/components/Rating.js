import React from "react";
import "./Rating.css";

class Rating extends React.Component {
    render() {
        let stars = [];
        for (let i = 0; i < 10; i++) {
            let classList = "star ";
            if (i < ~~this.props.localRating) {
                classList += "star--local-rated ";
            } 
            if (i < ~~this.props.rating) {
                classList += "star--rated ";
            }
            let star = <span key={i} className={classList} onClick={this.handleRatingClick}></span>
            stars.push(star);
        }

        stars.reverse();

        return(
            <div className="rating">
                <div className="rating__stars">
                    {stars}
                </div>
                <span className="rating__number">8.9</span>
            </div>
        );
    }

    handleRatingClick(e) {
        let clickedChild = e.target;
        let parent = clickedChild.parentNode; 
        let children = parent.children;
        let childIndex = Array.prototype.indexOf.call(parent.children, clickedChild);
        
        Array.from(children).forEach((child) => {
            if (Array.prototype.indexOf.call(parent.children, child) >= childIndex) {
                child.classList.add("star--local-rated");
            } else {
                child.classList.remove("star--local-rated");
            }
        });
    }
}

export default Rating;