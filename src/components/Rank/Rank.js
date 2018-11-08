import React from 'react';

class Rank extends React.Component {
    constructor() {
        super();
        this.state ={ show: true}
    }

    handleShow = () => {
        this.setState({
            show:false
        })
    }
    render() {
    const {name, entries} = this.props;

    return (
    <div>
        <div className='near-black f3 pb2 tracked'>
            {name==='Anonymous'?
            <span onClick={this.handleShow} className={this.state.show?'f5 light-gray':'dn'}>{`Hi, if you would like to have your place in score table and collect points, please register :)`} <h6 className='f7 pa1 ma0 white'>click to hide</h6></span>
            :`${name}, your current score is:`}
        </div>
        <div className='white f1 '>
            {name==='Anonymous'?null:entries}
        </div>
    </div>
    )
}
}

export default Rank;