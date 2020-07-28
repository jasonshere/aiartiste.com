import React from "react";
import Plot from "react-plotly.js";

const Chart = ({ data, layout }) =>{

  return (
    <div>
      <Plot
          data={data}
          layout={layout}
        />
    </div>
  );
}

export default Chart;
