import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    catName: Yup.string().max(25, 'Max 25 Characters').required('Required'),
    catDesc: Yup.string().max(100, 'Max 100 Characters')
})

const toDoSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Max 100 Characters').required('Required'),
    categoryId: Yup.number().required('Required')
})

export { catSchema, toDoSchema }