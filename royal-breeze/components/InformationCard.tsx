import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props: any) {
  return (
    <div
      className="flex justify-center items-start p-2 rounded-xl w-full "
      style={{ background: "linear-gradient(to right, #0a192f, #112d4e)" }}
    >
      <div className="flex flex-col justify-center items-center p-4 gap-4">
        <div className="flex justify-center items-center">
          <span className="text-white md:text-3xl text-2xl">{props.icon}</span>
        </div>
        <p className="text-white leading-10 text-center md:text-3xl text-2xl p-3">
          {props.title}
        </p>
        <div className="flex mt-8 lg:mt-2 lg:block border-b-[1.1px] border-white w-[90%] mx-auto lg:w-[90%]  h-1 "></div>
        <p className="text-white leading-9 text-center md:text-xl text-lg mt-5 p-3">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default InformationCard;
