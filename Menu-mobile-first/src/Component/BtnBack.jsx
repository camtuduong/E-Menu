import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function BtnBack() {
  const history = useNavigate();
  return (
    <button onClick={() => history(-1)} className="back-button focus">
      <GoArrowLeft />
    </button>
  );
}
export default BtnBack;
