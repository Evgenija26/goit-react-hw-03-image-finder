import React from 'react'
import css  from './Button.module.css'

const Button = () => {
  return (
      <div className={css.btn__wrapper}>
          <button type="button" data-action="load-more" className={css.Button}>
              Load more
          </button>
    </div>
  )
}

export default Button


// import React from "react";
// import css from './Button.module.css'

// у
//  <div class="btn-wrapper">
//     <button  class="load-more" >
//         
//     </button>
// </div>