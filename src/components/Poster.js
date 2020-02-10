import React from "react";

class Poster extends React.Component {
    render() {
        return(
            <div>
                <a href={this.props.link}>
                    <img src={this.props.src} alt="Poster not found"/>
                </a>
            </div>
        );
    }
}

export default Poster;