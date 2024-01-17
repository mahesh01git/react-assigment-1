import './index.css'

const Item = props => {
  const {itemDetails} = props

  const {timeAccessed, logoUrl, title, domainUrl} = itemDetails

  return (
    <li className="item-con">
      <p>{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt={title} />
      <p>
        {title} <span>{domainUrl}</span>
      </p>
    </li>
  )
}

export default Item
