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

class Ranking extends React.Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          ranking: [],
          loadingRanking:true
        };
      }
      openModal = () => {
        fetch('https://fast-caverns-20871.herokuapp.com/ranking')
        .then(resp => resp.json())
        .then(users => this.setState({
            ranking: users,
            loadingRanking: false
        }))
      this.setState({modalIsOpen: true})
    }
      closeModal= () => {
        this.setState({modalIsOpen: false});
      }
     
      render() {
          const {ranking, loadingRanking} = this.state;
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
            <p className='f4 link dim dark-gray pa3 pointer' onClick={this.openModal}>Ranking</p>

            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className
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
                {loadingRanking? 
              <div >Loading...</div>
              :
                <tbody >
                {rankingTable}
                </tbody>
                }
                </table>    
            </Modal>
          </div>

        );
      }
    }

export default Ranking;