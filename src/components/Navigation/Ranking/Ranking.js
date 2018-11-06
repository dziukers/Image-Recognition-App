import React from 'react'
import Modal from 'react-modal';
import './Ranking.css';

let rankingTable =Array.apply(null, { length: 10 }).map((user, i) => {
    return (
    <tr key={i+1}>
      <td>{i+1}</td>
      <td></td>
      <td></td>
      <td></td>
</tr>)});
Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)',
      margin:'0 auto',
      padding: '10px',
      maxHeight:'80vh'
    }
  };

class Ranking extends React.Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          ranking: []
        };
      }
      componentDidMount() {
        
      }
      openModal = () => {
        fetch('http://localhost:4000/ranking')
        .then(resp => resp.json())
        .then(users => this.setState({
            ranking: users
        }))
        
      
      this.setState({modalIsOpen: true})
    }
      closeModal= () => {
        this.setState({modalIsOpen: false});
      }
     
      render() {
          const {ranking} = this.state;
            ranking.map((user, i) => {
           rankingTable[i] = 
           <tr key={i+1}>
           <td>{i+1}</td>
           <td>{user.name}</td>
           <td>{user.entries}</td>
           <td>{user.email.replace(user.email.slice(1,user.email.indexOf('@')-2), '*****')}</td>
            </tr>
            })
        return (
          <div>
            <p className='f4 link dim black underline pa3 pointer' onClick={this.openModal}>Ranking</p>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Ranking"
            >
     
              <h2 className='ranking-header' ref={subtitle => this.subtitle = subtitle}></h2>
              <button className='absolute right-0 top-0 bn pa1 bg-washed-blue hover-light-red' onClick={this.closeModal}>close</button>
              <table>
    <thead>
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
    {rankingTable}
    </tbody>
</table>
            </Modal>
          </div>
        );
      }
    }

export default Ranking;