function sendMail(name, code) {
  const recipient = "baatdekha@gmail.com";
  const subject = "Enquiry about Color Price";
  const body = `I want the following color.\nName - ${name} (${code}) color\nMy Mobile no. is - `;
  window.location.href = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

function PopupCard({ color }) {
  return (
    <div className="popupCard">
      <div className="title">
        <span className="colorName">{color.entityName}</span>
        <span className="colorCode">{color.entityCode}</span>
      </div>
      <div
        className="colorCard"
        style={{ background: color.shadeHexCode }}
      />
      <button className="askBtn" onClick={() => sendMail(color.entityName, color.entityCode)}>
        Ask Price
      </button>
    </div>
  );
}

export default PopupCard;
