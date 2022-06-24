import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'
import { Modal, message } from 'antd';
import MovieForm from "./components/MovieForm";
import MovieTable from "./components/MovieTable";
export default function MoviePage() {
  const [navList, setNavList] = React.useState([])

  React.useEffect(() => {
    fetch('/api/nav/category')
      .then(res => res.json())
      .then(data => setNavList(data))
  }, [])

  const [videos, setVideos] = React.useState([])
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
      message.success('Delete Success!')
    }).catch(() => {
      message.error('Delete Error!')
    })
  }

  const editFilm = (film) => {
    // show modal edit 
    Modal.confirm({
      title: 'Edit Film',
      icon: null,
      content: <MovieForm data={film}/>,
      okText: 'Save',
      centered: true,
      onOk: () => {
        return new Promise((resolve, reject) => {
          MovieForm.getValues()
            .then((values) => {
              console.log(values)
              axios.put('/api/film', {
                ID: film.ID,
                Name: values.Name,
                Description: values.Description,
                ImageLink: values.ImageLink,
                VideoLink: values.VideoLink,
                Tag: values.Tag,
                Category: parseInt(values.Category),
                Rate: parseInt(values.Rate),
                Duration: parseInt(values.Duration),
                PublicYear: parseInt(values.PublicYear),
                Director: parseInt(values.Director),

              }).then(() => {
                message.success('Edit Success!')
                getFilm()
                resolve()
              }).catch(()=>{
                message.error('Edit Error!')
                reject()
              })
            })
            .catch(()=>{
              message.error('Edit Error!')
              reject()
            })
        })
      },
      cancelText: 'Cancel',
    });
  }

  const addFilm = () => {
    Modal.confirm({
      title: 'Add Film',
      icon: null,
      content: <MovieForm/>,
      okText: 'Save',
      centered: true,
      onOk: () => {
        return new Promise((resolve, reject) => {
          MovieForm.getValues()
            .then((values) => {
              console.log(values)
              axios.post('/api/film/new', {
                ...values,
                Category: parseInt(values.Category),
                Rate: parseInt(values.Rate),
                Duration: parseInt(values.Duration),
                PublicYear: parseInt(values.PublicYear),
                Director: parseInt(values.Director),
              }).then(() => {
                message.success('Add Success!')
                getFilm()
                resolve()
              }).catch(()=>{
                message.error('Add Error!')
                reject()
              })
            })
            .catch(()=>{
              message.error('Add Error!')
              reject()
            })
        })
      },
      cancelText: 'Cancel',
    });
  }
  
  return (
    <>
      <PageTitle title="Movie" />
      <div className="container">
        <MovieTable handleAdd={addFilm} data={videos} handleEdit={editFilm} handleDelete={deleteFilm}/>
      </div>
    </>
  );
}
