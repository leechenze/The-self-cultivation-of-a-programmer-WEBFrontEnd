import React, {useState} from 'react';
import Buttons from './Buttons';
import Color from './Color';
import ShowArea from './ShowArea';

function Index() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Index;