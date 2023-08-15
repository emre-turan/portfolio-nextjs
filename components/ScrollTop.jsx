import { AiOutlineArrowUp } from "react-icons/ai";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollTop = () => {
  return (
    <div className="flex justify-start p-4">
      <button onClick={scrollToTop} href="/">
        <div className="rounded-full shadow-lg shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none">
          <AiOutlineArrowUp className="text-jelly-bean-950" />
        </div>
      </button>
    </div>
  );
};

export default ScrollTop;
