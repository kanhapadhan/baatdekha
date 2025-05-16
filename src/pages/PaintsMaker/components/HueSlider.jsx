function HueSlider({ value, onChange }) {
  return (
    <input
      type="range"
      min="0"
      max="360"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      id="hue"
    />
  );
}

export default HueSlider;
