import { Spinner } from "@material-tailwind/react"

const CustomSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner color="green" className="h-16 w-16 text-gray-900/50" />
    </div>
  );
}

export default CustomSpinner;