import { Tab, TabItem } from "@/components/Tab";
import { useRecoilState } from "recoil";
import { todoState } from "@/store/atoms/todoAtom";
import { TodoType } from "@/types/todo";

const FILTER_ITEMS: Array<{ label: string; value: TodoType }> = [
  { label: "All", value: "All" },
  { label: "To Do", value: "To Do" },
  { label: "Done", value: "Done" },
];

const TodoFilter = () => {
  const [tab, setTab] = useRecoilState(todoState);

  return (
    <Tab>
      {FILTER_ITEMS.map((item) => (
        <TabItem
          key={item.value}
          label={item.label}
          value={item.value}
          isActive={tab === item.value}
          onClick={setTab}
        />
      ))}
    </Tab>
  );
};

export default TodoFilter;
