import type { NextPage } from "next";

import { useGlobalContext } from "@context/index";
import Link from "next/link";
import TasksList from "@components/TasksLists";

const tasks = [
  { name: "Task1", description: "Task 1 desc", isActive: true },
  { name: "Task2", description: "Task 2 desc", isActive: false },
  { name: "Task3", description: "Task 3 desc", isActive: true },
];

const Home: NextPage = () => {
  const { name } = useGlobalContext();

  return (
    <div className="grid w-full rounded-lg justify-center my-32">
      <TasksList tasks={tasks} />

      <footer className="">
        <Link href="www.viistorrr.com" passHref>
          <a target="_blank" rel="noopener noreferrer">
            Created by @viistorrr
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
