import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import SummeryCard from "../components/layout/dashbord/SummeryCard";
import ReactECharts from "echarts-for-react";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  const summeryData = [
    {
      id: 1,
      status: "increse",
      percentage: "37.8",
      price: "198",
      heading: "earning",
      icon: BiDollarCircle,
    },
    {
      id: 1,
      status: "decrese",
      percentage: "2",
      price: "2.4",
      heading: "orders",
      icon: BiDollarCircle,
    },
    {
      id: 1,
      status: "decrese",
      percentage: "2",
      price: "2.4",
      heading: "balance",
      icon: BiDollarCircle,
    },
    {
      id: 1,
      status: "increse",
      percentage: "11",
      price: "89",
      heading: "total sales",
      icon: BiDollarCircle,
    },
  ];

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  const optionsPie = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col items-start justify-start gap-7 overflow-y-auto dashbord">
      <div className="w-full h-full grid grid-cols-2 gap-2 lg:grid-cols-4">
        {summeryData.map((el) => {
          return (
            <SummeryCard
              heading={el.heading}
              price={el.price}
              status={el.status}
              percentage={el.percentage}
              key={el.id}
            />
          );
        })}
      </div>
      <div className="w-full h-auto flex items-center justify-center gap-2 lg:flex-row flex-col">
        <div className="w-full bg-white h-full rounded-lg p-4 flex flex-col gap-4">
          <div className="flex flex-col items-start justify-start pb-2">
            <p className="text-2xl font-bold">Overview</p>
            <p className="text-gray-500 text-sm ">Monthly earning</p>
          </div>
          <ReactECharts
            option={options}
            opts={{ renderer: "svg" }}
            className="w-[95%]"
          />
        </div>
        <div className="lg:w-[30%] w-full bg-white rounded-lg h-full p-4 flex flex-col">
          <div className="flex flex-col items-start justify-start ">
            <p className="text-2xl font-bold">Customers</p>
            <p className="text-gray-500 text-sm ">
              Customers that buy products
            </p>
          </div>
          <ReactECharts
            option={optionsPie}
            opts={{ renderer: "svg" }}
            className=" pieChart"
          />
        </div>
      </div>

      <div className="w-full h-full">
        <div className="w-full overflow-x-auto sm:overflow-hidden bg-white rounded-lg p-4">
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold">Product Sell</p>
            <div className="flex items-center justify-start gap-3">
              <div className="bg-off-white min-w-[150px] w-auto p-2 h-3/5 flex items-center justify-start gap-2 rounded-md">
                <FiSearch className="text-xl" />
                <input
                  className="outline-none bg-transparent"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <select className="bg-off-white h-3/5 p-2 rounded-md outline-none">
                <option>Last 30 days</option>
                <option>Last 20 days</option>
                <option>Last 10 days</option>
                <option>Last 5 days</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <table className="w-full mt-5">
              <tr className="pt-4 w-full">
                <th className="text-left">Product name</th>
                <th className="text-left">Stock</th>
                <th className="text-left">Price</th>
                <th className="text-left">Total sales</th>
              </tr>
              <tr className="pt-4">
                <td className="flex items-center gap-2">
                  <div className="h-[70px] w-[120px] bg-black rounded-md"></div>
                  <div className="flex flex-col">
                    <p className=" font-semibold">Abstract 3D</p>
                    <p className="text-gray-400 text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </td>
                <td>32 in stock</td>
                <td>$ 45.99</td>
                <td>20</td>
              </tr>
              <tr className="pt-4">
                <td className="flex items-center gap-2">
                  <div className="h-[70px] w-[120px] bg-black rounded-md"></div>
                  <div className="flex flex-col">
                    <p className=" font-semibold">Abstract 3D</p>
                    <p className="text-gray-400 text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </td>
                <td>32 in stock</td>
                <td>$ 45.99</td>
                <td>20</td>
              </tr>
              <tr className="pt-4">
                <td className="flex items-center gap-2">
                  <div className="h-[70px] w-[120px] bg-black rounded-md"></div>
                  <div className="flex flex-col">
                    <p className=" font-semibold">Abstract 3D</p>
                    <p className="text-gray-400 text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </td>
                <td>32 in stock</td>
                <td>$ 45.99</td>
                <td>20</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
