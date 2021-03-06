import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'
import { Modal, message } from 'antd';
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
export default function UserPage() {



  const [name, setName] = React.useState([])
  React.useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
<<<<<<< HEAD
    axios.get('/auth/users').then(({ data }) => {
=======
    axios.get('/api/users').then(({ data }) => {
>>>>>>> 7ffb63bf5c18ae7f7259d3421a7ae6de619b0ad0
      console.log(data)
      setName(data)
    }).catch(console.log)
  }

  const deleteUsers = (id) => {
    axios.delete(`/api/users/${id}`).then(() => {
      // reload data
      getUsers()
      message.success('Delete Success!')
    }).catch(() => {
      message.error('Delete Error!')
    })
  }

  const editUsers = (users) => {
    // show modal edit 
    Modal.confirm({
      title: 'Edit User',
      icon: null,
      content: <UserForm data={users}/>,
      okText: 'Save',
      centered: true,
      onOk: () => {
        return new Promise((resolve, reject) => {
          UserForm.getValues()
            .then((values) => {
              console.log(values)
              axios.put('/api/users', {
                ID: users.ID,
                Name: values.Name,
                Email: values.Email,
                Username: values.Username,
                Pass: (values.Pass),
                Phone: (values.Phone),
              }).then(() => {
                message.success('Edit Success!')
                getUsers()
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

  const addUser = () => {
    Modal.confirm({
<<<<<<< HEAD
      title: 'Add Film',
=======
      title: 'Add Users',
>>>>>>> 7ffb63bf5c18ae7f7259d3421a7ae6de619b0ad0
      icon: null,
      content: <UserForm/>,
      okText: 'Save',
      centered: true,
      onOk: () => {
        return new Promise((resolve, reject) => {
          UserForm.getValues()
            .then((values) => {
              console.log(values)
              axios.post('/auth/signup', {
                ...values,
                Pass: (values.Pass),
                Phone:(values.Phone),
              }).then(() => {
                message.success('Add Success!')
                getUsers()
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
      <PageTitle title="User" /> 
      <div className="container">
        <UserTable handleAdd={addUser} data={name} handleEdit={editUsers} handleDelete={deleteUsers}/>
      </div>
    </>
  );
}
