import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  return (
    <div className="flex">
      <ArrowBackIcon />
      <p className="underline cursor-pointer">Back</p>
    </div>
  );
};

export default BackButton;
