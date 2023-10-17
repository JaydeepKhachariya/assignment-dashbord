import React from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const SummeryCard = ({ heading, price, status, icon, percentage }) => {
  return (
    <div className="xs:h-[150px] h-[100px] w-auto bg-white flex items-center xs:justify-center justify-between rounded-lg gap-3 p-2">
      <div className="xs:h-[100px] xs:w-[100px] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-black">
        <img src={icon} className="w-full" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-gray-400 text-xs capitalize">{heading}</p>
        <p className="xs:text-2xl text-lg font-semibold">${price}k</p>
        <p className="xs:text-sm text-[10px] flex items-center justify-center gap-1">
          <span
            className={` ${
              status === "increse" ? "text-green-500" : "text-red-500"
            } flex items-center justify-center`}
          >
            {status === "increse" ? <BsArrowUpShort /> : <BsArrowDownShort />}{" "}
            {percentage}%{" "}
          </span>
          this month
        </p>
      </div>
    </div>
  );
};

export default SummeryCard;
