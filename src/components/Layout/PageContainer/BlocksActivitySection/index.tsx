import React from "react";

// import { useQuery } from "react-query";
import useBlockActivityData from "../../../../hooks/useBlockActivityData";

function BlocksActivitySection() {
  const res = useBlockActivityData;
  console.log("res", res);
  return <div>Hi</div>;
}

export default BlocksActivitySection;
