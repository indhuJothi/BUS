import React from "react";
import Table from '../../common/table/NewTable';
import "../../common/table/NewTable.css";
import "./userHistory.css";
import { getBushistory } from "../../service/service";
import Header from "../../common/header/Header";
import Menu from "../../common/menu/Menu";

let columns = [
  {
    heading: "UserId",
    property: "id",
  },
  {
    heading: "Mobile",
    property: "mobile",
  },
  {
    heading: "BusNo",
    property: "busno",
  },
  {
    heading: "Bus Name",
    property: "busname",
  },
  {
    heading: "TotalFare",
    property: "totalfare",
  },
  {
    heading: "Numberofseats",
    property: "numberofseats",
  },
  {
    heading: "Date",
    property: "date",
  },
  {
    heading: "Source",
    property: "from",
  },
  {
    heading: "Destination",
    property: "to",
  },
];


class HistoryTable extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        go: false,
      };
    }
    
  }
  gotoSearch() {
    this.setState({
      go: true,
    });
  }

  render() {
    let data = getBushistory();
    let go = this.state.go;
    let datalist = [...data].reverse();
    return (
      <>
        <Header />
        <Table columns={columns} data={datalist} />
        <button class="historyback" onClick={(e)=>this.props.history.goBack()}>
          Back
        </button>
        <button class="searchbtn" onClick={() => this.gotoSearch()}>
          Search
        </button>
        <Menu />

        {go ? this.props.history.push("/search") : null}
        {go ? localStorage.removeItem("busdetails") : null}
        {go ? localStorage.removeItem("searchdetails") : null}
        {go ? localStorage.removeItem("passengerDetails") : null}
        {go ? localStorage.removeItem("seats") : null}
        {go ? localStorage.removeItem("seatcount") : null}
      </>
    );
  }
}

export default HistoryTable;
