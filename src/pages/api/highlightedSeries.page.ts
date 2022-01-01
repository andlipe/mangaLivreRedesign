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
      image:
        'https://static3.mangalivre.net/destaques/-xzgF7dWuEJOauTaw4xEJw/2697/how-not-summon-demon.png',
      background: '7D1438',
      time: '2022-01-01T14:29:07-03:00',
      selected: true,
    },
    {
      id: 2412,
      chapter: '360',
      image:
        'https://static3.mangalivre.net/destaques/3wPz0osUAbdyQiyMCqQZtw/2412/tales-of-demons-gods.png',
      background: 'D37C12',
      time: '2022-01-01T14:04:25-03:00',
      selected: false,
    },
    {
      id: 6938,
      chapter: '96',
      image:
        'https://static3.mangalivre.net/destaques/P9eeqB7OlsoilfoguY3S_Q/6938/ijiranaide-nagaroto.png',
      background: '1099CD',
      time: '2022-01-01T13:50:02-03:00',
      selected: false,
    },
    {
      id: 7702,
      chapter: '179',
      image:
        'https://static3.mangalivre.net/destaques/-_zttjheTKXCNaOBLeYOHQ/7702/sololevel.png',
      background: '2F2828',
      time: '2022-01-01T13:41:39-03:00',
      selected: false,
    },
    {
      id: 7247,
      chapter: '856',
      image:
        'https://static3.mangalivre.net/destaques/CgYxmgNjMEiN3-7OldU9Jw/7247/apotheosis.png',
      background: '1E142F',
      time: '2022-01-01T13:41:18-03:00',
      selected: false,
    },
    {
      id: 1764,
      chapter: '218',
      image:
        'https://static3.mangalivre.net/destaques/o3jp6s6esy31KXPoUPk3DQ/1764/akatsuki-4.png',
      background: '1B0924',
      time: '2021-12-31T12:06:22-03:00',
      selected: false,
    },
    {
      id: 10255,
      chapter: '69',
      image:
        'https://static3.mangalivre.net/destaques/mNfMDYqo-nMazTdb9QuBow/10255/tougen-anki.png',
      background: '200B06',
      time: '2021-12-31T10:57:06-03:00',
      selected: false,
    },
  ])
}
