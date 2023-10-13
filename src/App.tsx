import React, { useState, useEffect } from "react";

let arr = new Array(10000).fill(0);
arr = arr.map((it, index) => {
  return { name: index + "name", index: index };
});

const tableHeader = [
  { key: "ts_d", rate: 0.25, name: "时间" },
  { key: "level", rate: 0.1, name: "等级" },
  { key: "loc", rate: 0.3, name: "路径", startPos: true },
  { key: "param", rate: 0.35, name: "内容", startPos: true },
];

const App = () => {
  const [scrollToIndex, setscrollToIndex] = useState(0);
  const [data, setData] = useState(arr);

  useEffect(() => {
    let index = 0;
    let timer = setInterval(() => {
      // setscrollToIndex(index++);
      setData((data) => [...data.reverse()]);
      if (index >= 1000) index = 0;
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {data.slice(-100).map((it, index) => {
        return (
          <div key={index}>
            {it.name}=== 
            {tableHeader.map(({ key, width, startPos }, idx) => {
              return (
                <span className="log-item-sutring" key={key}>
                  {key}-----
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default App;
