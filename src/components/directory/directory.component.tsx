import './directory.styless.scss';
import CategoryItem from "../category-item/category-item.component";

const Directory = ({categories}: any) => {
  return (
    <div className='directory-container'>
      {categories.map((category: any) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default Directory