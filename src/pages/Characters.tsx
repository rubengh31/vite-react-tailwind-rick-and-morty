import React, { useEffect, useState } from 'react'
import { getCharacters } from '@services/characters.service'
import { SimpleCard } from '@components/SimpleCard'

export function Characters () {
  const [characters, setCharacters] = useState([] as any)

  const getFromServiceCharacters = async () => {
    const { data } = await getCharacters()
    setCharacters(data.results)
  }

  const loadDataInCard = characters.map((element: any) => {
    return (
      <React.Fragment key={element.id}>
        <SimpleCard src={element.image} name={element.name} gender={element.gender}/>
      </React.Fragment>
    )
  })

  useEffect(() => {
    try {
      getFromServiceCharacters()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div className="mt-5">
      {loadDataInCard}
      </div>
    </>
  )
}
