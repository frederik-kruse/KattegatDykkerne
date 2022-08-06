import { useEffect} from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import './ScrollButton.css'

export const ScrollButton = () => {
 

  const toggleVisibility = () => {
  };

  const ScrollButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="ScrollButton">
      <button type="button" onClick={ScrollButton} className="ScrollBtnStyling">
        <FaArrowAltCircleUp aria-hidden='true' />
      </button>
    </div>
  )
};