import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

const BackButton = () => {
  return (
    <div className="flex">
      <Link href="/#projects">
        <div className="flex hover:underline">
          <ArrowBackIcon />
          <p className="ml-1 cursor-pointer">Back</p>
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
