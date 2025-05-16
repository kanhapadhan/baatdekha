//import './.css'
import { Link } from 'react-router-dom';

function Card({link, imgSrc, alt, label }) {
  return (
    <article>
        <Link to={link}>
          <img src={imgSrc} alt={alt} />
          <h3>{label}</h3>
        </Link>
    </article>      
  )
}

export default Card;