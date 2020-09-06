import React from 'react';

let docDom = document.createElement('div', {title: 'docDOM'}, 'docDOM');
let reactDom = React.createElement('div', {title: 'reactDOM'}, 'reactDOM');

let docDomLength = docDom.length || docDom.size || 0;
let reactDomLength = reactDom.length || reactDom.size || 0;

for(let key in docDom) {
    docDomLength++;
}
for(let key in reactDom) {
    reactDomLength++;
}


export default class ReactDomAndNativeDOM extends React.Component {
    render () {
        console.log(docDom);
        console.log(reactDom);
        return (
            <div id="ReactDomAndDocDOM">
                <p>
                    The reactDOM length is {reactDomLength}
                </p>
                <p>
                    The DocDOM length is {docDomLength}
                </p>
            </div>
        )
    }
}