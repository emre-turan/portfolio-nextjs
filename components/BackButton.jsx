import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

const BackButton = () => {
  return (
    <div className="flex">
      <Link href="/#projects">
        <div className="flex font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
          <ArrowBackIcon />
          <p className="ml-1 cursor-pointer">Back</p>
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
