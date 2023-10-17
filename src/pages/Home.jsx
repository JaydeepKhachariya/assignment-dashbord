import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import SummeryCard from "../components/layout/dashbord/SummeryCard";
import ReactECharts from "echarts-for-react";
import { FiSearch } from "react-icons/fi";
import MaterialReactTable from "material-react-table";
import { BsArrowDownShort, BsArrowUpShort, BsHandbag } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { MdAccountBalanceWallet } from "react-icons/md";
import tableImage from "../assets/tableImage.jpg"

const Home = () => {
  const summeryData = [
    {
      id: 1,
      status: "increse",
      percentage: "37.8",
      price: "198",
      heading: "earning",
      icon: BiDollarCircle,
      color: "#00cc53",
      background: "#b8ffd5",
    },
    {
      id: 1,
      status: "decrese",
      percentage: "2",
      price: "2.4",
      heading: "orders",
      icon: TbFileInvoice,
      color: "#bb58ff",
      background: "#e0b3ff",
    },
    {
      id: 1,
      status: "decrese",
      percentage: "2",
      price: "2.4",
      heading: "balance",
      icon: MdAccountBalanceWallet,
      color: "#1484ff",
      background: "#bceaff",
    },
    {
      id: 1,
      status: "increse",
      percentage: "11",
      price: "89",
      heading: "total sales",
      icon: BsHandbag,
      color: "#ff359b",
      background: "#ffb8f2",
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

  const tableData = [
    {
      id: 1,
      name: "Abstract 3D",
      subtital: "Lorem ipsum dolor sit amet.",
      stock: "32 in stock",
      price: "$45.99",
      total: 20,
      image : tableImage,
    },
    {
      id: 2,
      name: "Abstract 3D",
      subtital: "Lorem ipsum dolor sit amet.",
      stock: "32 in stock",
      price: "$45.99",
      total: 20,
      image : tableImage,
    },
    {
      id: 3,
      name: "Abstract 3D",
      subtital: "Lorem ipsum dolor sit amet.",
      stock: "32 in stock",
      price: "$45.99",
      total: 20,
      image : tableImage,
    },
    {
      id: 4,
      name: "Abstract 3D",
      subtital: "Lorem ipsum dolor sit amet.",
      stock: "32 in stock",
      price: "$45.99",
      total: 20,
      image : tableImage,
    },
  ];

  const columns = [
    {
      id: "product", //id used to define `group` column
      header: "",
      columns: [
        {
          accessorFn: (row) => `${row.title}`, //accessorFn used to join multiple data into a single cell
          id: "profile_pic", //id is still required when using accessorFn instead of accessorKey
          header: "Name",
          size: 180,
          Cell: ({ renderedCellValue, row }) => (
            <td className="flex items-center gap-5">
              <div className="h-[50px] w-[80px] rounded-md overflow-hidden">
                  <img src={row.original.image} className="w-full object-cover h-full"  />
              </div>
              <div className="flex flex-col">
                <p className=" font-semibold">{row.original.name}</p>
                <p className="text-gray-400 text-sm">{row.original.subtital}</p>
              </div>
            </td>
          ),
        },
      ],
    },
    {
      accessorKey: "stock",
      header: "Stock",
      enableEditing: false, // Enable or disable editing as needed
    },
    {
      accessorKey: "price",
      header: "Price",
      enableEditing: false, // Enable or disable editing as needed
    },
    {
      accessorKey: "total",
      header: "Total",
      enableEditing: false, // Enable or disable editing as needed
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-7 overflow-y-auto dashbord p-4">
      <div className="w-full h-full grid grid-cols-2 gap-2 lg:grid-cols-4">
        {summeryData.map((el) => {
          return (
            <div
              key={el.id}
              className="xs:h-[150px] h-[100px] w-auto bg-white flex items-center xs:justify-center justify-between rounded-lg gap-3 p-2"
            >
              <div
                style={{ backgroundColor: `${el.background}` }}
                className="xs:h-[100px] xs:w-[100px] w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                {
                  <el.icon
                    style={{ color: `${el.color}` }}
                    className="text-5xl"
                  />
                }
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-gray-400 text-xs capitalize">{el.heading}</p>
                <p className="xs:text-2xl text-lg font-semibold">
                  ${el.price}k
                </p>
                <p className="xs:text-sm text-[10px] flex items-center justify-center gap-1">
                  <span
                    className={` ${
                      el.status === "increse"
                        ? "text-green-500"
                        : "text-red-500"
                    } flex items-center justify-center`}
                  >
                    {el.status === "increse" ? (
                      <BsArrowUpShort />
                    ) : (
                      <BsArrowDownShort />
                    )}{" "}
                    {el.percentage}%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>
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
          <div className="w-full flex sm:flex-row flex-col items-start  sm:items-center justify-between">
            <p className="text-xl font-semibold">Product Sell</p>
            <div className="hidden items-center justify-start gap-3 sm:flex">
              <div className="bg-off-white sm:min-w-[150px] sm:w-auto w-[130px] p-2 h-3/5 flex items-center justify-start gap-2 rounded-md">
                <FiSearch className="text-xl" />
                <input
                  className="outline-none bg-transparent placeholder:text-sm w-[130px] sm:w-full"
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
            <MaterialReactTable
              className="w-full mt-4"
              columnFilterModeOptions={false}
              enableRowActions={false}
              enablePagination={false}
              columns={columns}
              data={tableData}
              enableFilters={false}
              enableDensityToggle={false}
              enableFullScreenToggle={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
