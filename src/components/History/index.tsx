import React from "react";
import {
  workHistory,
  prcntg,
  monthDuration,
  graphEnd,
  graphWidth,
} from "@/data/workHistory";
import { HistoryWrapper, Item } from "./styles";

const History = () => {
  return (
    <HistoryWrapper>
      {workHistory.map(({ name, start, end, role, company, url }, index) => {
        const width = prcntg(monthDuration(start, end));
        const left = (monthDuration(graphEnd, end) / graphWidth) * 100;

        return (
          <Item
            key={name}
            color={name}
            width={width}
            left={left}
            name={name}
            index={index}
          >
            <div />
            <a href={url} target="_blank">
              {role} <span>at</span> {company}{" "}
              {end === graphEnd ? (
                <>
                  <span>started </span>
                  {start[0]}/{start[1]}
                </>
              ) : (
                <>
                  <span>from </span>
                  {start[0]}/{start[1]} <span>to </span>
                  {end[0]}/{end[1]}
                </>
              )}
            </a>
          </Item>
        );
      })}
    </HistoryWrapper>
  );
};

export default History;
