import React, { Component } from 'react';
import SliderTemplates from './slider_template';

import style from './style.css';

class Slider extends Component {
    render() {
        const data=[
            {"item":1},
            {"item":2},
            {"item":3}
        ]


        return (
            <div>
                <SliderTemplates data={data} type={'featured'}                     start={0}
                    amount={3}  settings={{dots:true}} />
            </div>
        );
    }
}

export default Slider;