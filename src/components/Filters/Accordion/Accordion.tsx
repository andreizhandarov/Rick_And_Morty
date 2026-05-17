import { useState } from "react";
import style from './Accordion.module.css'


export const Accordion = ({title, children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className={`${style.accordionHeader} ${isOpen ? style.open : ''}`} onClick={toggleAccordion}>
        {title}
        <span className={`${style.arrow} ${isOpen ? style.open : ''}`}>▼</span>
      </button>
      <div className={`${style.accordionContent} ${isOpen ? style.open : ''}`}>
        {children}
      </div>
    </div>
  );
};

