import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name,price,features} = option;
  return (
    <div className="bg-blue-500 rounded-md flex flex-col p-4 text-white">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>

      <div className='pl-6 flex-grow'>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <button className='btn mt-12 bg-green-500 hover:bg-green-600 text-white w-full font-bold rounded-lg'>Buy Now</button>
    </div>
  );
}

PriceOption.propTypes = {
    option:PropTypes.object.isRequired
}

export default PriceOption