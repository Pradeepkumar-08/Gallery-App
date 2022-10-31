import './index.css'

const ThumbnailItem = props => {
  const {ThumbnailDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = ThumbnailDetails

  const onChangeId = () => {
    setActiveThumbnailId(id)
  }

  const thumbnailClassName = isActive ? 'selected' : 'un-selected'

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-btn" onClick={onChangeId}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
