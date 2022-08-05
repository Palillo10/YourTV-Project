import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


const VideoTest = () => {
  const history = useHistory(); // so that we can redirect after the image upload is successful
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);

    const res = await fetch(`/api/videos/test/1`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      setImageLoading(false);
      history.push("/videos");
    }
    else {
      setImageLoading(false);
      // a real app would probably use more advanced
      // error handling
      const data = await res.json()
      console.log(data);
    }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="video/*"
        onChange={updateImage}
      />
      <button type="submit">Submit</button>
      {(imageLoading) && <p>Loading...</p>}
    </form>
  )
}














// const VideoTest = () => {
//   const [video, setVideo] = useState('')
//   const upload = e => {

//   }

//   useEffect(() => {
//     fetch('/api/videos/test')
//   }, [])
//   // if (!video) return null
//   return (<div>
//     <input
//       type="file"
//       accept="video/*"
//       onChange={upload} />
//     {video &&
//       <video>
//         <source src="video"></source>
//       </video>
//     }
//   </div >)
// }


export default VideoTest
