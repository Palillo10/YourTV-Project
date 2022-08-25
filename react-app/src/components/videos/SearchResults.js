import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getVideosThunk } from '../../store/videos'
import './SearchResults.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getUsersThunk } from '../../store/user'

const SearchResults = () => {
  const dispatch = useDispatch()
  const videos = useSelector(state => state.videos)
  const users = useSelector(state => state.users)
  const { searchTerm } = useParams()
  // const sessionUser = useSelector(state => state.session.user)
  // const [openCreateForm, setOpenCreateForm] = useState(false)

  useEffect(() => {
    dispatch(getVideosThunk())
    dispatch(getUsersThunk())
  }, [dispatch])

  if (!videos || !users) return null
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

  const filteredUsers = Object.values(users).filter(user => {
    const checkName = user.channel_name.toLowerCase()
    // const checkBio = user.bio?.toLowerCase()
    return (checkName.includes(checkSearch)
    )
  })


  return (<div className='HomePageBody'>
    <div className='SideBarLinksContainer'>
      <a href="https://github.com/Palillo10/YourTV-Project" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/isaac-diaz-459a52241/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <LinkedInIcon />
      </a>
      <a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-brands fa-python fa-2xl"></i>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-brands fa-js fa-2xl"></i>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/css" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-brands fa-css3-alt fa-2xl"></i>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-brands fa-html5 fa-2xl"></i>
      </a>
      <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-brands fa-reacteurope fa-2xl"></i>
      </a>
      <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-brands fa-react fa-2xl"></i>
      </a>
      <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-brands fa-font-awesome fa-2xl"></i>
      </a>
      <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-solid fa-database fa-2xl"></i>
      </a>
      <a href="https://flask.palletsprojects.com/en/2.1.x/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
        <i className="fa-solid fa-flask fa-2xl"></i>
      </a>
    </div>
    <div className='SearchResultsVideosContainer'>
      <div className='SearchResultsVideos'>
        <h2 style={{ marginBottom: "5px", marginLeft: "15px", borderBottom: "1px solid rgb(160, 160, 160, .4)" }} className='SearchResultsHeaders'>Results</h2>
        {filteredUsers.map(user => (<Link to={`/users/${user.channel_name}`}>
          <div className='SearchResultsChannelCard'>
            <div className='SearchResultsChannelAvatarBackground'>
              <img className='SearchResultsChannelAvatar' src={user.avatar} alt={user.channel_name} />
            </div>
            <div className='SearchResultsChannelRight'>
              <div className='SearchResultsChannelRightTop'> {user.channel_name}
              </div>
              <div className='SearchResultsChannelRightBottom'>
                {user.bio}
              </div>
            </div>
          </div>
        </Link>
        ))}
        <div className='SearchResultBorder'></div>
        {filteredVideos.map(video => (<Link to={`/watch-${video.id}`}>
          <div className='SearchResultsVideoCard'>
            <img className="SearchResultsVideoThumbnail" src={video.thumbnail} alt={video.title} />
            <div className='SearchResultsVideoCardDetails'>
              <div className='SearchResultsVideoTitle'> {video.title}</div>
              <div className='SearchResultsVideoCreator'>
                <img className="SearchResultsVideoCreatorAvatar" src={video.owner.avatar} alt={video.owner.channel_name} />
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
