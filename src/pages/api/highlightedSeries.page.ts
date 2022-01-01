/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  id: number
  chapter: string
  image: string
  background: string
  time: string
  selected: boolean
}

async function getHighlightMangas() {
  const { data } = await axios.get(
    'https://mangalivre.net/home/getFeaturedSeries.json'
  )
  return data.featured.map(
    (
      manga: {
        id_serie: number
        chapter: { number: string }
        featured_image: string
        hex_color: string
        date: string
      },
      index: number
    ) => ({
      id: manga.id_serie,
      chapter: manga.chapter.number,
      image: manga.featured_image,
      background: manga.hex_color,
      time: manga.date,
      selected: index === 0 ? true : false,
    })
  )
}

export default async (_req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  const response = await getHighlightMangas()
  res.status(200).json(response)
}
