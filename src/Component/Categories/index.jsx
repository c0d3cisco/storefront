import { useDispatch, useSelector } from 'react-redux'
// import { clearCategory } from '../../store/actions.js'
import { ButtonGroup, Button } from '@mui/material'
import { useEffect } from 'react'
import { getCategories, setCategory, reset } from '../../store/categories'
import { getProductsAPI } from '../../store/products'

function Category() {
  const dispatch = useDispatch()

  const { categories } = useSelector(state => state.category)

  useEffect(() => {
    dispatch(getCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClick(activeCategory){
    // console.log(activeCategory, 'activeCategory')
    dispatch(setCategory(activeCategory))
    dispatch(getProductsAPI(activeCategory))
  }

  return (
    <>
      <h3>Browse our Categories</h3>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category) => {
          return (
            <Button
              key={`categoryID-${category.name}`}
              onClick={() => handleClick(category.name)}
            >
              {category.name.toUpperCase()}
            </Button>
          )
        })}
        <Button
          key={`categoryID-reset`}
          onClick={() => dispatch(reset())}
        >
          X
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Category;
