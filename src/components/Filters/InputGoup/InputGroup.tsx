import style from './InputGroup.module.css'

export const InputGroup = ({total, name, setId}) => {
  return (
    <div className={style.inputGroup}>
      <select
        onChange={(e) => setId(e.target.value)}
        className={style.inputGroupSelect}
        id={name}
      >
        {[...Array(total).keys()].map(x => {
          return(
            <option key={x + 1} value={x + 1}>{name} - {x + 1}</option>
          )
        })}
      </select>
    </div>
  );
};

