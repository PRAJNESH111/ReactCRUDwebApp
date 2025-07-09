// import { useState } from "react";
import { useLocalStorage } from "./useLocalstorege";

export function useFilter(dataList, callback) {
  const [query, setQuery] = useLocalStorage("query", "");
  //   console.log(dataList);
  const filterdData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );
  return [filterdData, setQuery];
}
