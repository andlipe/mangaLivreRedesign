/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  chapter: string
  image: string
  background: string
  time: string
  selected: boolean
}

export default async (_req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  res.status(200).json([
    {
      id: 2697,
      chapter: '79.2',
      image: '/hnsdl.png',
      background: '7D1438',
      time: '2022-01-01T14:29:07-03:00',
      selected: true,
    },
    {
      id: 2412,
      chapter: '360',
      image: '/Tales.png',
      background: 'D37C12',
      time: '2022-01-01T14:04:25-03:00',
      selected: false,
    },
    {
      id: 6938,
      chapter: '96',
      image: '/Ijiranaide.png',
      background: '1099CD',
      time: '2022-01-01T13:50:02-03:00',
      selected: false,
    },
    {
      id: 7702,
      chapter: '179',
      image: '/Solem.png',
      background: '2F2828',
      time: '2022-01-01T13:41:39-03:00',
      selected: false,
    },
    {
      id: 7247,
      chapter: '856',
      image: '/Aphoteosis.png',
      background: '1E142F',
      time: '2022-01-01T13:41:18-03:00',
      selected: false,
    },
    {
      id: 1764,
      chapter: '218',
      image: '/Akatsuki.png',
      background: '1B0924',
      time: '2021-12-31T12:06:22-03:00',
      selected: false,
    },
    {
      id: 10255,
      chapter: '69',
      image: '/Tougen.png',
      background: '200B06',
      time: '2021-12-31T10:57:06-03:00',
      selected: false,
    },
  ])
}
