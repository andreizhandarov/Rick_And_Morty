import { useEffect, useRef, useState } from "react";
import { FilterButton } from "../FilterButton/FilterButton";
import style from './Accordion.module.css'


export const Accordion = ({title, children, onFilters, setPageNumber}) => {

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <button className={`${style.accordionHeader} ${isOpen ? style.open : ''}`} onClick={toggleAccordion}>
        {title}
        <span className={`${style.arrow} ${isOpen ? style.open : ''}`}>▼</span>
      </button>
      <div ref={contentRef} className={`${style.accordionContent} ${isOpen ? style.open : ''}`} style={{ height: contentHeight, display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {children.map((item, index)=>(
          <FilterButton key={index} name={title} item={item} index={index} onFilters={onFilters} setPageNumber={setPageNumber}/>
        ))}
      </div>
    </div>
  );
};

