import PropTypes from 'prop-types'
import { Button, Input, Typography } from '@material-tailwind/react';

const Banner = ({ setValue, value, handleSearch }) => {
  return (
    <div className="h-[450px] relative flex items-center justify-center flex-col">
      <div className="absolute inset-0 opacity-10 bg-center bg-cover bg-no-repeat object-cover bg-[url(/bg.png)]">
      </div>
      <Typography variant="h2" className="mb-10">
        I Grow By Helping People In Need
      </Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="Search.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          onClick={()=>{
            handleSearch(),
            setValue("")
          }}
          className="!absolute right-1 top-1 rounded bg-red-500"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setValue: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Banner