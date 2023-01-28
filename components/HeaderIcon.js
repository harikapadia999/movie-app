import React from "react";

export default function HeaderIcon({ Icon, title }) {
  return (
    <div className="mx-4 flex flex-col hover:text-white active:text-red-400 cursor-pointer lg:mx-6 ">
      <Icon className="h-8 " />
      <p className="my-2 ">{title}</p>
    </div>
  );
}
