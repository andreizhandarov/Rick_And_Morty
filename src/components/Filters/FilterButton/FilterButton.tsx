import style from './FilterButton.module.css'

export const FilterButton = ({name, item, index, onFilters, checked}) => {

  const handleRadioChange = () => {
    onFilters(item)
    console.log(item)
  }

  return (
    <div>
      <label className={`${style.customRadio} ${checked ? style.active : ''}`}> 
            <input
                type="radio"
                id={index}
                name={name}
                checked={checked}
                onChange={handleRadioChange}
                className={style.hiddenRadio}
            />
            {item} 
        </label>
    </div>
  );
};
