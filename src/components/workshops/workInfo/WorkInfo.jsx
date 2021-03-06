import React, { Component } from "react";
import { connect } from 'react-redux';
import { setHackathonList } from '../../../actions/Thunks/thunk';
import { toast } from 'react-toastify';


import Fb from "../../../assets/fb.svg";
import Insta from "../../../assets/insta.svg";
// import TimeLine from "../../../assets/hackInfo/timeline.png";
import Doodle from "../../../assets/hackInfo/Doodle.png";
import Ripple from "../../../assets/hackInfo/Ripple.png";
import UpperImage from "../../../assets/hackInfo/UpperImage.png";



class WorkInfo extends Component {

  // componentDidMount() {
  // 	this.props.setHackathonList();
  // }

  render() {

    let title, description, poster, id, ps, prize, regLink;
    if (this.props.workshops) {
      for (let i = 0; i < this.props.workshops.events.length; ++i) {
        const workItem = this.props.workshops.events[i];
        console.log(workItem);
        if (workItem.id == this.props.match.params.id) {
          [title, description, poster, id, regLink] = [workItem.title, workItem.description, workItem.imageLink, workItem._id, workItem.regLink];
          console.log("title is" + title)
        }
      }

    }

    return (
      <>
        <img src={UpperImage} id="upper-image" />
        <img src={Ripple} id="ripple" />
        <img src={Doodle} id="doodle" />
        <div className="my-social">
          <a target="_blank" href="https://www.facebook.com/daksh.sastra/"><img src={Fb} className="social-icon" /></a>
          <a target="_blank" href="https://www.instagram.com/daksh2k20/"><img src={Insta} className="social-icon" /></a>
          <div className="line" />
        </div>
        <div className="hackinfo-area">
          <div className="top-part row">
            <div className="hack-text col-md-8">
              <header className="my-header">
                <div className="my-title">
                  {title}
                </div>
                {/* <div className="my-prize">
									{prize ? `Prize Pool: INR ${prize}` : ''}
								</div> */}
              </header>
              <p className="hack-desc">{description}</p>
              <div className="btn-grp">
                {/* <a className="btn btn-blue" target="_blank" href={ps}>Problem Description</a> */}
                {
                  // this.props.authState
                  <a href={regLink}> <button className="btn btn-red" data-toggle="modal" data-target="#hackregister"> Register</button></a>
                  // : <button className="btn btn-red" onClick={() => { toast.error("Please login to register for hackathons") }}>Register</button>
                }
              </div>
            </div>
            <div className="col-md-4 poster-wrapper">
              <img src={poster} className="img-fluid poster rounded" />
            </div>
          </div>
          {/* <div className="bottom-part">
            <img id="timeline" src={TimeLine} className="img-fluid" />
          </div> */}
        </div>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    workshops: state.otherEvents.workshop,
    authState: state.user.authStatus
  }
}

export default connect(mapStateToProps)(WorkInfo);
