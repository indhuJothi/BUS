import React, { Component } from "react";
import Table from "../../common/table/NewTable";
import "./BuslistTable.css";
import Menu from "../../common/menu/Menu";
import { withRouter } from "react-router";
let storedBusdata;
let getBusdata;
let columns = [
  {
    heading: "Bus Name",
    property: "busname",
  },
  {
    heading: "Bus No",
    property: "busno",
  },
  {
    heading: "Fare",
    property: "fare",
  },
  {
    heading: "From",
    property: "from",
  },
  {
    heading: "Available Seats",
    property: "NoOfSeats",
  },
  {
    heading: "To",
    property: "to",
  },
  {
    heading: "Type",
    property: "type",
  },
  {
    heading: "Book Ticket",
    property: "button",
  },
];

class TableData extends Component {
  constructor(props) {
    super(props);
    {
      this.bookTicket = this.bookTicket.bind(this);
    }
  }
  bookTicket(isTrue) {
    if (isTrue) {
      const { history } = this.props;
      if (history) history.push("/book-seat");
    }
  }

  render() {
    let busdatas = JSON.parse(localStorage.getItem("busdetails"));
    let bookTicket = this.bookTicket;
    if (localStorage.getItem("busdetails")) {
      storedBusdata = JSON.parse(localStorage.getItem("busdetails"));
      getBusdata = [
        {
          from: storedBusdata.from,
          to: storedBusdata.to,
          busno: storedBusdata.busno,
          busname: storedBusdata.busname,
          fare: storedBusdata.fare,
          type: storedBusdata.type,
          NoOfSeats: storedBusdata.NoOfSeats,
          button: storedBusdata.button,
        },
      ];
    } else {
      getBusdata = [
        {
          from: busdatas.from,
          to: busdatas.to,
          busno: busdatas.busno,
          busname: busdatas.busname,
          fare: busdatas.fare,
          type: busdatas.type,
          NoOfSeats: busdatas.NoOfSeats,
          button: busdatas.button,
        },
      ];
    }

    return (
      <>
        <Menu />
        <Table
          columns={columns}
          data={getBusdata}
          bookticket={bookTicket.bind(this)}
        />
      </>
    );
  }
}
export default withRouter(TableData);
