import { randomUUID } from 'crypto'

function key() {
  return randomUUID().replace(/-/g, '').slice(0, 12)
}

type Span = {
  _type: 'span'
  _key: string
  text: string
  marks: string[]
}

type MarkDef = {
  _type: 'link'
  _key: string
  href: string
}

export type PTBlock = {
  _type: 'block'
  _key: string
  style: 'normal' | 'h2' | 'h3' | 'blockquote'
  children: Span[]
  markDefs: MarkDef[]
}

function parseInline(text: string): { children: Span[]; markDefs: MarkDef[] } {
  const children: Span[] = []
  const markDefs: MarkDef[] = []
  const regex = /\*\*(.+?)\*\*|\*([^*]+?)\*|\[(.+?)\]\((.+?)\)/g
  let cursor = 0

  for (const match of Array.from(text.matchAll(regex))) {
    const start = match.index!
    if (start > cursor) {
      children.push({ _type: 'span', _key: key(), text: text.slice(cursor, start), marks: [] })
    }
    if (match[1] !== undefined) {
      children.push({ _type: 'span', _key: key(), text: match[1], marks: ['strong'] })
    } else if (match[2] !== undefined) {
      children.push({ _type: 'span', _key: key(), text: match[2], marks: ['em'] })
    } else {
      const linkKey = key()
      markDefs.push({ _type: 'link', _key: linkKey, href: match[4] })
      children.push({ _type: 'span', _key: key(), text: match[3], marks: [linkKey] })
    }
    cursor = start + match[0].length
  }

  if (cursor < text.length) {
    children.push({ _type: 'span', _key: key(), text: text.slice(cursor), marks: [] })
  }
  if (children.length === 0) {
    children.push({ _type: 'span', _key: key(), text, marks: [] })
  }
  return { children, markDefs }
}

export function markdownToPortableText(markdown: string): PTBlock[] {
  const blocks: PTBlock[] = []

  for (const line of markdown.split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('# ')) continue

    let style: PTBlock['style'] = 'normal'
    let content = t

    if (t.startsWith('## '))      { style = 'h2';         content = t.slice(3).trim() }
    else if (t.startsWith('### ')) { style = 'h3';         content = t.slice(4).trim() }
    else if (t.startsWith('> '))   { style = 'blockquote'; content = t.slice(2).trim() }
    else if (t.startsWith('- ') || t.startsWith('* ')) { content = t.slice(2).trim() }

    const { children, markDefs } = parseInline(content)
    blocks.push({ _type: 'block', _key: key(), style, children, markDefs })
  }

  return blocks
}
