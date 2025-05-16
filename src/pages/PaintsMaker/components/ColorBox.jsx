import PopupCard from './PopupCard';

function ColorBox({ colorObj, isActive, onActivate }) {
  return (
    <div
      className={`colorBox${isActive ? ' active' : ''}`}
      style={{ background: colorObj.shadeHexCode }}
      onClick={onActivate}
    >
      {isActive && <PopupCard color={colorObj} />}
    </div>
  );
}

export default ColorBox;