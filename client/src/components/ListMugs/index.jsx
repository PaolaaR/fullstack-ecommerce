import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Mug from './../../assets/tazon-mug-sailor-moon-3d-pack-1.jpg'

import ProductContext from './../../context/ProductContext'


export default function ListMugs(props) {

  const ctx = useContext(ProductContext)

  const { mugs, getMugs } = ctx

  useEffect(() => {

    const fetchMugs= () => {
      return getMugs()
    }

    fetchMugs()

  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {props.title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {
            mugs.map((e) => {

              return (

                <Link to={`/${e._id}`} key={e._id}>
                  <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img src={ e.image} alt="Mug" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          {e.name}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900">${e.price}</p>
                    </div>
                  </div>
                </Link>

              )
            })
          }


        </div>
      </div>
    </div>
  )
}
