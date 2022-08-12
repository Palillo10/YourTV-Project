import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getVideosThunk } from '../../store/videos'
import './SearchResults.css'

const SearchResults = () => {
  const dispatch = useDispatch()
  const videos = useSelector(state => state.videos)
  const { searchTerm } = useParams()
  console.log(searchTerm)
  // const sessionUser = useSelector(state => state.session.user)
  // const [openCreateForm, setOpenCreateForm] = useState(false)

  useEffect(() => {
    dispatch(getVideosThunk())
  }, [dispatch])

  if (!videos) return null
  const checkSearch = searchTerm.toLowerCase()

  const filteredVideos = Object.values(videos).filter(video => {
    const checkName = video.title.toLowerCase()
    const checkDescription = video.description?.toLowerCase()
    const checkCreator = video.owner.channel_name.toLowerCase()
    return (checkName.includes(checkSearch)
      || checkDescription?.includes(checkSearch)
      || checkCreator.includes(checkSearch)
    )
  })


  return (<div className='HomePageBody'>
    <div className='SideBarLinksContainer'></div>
    <div className='SearchResultsVideosContainer'>
      <div className='SearchResultsVideos'>
        <h2 style={{ marginBottom: "5px", marginLeft: "15px", borderBottom: "1px solid rgb(160, 160, 160, .4)" }} className='SearchResultsHeaders'>Results</h2>
        {filteredVideos.map(video => (<Link to={`/watch-${video.id}`}>
          <div className='SearchResultsVideoCard'>
            <img className="SearchResultsVideoThumbnail" src={video.thumbnail} />
            <div className='SearchResultsVideoCardDetails'>
              <div className='SearchResultsVideoTitle'> {video.title}</div>
              <div className='SearchResultsVideoCreator'>
                <img className="SearchResultsVideoCreatorAvatar" src={video.owner.avatar} />
                <div className='SearchResultsVideoCreatorName'> {video.owner.channel_name} </div>
              </div>
              <div className='SearchResultsVideoDescription'>{video.description}</div>
            </div>
          </div>
        </Link>
        ))}

      </div>
    </div>

  </div>)

}


export default SearchResults
