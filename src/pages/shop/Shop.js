import { useState } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import SHOP_DATA from './shopData'

function Shop() {
  const [collections, setCollections] = useState(SHOP_DATA)
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default Shop
