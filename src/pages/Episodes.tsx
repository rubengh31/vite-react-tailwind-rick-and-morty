import { SearchTableContainer } from '@components/SearchTableContainer'
import { getEpisodes } from '@services/episodes.service'
import { useEffect, useState } from 'react'

export function Episodes () {
  const [episodes, setEpisodes] = useState([] as any)

  const getFromServiceEpisodes = async () => {
    const { data } = await getEpisodes()
    setEpisodes(data.results)
  }

  useEffect(() => {
    try {
      getFromServiceEpisodes()
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log('Episodes', episodes)

  return (
    <>
      <div className="mt-5">
        <SearchTableContainer/>
      </div>
    </>
  )
}
