import React, { useState, useEffect} from 'react'
import { Formik, Form, Field } from 'formik'
import { toDoSchema } from '../../Utilities/validationSchema'
import axios from 'axios'

export default function ToDoForm(props) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://todoapi.colsondonnerdev.com/api/categories`).then(response => {
      console.log()
      setCategories(response.data)
    })
  }, []);

  const handleSubmit = (values) => {
    console.log(values)
    if(!props.todo) {
      const todoToCreate = {
        name: values.name,
        done: false,
        categoryId: values.categoryId
      }
      
      axios.post(`http://todoapi.colsondonnerdev.com/api/todoes`, todoToCreate).then(() => {
        props.setShowCreate(false)

        props.getTodos()
      })
    }
    else{
      const todoToEdit = {
        toDoId: props.todo.toDoId,
        name: values.name,
        done: props.todo.done,
        categoryId: values.categoryId
      }

      axios.put(`http://todoapi.colsondonnerdev.com/api/todoes/${[props.todo.toDoId]}`, todoToEdit).then(() => {
        props.setShowEdit(false)
        props.getTodos()
      })
    }
  }
  return (
    <div className="createTodo m-2 text-white text-center">
      <Formik
        initialValues={{
          name: props.todo ? props.todo.name : '',
          
          categoryId: props.todo ? props.todo.categoryId : ''
        }} 
        validationSchema={toDoSchema}
        onSubmit={values => handleSubmit(values)}>
        {({errors, touched}) => (
          <Form id='todoForm' className='row text-center m-auto'>
            <div className="form-group m-1 p-1">
              <Field name='name' className='form-control' placeholder='Name' />
              {errors.name && touched.name ? 
                <div className='text-danger'>{errors.name}</div>
              : null}
            </div>
          
            <div className="form-group m-3">
                    <Field name='categoryId' as='select' className='form-control' placeholder='Category Id'>
                        <option value='' disabled>
                            [--Please Choose--]
                        </option>
                        {/*Below we will map out an option for every category in the */}
                        {categories.map(cat => 
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.catName}
                            </option>    
                        )}
                    </Field>                         
                </div>
            <div className="form-group m-1">
              <button type='submit' className="btn btn-success">Submit Todo to API</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
