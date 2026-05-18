import style from './FilterButton.module.css'

export const FilterButton = ({name, item, index, onFilters, setPageNumber}) => {

  const handleRadioChange = () => {
    onFilters(item)
    setPageNumber(1)
    console.log(item)
  }

  return (
    <div>
      <label className={style.customRadio}> 
        {/* className={`custom-radio ${checked ? 'active' : ''}`} */}
            <input
                type="radio"
                id={index}
                name={name}
                // checked={checked}
                onChange={handleRadioChange}
                className={style.hiddenRadio}
            />
            {item} 
        </label>
    </div>
  );
};
