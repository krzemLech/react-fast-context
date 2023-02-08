import { useStore } from "../context/storeContext";

const DisplayValue = ({ value }) => {
  const { store } = useStore((store) => store[value]);
  return (
    <p>
      {value}: {store}
    </p>
  );
};

export default DisplayValue;
