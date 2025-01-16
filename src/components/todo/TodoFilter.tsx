import { Tab, TabItem } from "@/components/common/Tab";
import { useState } from "react";

const FILTER_ITEMS = [
  { label: "All", value: "ALL" },
  { label: "To Do", value: "TODO" },
  { label: "Done", value: "DONE" },
];

export const TodoFilter = () => {
  // fix: recoil로
  const [activeFilter, setActiveFilter] = useState("ALL");

  return (
    <Tab onChange={setActiveFilter}>
      {FILTER_ITEMS.map((item) => (
        <TabItem
          key={item.value}
          label={item.label}
          value={item.value}
          isActive={activeFilter === item.value}
          onClick={setActiveFilter}
        />
      ))}
    </Tab>
  );
};
