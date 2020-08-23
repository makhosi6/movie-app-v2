import React, { Component } from 'react';
import Img from './Img';

class Pass extends Component {

    render() {
        let base = "https://image.tmdb.org/t/p/w780/"
        return this.props.info.map((each) => ( <
            Img year = { each.release_date }
            votes = { each.popularity }
            url = { base + each.poster_path }
            id = { each.id }
            key = { each.id }
            pre = { each.overview }
            title = { each.title }

            />

        ));

    }
}


export default Pass;