import React from "react";
import Poster from "./Poster";
import "./FilmCard.css";
import Rating from "./Rating";

class FilmCard extends React.Component {
    render() {
        return(
            <div className="film-card">
                <Poster src={this.props.poster} link={this.props.path} />
                <div className="film-card__container">
                    <a href={this.props.path}>
                        <h2 className="film-card__title">{this.props.title}</h2>
                    </a>
                    <div className="film-card__under-title">
                        <span>{this.props.released}</span>
                        <span>{this.props.runningTime}</span>
                        <span>{this.props.genre}</span>
                        <Rating rating={this.props.rating} />
                    </div>
                    <p className="film-card__logline">
                        {this.props.logline}
                    </p>
                    <a className="film-card__read-more" href={this.props.path}>
                        Read more
                    </a>
                </div>
            </div>
        );
    }
}

export default FilmCard;