import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'
import { Modal, message } from 'antd';
import CategoryForm from "./components/CategoryForm";
import CategoryTable from "./components/CategoryTable";
export default function CategoryPage() {

  const [name, setName] = React.useState([])
  React.useEffect(() => {
    getCategory1()
  }, [])

  const getCategory1 = () => {
    axios.get('/api/main/category').then(({ data }) => {
      console.log(data)
      setName(data)
    }).catch(console.log)
  }

  const deleteCategory = (id) => {
    axios.delete(`/api/delete/category/${id}`).then(() => {
      // reload data
      getCategory1()
      message.success('Delete Success!')
    }).catch(() => {
      message.error('Delete Error!')
    })
  }

  const editCategory = (users) => {
    // show modal edit 
    Modal.confirm({
      title: 'Edit Category',
      icon: null,
      content: <CategoryForm data={users}/>,
      okText: 'Save',
      centered: true,
      onOk: () => {
        return new Promise((resolve, reject) => {
          CategoryForm.getValues()
            .then((values) => {
              console.log(values)
              axios.put('/api/category', {
                ID: users.ID,
                Name: values.Name,
                Email: values.Email,
                Username: values.Username,
                Pass: (values.Pass),
                Phone: (values.Phone),
              }).then(() => {
                message.success('Edit Success!')
                getCategory1()
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

  const addCategory = () => {
    Modal.confirm({
      title: 'Add Category',
      icon: null,
      content: <CategoryForm/>,
      okText: 'Save',
      centered: true,
      onOk: () => {
        return new Promise((resolve, reject) => {
          CategoryForm.getValues()
            .then((values) => {
              console.log(values)
              axios.post('/api/new/category', {
                ...values,
                Pass: (values.Pass),
                Phone:(values.Phone),
              }).then(() => {
                message.success('Add Success!')
                getCategory1()
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
      <PageTitle title="Category" /> 
      <div className="container">
        <CategoryTable handleAdd={addCategory} data={name} handleEdit={editCategory} handleDelete={deleteCategory}/>
      </div>
    </>
  );
}
