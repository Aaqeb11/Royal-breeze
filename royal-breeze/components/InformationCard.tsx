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
          <span className="text-white text-3xl">{props.icon}</span>
        </div>
        <p className="text-white leading-10 text-center text-3xl p-3">
          {props.title}
        </p>
        <p className="text-white leading-9 text-center text-xl mt-5 p-3">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default InformationCard;
