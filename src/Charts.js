// import React, { Component } from 'react';
// import { Radar, Pie, Bar, Bubble } from 'react-chartjs-2';

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "Birinci Veri Seti",
//       fill: true,
//       lineTension: 0.1,
//       backgroundColor: "rgba(75,192,192,0.4)",
//       borderColor: "rgba(75,192,192,1)",
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "rgba(75,192,192,1)",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "rgba(75,192,192,1)",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

// class Charts extends Component {
//   render() {
//     return (
//       <div>
//         <h2 className="margin-auto">
//           Charts
//         </h2>
//         <br />
//         <div className="">
//           <Radar width={50} height={25} data={data} />
//           <Pie width={50} height={25} ref="chart" data={data} />
//           <Bar width={50} height={25} ref="chart" data={data} />
//           <Bubble width={50} height={25} ref="chart" data={data} />
//         </div>
//       </div>
//     );
//   }

//   componentDidMount() {
//     const { datasets } = this.refs.chart.chartInstance.data;
//     console.log('chart data',datasets[0].data);
//   }
// }

// export default Charts;
import React, { useEffect, useRef } from 'react';
import { Radar, Pie, Bar, Bubble } from 'react-chartjs-2';

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Birinci Veri Seti",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      // ... rest of the data ...
    }
  ]
};

const Charts = () => {
  const radarChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const bubbleChartRef = useRef(null);

  useEffect(() => {
    if (radarChartRef.current) {
      const radarChart = radarChartRef.current.chartInstance;
      radarChart.destroy();
    }
    if (pieChartRef.current) {
      const pieChart = pieChartRef.current.chartInstance;
      pieChart.destroy();
    }
    if (barChartRef.current) {
      const barChart = barChartRef.current.chartInstance;
      barChart.destroy();
    }
    if (bubbleChartRef.current) {
      const bubbleChart = bubbleChartRef.current.chartInstance;
      bubbleChart.destroy();
    }
  }, []);

  return (
    <div>
      <h2 className="margin-auto">Charts</h2>
      <br />
      <div className="chart-container">
        <Radar width={50} height={25} data={data} ref={radarChartRef} />
        <Pie width={50} height={25} data={data} ref={pieChartRef} />
        <Bar width={50} height={25} data={data} ref={barChartRef} />
        <Bubble width={50} height={25} data={data} ref={bubbleChartRef} />
      </div>
    </div>
  );
};

export default Charts;
