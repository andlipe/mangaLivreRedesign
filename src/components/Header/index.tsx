import { Image, Link } from '@shared/components'
import React from 'react'
import { Button } from '@components/index'
import Logo from '@assets/images/logo.svg'
import * as S from './styles'

interface HeaderProps {
  routes: { href: string; label: string }[]
}

export default function Header({ routes }: HeaderProps) {
  return (
    <S.Container>
      <Image alt="MangaLivre Logo" src={Logo} width={148} height={34} />
      <S.Menu>
        {routes.map((link) => (
          <Link key={link.label} href={link.href}>
            <S.MenuLink>{link.label}</S.MenuLink>
          </Link>
        ))}
      </S.Menu>
      <Button label="Login" onClick={() => console.log('login')} />
    </S.Container>
  )
}
