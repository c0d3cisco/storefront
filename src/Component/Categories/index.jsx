import { useDispatch, useSelector } from 'react-redux'
import { setCategory, clearCategory } from '../../store/actions.js'
import { ButtonGroup, Button } from '@mui/material'
import { useEffect } from 'react'
import { getCategories } from '../../store/categories'
import { getProducts } from '../../store/products'

function Category() {
  const dispatch = useDispatch()

  const { category } = useSelector(state => state)

  const { categories } = category

  useEffect(() => {
    dispatch(getCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClick(activeCategory){
    dispatch(setCategory(activeCategory))
    dispatch(getProducts(activeCategory))
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
          onClick={() => dispatch(clearCategory())}
        >
          X
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Category;
