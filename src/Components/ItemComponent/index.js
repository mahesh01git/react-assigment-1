import './index.css'

const Item = props => {
  const {itemDetails, deleteHistory} = props

  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails

  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="item-con">
      <p>{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button onClick={deleteItem} type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default Item
