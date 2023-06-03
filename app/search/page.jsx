'use client'
import React from 'react'
import { useState } from 'react'

import data from '@components/Feed'

const  Search = async  () => {

  const [value, setValue] = useState(null)
  const dataa = await data
  console.log(dataa)
return (
  <div>
      <h1>Hello search</h1>
      <input type="text" onChange={(e) => {setValue(e.target.value)}} />
      {value}
  </div>
)
}

export default Search