import React from 'react'

export default function Banner() {
    return (<div class="banner">
      <div className="overlay">
         {/* <div class="logo">
            <picture>
               <source srcset="/presidential-search/images/transition-overlay-2000.png" media="(min-width: 1400px)" />
               <source srcset="/presidential-search/images/transition-overlay-1400.png" media="(min-width: 769px)" />
               <source srcset="/presidential-search/images/transition-overlay-800.png" media="(min-width: 577px)" />
               <img srcset="/presidential-search/images/transition-overlay-800.png" alt="Snow College Presidential Search" class="d-block img-fluid presidential-search" />
            </picture>
         </div> */}
      </div>
       {/* <div className="parallax"></div> */}
      <picture>
         <source srcset="https://snow.edu/presidential-search/images/noyes-2000.jpg" media="(min-width: 1400px)" />
         <source srcset="https://snow.edu/presidential-search/images/noyes-1400.jpg" media="(min-width: 769px)" />
         <source srcset="https://snow.edu/presidential-search/images/noyes-800.jpg" media="(min-width: 577px)" />
         <img srcset="https://snow.edu/presidential-search/images/noyes-600.jpg" alt="responsive" class="d-block img-fluid" />
      </picture>
   </div>)
}