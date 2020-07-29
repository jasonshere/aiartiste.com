import React from "react";
import Plot from "react-plotly.js";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.layout = props.layout;
  }

  render() {
    return (
      <>
      <Plot
        data={this.data}
        layout={this.layout}
      />
      </>
    );
  }

}

// const Chart = ({ data, layout }) =>{

  
// }

// export default Chart;
