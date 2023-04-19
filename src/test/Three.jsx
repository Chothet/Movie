import { useContextCustom } from "../context/StateContext";

const Three = () => {
  const { setCount } = useContextCustom();
  return (
    <div>
      <button
        onClick={() => setCount((pre) => pre - 1)}
        className="px-2 py-2 bg-red-500"
      >
        Decrease from Three
      </button>
    </div>
  );
};

export default Three;
