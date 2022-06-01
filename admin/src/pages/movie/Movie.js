import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'

export default function MoviePage() {
  const [videos, setVideos] = React.useState([])
  const [data, setData] = React.useState({
    VideoLink: '',
    ImgLink:'',
    NameMovie: '',
    Rate: '',
    Tag: '',
    CreateAt: '',
    Duration: '',
    PublicYear: '',
    Country: '',
    Category: '',
    Director: '',
    Description:''
  
  })
  React.useEffect(() => {
    getFilm()
  }, [])

  const getFilm = () => {
    axios.get('/api/film').then(({ data }) => {
      console.log(data)
      setVideos(data)
    }).catch(console.log)
  }

  const deleteFilm = (id) => {
    axios.delete(`/api/film/${id}`).then(() => {
      // reload data
      getFilm()
      alert('Success!')
    }).catch(() => {
      alert('Error!')
    })
  }

  const editFilm = (film) => {
    // show modal edit 

    // sau khi Save goi xuong function duoi
    axios.put('/api/film', film).then(() => {
      alert('Success!')
    }).catch(() => {
      alert('Error!')
    })
  }
  

  const addFilm = (event) => {
    event.preventDefault();
    console.log(data)
    axios.post('/api/film/new', film).then(()=>{
      alert('Success!')
    }).catch(()=>{
      alert('Error!')
    })
  }
  return (
    <>
      <PageTitle title="Movie" />
      <div className="container">
        <form className="mb-3" onSubmit={addFilm}>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer01">VideoLink</label>
              <input type="text" onChange={e => {
                setData({
                  ...data,
                  VideoLink: e.target.value
                })
              }} className="form-control " id="validationServer01" placeholder="VideoLink" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer01">ImgLink</label>
              <input type="text"
              onChange={e => {
                setData({
                  ...data,
                  ImgLink: e.target.value
                })
              }} className="form-control " id="validationServer01" placeholder="ImgLink" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer01">NameMovie</label>
              <input type="text" onChange={e => {
                setData({
                  ...data,
                  NameMovie: e.target.value
                })
              }} className="form-control " id="validationServer01" placeholder="NameMovie" />
            </div>
            <div className="col-md-1 mb-3">
              <label htmlFor="inlineFormCustomSelectPref">Rate</label>
              <select className="custom-select " id="inlineFormCustomSelectPref">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="inlineFormCustomSelectPref">Tag</label>
              <select className="custom-select " id="inlineFormCustomSelectPref">
                <option value={1}>Phim lẻ</option>
                <option value={2}>Phim chẵn</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer02">CreateAt</label>
              <input type="text" onChange={e => {
                setData({
                  ...data,
                  CreateAt: e.target.value
                })
              }}className="form-control " id="validationServer02" placeholder="At" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer02">Duration</label>
              <input type="text" onChange={e => {
                setData({
                  ...data,
                  Duration: e.target.value
                })
              }}className="form-control " id="validationServer02" placeholder="Duration" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServerUsername">PublicYear</label>
              <div className="input-group">
                <input type="text" onChange={e => {
                setData({
                  ...data,
                  PublicYear: e.target.value
                })
              }}className="form-control " id="validationServerUsername" placeholder="PublicYear" aria-describedby="inputGroupPrepend3" />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer03">Country</label>
              <input type="text" onChange={e => {
                setData({
                  ...data,
                  Country: e.target.value
                })
              }}className="form-control " id="validationServer03" placeholder="Country" />

            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="inlineFormCustomSelectPref">Category</label>
              <select className="custom-select " id="inlineFormCustomSelectPref">
                <option value={1}>Hành Động</option>
                <option value={2}>Tình Cảm</option>
                <option value={2}>Hoạt Hình</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer04">Director</label>
              <input type="text" onChange={e => {
                setData({
                  ...data,
                  Director: e.target.value
                })
              }}className="form-control " id="validationServer04" placeholder="Director" />
            </div>
          </div>
          <div class="form-group">
            <label for="comment" >Description:</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">VideoLink</th>
              <th scope="col">ImgLink</th>
              <th scope="col">NameMovie</th>
              <th scope="col">Rate</th>
              <th scope="col">Tag</th>
              <th scope="col">CreateAt</th>
              <th scope="col">Duration</th>
              <th scope="col">PublicYear</th>
              <th scope="col">Country</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.length ? videos.map(video => (
              <tr>
                <th scope="row">{video.ID}</th>
                <td>{video.Name}</td>
                <td>{video.VideoLink}</td>
                <td>{video.ImgLink}</td>
                <td>{video.NameMovie}</td>
                <td>{video.Rate}</td>
                <td>{video.Tag}</td>
                <td>{video.CreateAt}</td>
                <td>{video.Duration}</td>
                <td>{video.PublicYear}</td>
                <td>{video.Country}</td>
                <td>{video.Category}</td>
                <td>{video.Director}</td>
                <td>{video.Description}</td>
                <td>
                  <a href="javascript:void(0);" onClick={() => deleteFilm(video.ID)} className="p-2">Delete</a>
                  <a href="javascript:void(0);" onClick={() => editFilm(video)} className="p-2">Edit</a>
                </td>
              </tr>
            )) : <tr className="text-center">No data</tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}
