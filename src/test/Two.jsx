import { useContextCustom } from "../context/StateContext";

const Two = () => {
  const { setCount } = useContextCustom();
  return (
    <div>
      <button
        onClick={() => setCount((pre) => pre + 1)}
        className="px-2 py-2 bg-blue-500 rounded mb-2"
      >
        Increase from two
      </button>
    </div>
  );
};

export default Two;
