import React from "react";
import Plot from "react-plotly.js";

const Chart = ({ data, layout }) =>{

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
}

export default Chart;
