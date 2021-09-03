import React from "react";
import bushistory from "../../resources/bushistory.json";
import Menu from "../../common/menu/Menu";
import "./Ticket.css";
import { withRouter } from "react-router-dom";
import Header from "../../common/header/Header";
import userdata from '../../resources/userhistory.json'




class Ticket extends React.Component {
  constructor() {
    super();
    {
      this.state = { isbool: true };
    }
    this.submit = this.submit.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  submit() {
    let bushistoryPushDetails;
    let busDetails = JSON.parse(localStorage.getItem("busdetails"));
    let searchDetails = JSON.parse(localStorage.getItem("searchdetails"));
    let passengerName = JSON.parse(localStorage.getItem("PassengerName"));
    busDetails.NoOfSeats =busDetails.NoOfSeats - localStorage.getItem("seatcount");
    bushistoryPushDetails = {
      id: searchDetails.id,
      mobile: localStorage.getItem("mobile"),
      userId: searchDetails.userid,
      busno: busDetails.busno,
      busname: busDetails.busname,
      totalfare: localStorage.getItem("seatcount") * busDetails.fare,
      numberofseats: localStorage.getItem("seatcount"),
      date: searchDetails.date,
      from: searchDetails.from,
      to: searchDetails.to,
    };
    bushistory.userbusbooking.push(bushistoryPushDetails);
    let setReservedseats = JSON.parse(localStorage.getItem("seats"));
    let userpushDetails;
    userpushDetails = {
      userbusbookingid: searchDetails.id,
      name:passengerName ,
      mobile: localStorage.getItem("mobile")
    };
    userdata.buspassanger.push(userpushDetails)
    this.setState({
      isbool: false,
    });
    this.props.history.push('/user-history')
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    let passenger;
    let busDetails = JSON.parse(localStorage.getItem("busdetails"));
    let searchDetails = JSON.parse(localStorage.getItem("searchdetails"));
    let passengerName = JSON.parse(localStorage.getItem("PassengerName"));
    return (
      <div>
        <Header />
        <Menu />
        <div class="ticket">
          <button class="goBack" onClick={this.goBack}>
            BACK
          </button>
          <h1>Booking Details</h1>
          <label class="info">
            Userbookingid:<span class="info1"> {searchDetails.userid}</span>
          </label>

          <br></br>
          <label class="info">
            Name:
            <span class="info1">
              {
                (passenger = passengerName.map((elem, i) => {
                  return i + 1 + "." + elem + " ";
                }))
              }
            </span>
          </label>
          <br></br>
          <label class="info">
            Mobile:<span class="info1">{localStorage.getItem("mobile")}</span>
          </label>
          <br></br>
          <label class="info">
            Seatno:<span class="info1">{localStorage.getItem("seats")}</span>{" "}
          </label>
          <br></br>
          <label class="info">
            Date:<span class="info1">{searchDetails.date}</span>{" "}
          </label>
          <br></br>
          <label class="info">
            Fare:
            <span class="info1">
              {localStorage.getItem("seatcount") * busDetails.fare}
            </span>{" "}
          </label>
          <br></br>
          <label class="info">
            From:<span class="info1">{searchDetails.from}</span>
          </label>
          <br></br>
          <label class="info">
            To:<span class="info1">{searchDetails.to}</span>
          </label>
          <br></br>
          <label class="info">
            Bus No:<span class="info1"> {busDetails.busno}</span>
          </label>
          <br></br>
          <label class="info">
            Bus name:<span class="info1"> {busDetails.busname}</span>
          </label>
          <br></br>
          <button onClick={this.submit}> proceed to pay</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Ticket);
