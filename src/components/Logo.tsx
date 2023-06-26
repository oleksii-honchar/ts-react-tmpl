import { Link } from "react-router-dom";
export function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link to={"/"}>
        <img className="block h-8 w-auto lg:hidden" src="/assets/images/maze.png" alt="IAmAMaze.me" />
        <img className="hidden h-8 w-auto lg:block" src="/assets/images/maze.png" alt="IAmAMaze.me" />
      </Link>
    </div>
  );
}
