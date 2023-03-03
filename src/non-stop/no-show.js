import React from 'react';
import Modalling from './non-stop/protal.jsx';
import Effect from './non-stop/effect'
import './App.css';



// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showModal: false};
    
//     this.handleShow = this.handleShow.bind(this);
//     this.handleHide = this.handleHide.bind(this);
//   }

//   handleShow() {
//     this.setState({showModal: !this.state.showModal});
//   }
  
//   handleHide() {
//     this.setState({showModal: false});
//   }

//   render() {
//     const modal = this.state.showModal ? (
//       <Modalling>
//           <div className="modal">
//             <div className="flex space-y-6 shadow-2xl flex-col pt-2 justify-center bg-white rounded p-3 m-4 h-1/3">
//                 <div className="pt-3">
//                   With a portal, we can render content into a different
//                   part of the DOM, as if it were any other React child.
//                 </div>
//                 <div className="pt-3 pb-3">
//                   This is being rendered inside the #modal-container div.
//                 </div>
//                 <button className="bg-fuchsia-500 hover:bg-fucshia-900 p-2 pt-4 mx-5 text-white rounded-lg" onClick={this.handleHide}>Hide modal</button>
//             </div> 
//           </div>
//       </Modalling>
//     ) : null;

//     return (
//       <div>
//         <div className="app">
//           This div has overflow: hidden.
//           <button className="bg-cyan-500 hover:bg-cyan-600 p-2 mx-5 text-white rounded" onClick={this.handleShow}>Show modal</button>
//           {modal}
//         </div>
//         <Effect/>
//       </div>
//     );
//   }
// }

class NoStop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({showModal: !this.state.showModal});
    }
    
    handleHide() {
        this.setState({showModal: false});
    }

    render() {
        const modal = this.state.showModal ? (
            <Modalling>
                <div className="modal">
                    <div className="flex space-y-6 shadow-2xl flex-col pt-2 justify-center bg-white rounded p-3 m-4 h-1/3">
                        <div className="pt-3">
                        With a portal, we can render content into a different
                        part of the DOM, as if it were any other React child.
                        </div>
                        <div className="pt-3 pb-3">
                        This is being rendered inside the #modal-container div.
                        </div>
                        <button className="bg-fuchsia-500 hover:bg-fucshia-900 p-2 pt-4 mx-5 text-white rounded-lg" onClick={this.handleHide}>Hide modal</button>
                    </div> 
                </div>
            </Modalling>
        ) : null;

        return (
            <div>
                <div className="app">
                This div has overflow: hidden.
                <button className="bg-cyan-500 hover:bg-cyan-600 p-2 mx-5 text-white rounded" onClick={this.handleShow}>Show modal</button>
                {modal}
                </div>
                <Effect/>
            </div>
        );
    }
}

export default NoStop;
