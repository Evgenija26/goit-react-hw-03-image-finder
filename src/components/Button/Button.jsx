import React from 'react'
import css  from './Button.module.css'

const Button = () => {
  return (
      <div>
          <button type="button" data-action="load-more" className={css.Button}>
              Load more
          </button>
    </div>
  )
}

export default Button
