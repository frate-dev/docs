import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo  from './assets/logo.png'
const config: DocsThemeConfig = {
  logo: <div style={{display:"flex", alignItems:"center", gap:"1rem", fontSize:"1.25rem", fontWeight:"bold"}}><img style={{objectFit:"contain", width:"3rem"}} src={Logo.src} alt="Frate Logo" />Frate</div>,
  project: {
    link: 'https://github.com/frate-dev/frate',
  },
  chat: {
    link: 'https://discord.gg/GdXuH45jpu',
  },
  docsRepositoryBase: 'https://github.com/frate-dev/template/tree/main',
  footer: {
    text: 'Frate Docs',
  },
}

export default config
