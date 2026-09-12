import React from 'react'

interface PortableTextProps {
  blocks?: any[] | null
}

function renderMarks(children: any[], marks: string[] = [], markDefs: any[] = []) {
  if (!marks || marks.length === 0) return children

  return marks.reduce((acc, mark) => {
    if (mark === 'strong') return <strong>{acc}</strong>
    if (mark === 'em') return <em>{acc}</em>
    if (mark === 'code') return <code className="rounded bg-muted/30 px-1 py-0.5">{acc}</code>

    const def = markDefs?.find((d: any) => d._key === mark)
    if (def && def._type === 'link' && def.href) {
      return (
        <a href={def.href} className="text-primary underline" target={def.blank ? '_blank' : undefined} rel={def.blank ? 'noreferrer' : undefined}>
          {acc}
        </a>
      )
    }

    return acc
  }, children as any)
}

export default function PortableText({ blocks }: PortableTextProps) {
  if (!blocks || !Array.isArray(blocks)) return null

  const out: React.ReactNode[] = []

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]

    if (!block) continue

    // Handle list groups
    if (block.listItem) {
      // collect consecutive list items
      const listItems: any[] = [block]
      let j = i + 1
      while (j < blocks.length && blocks[j]?.listItem === block.listItem) {
        listItems.push(blocks[j])
        j++
      }

      const Tag = block.listItem === 'number' ? 'ol' : 'ul'
      out.push(
        <Tag key={`list-${i}`} className={block.listItem === 'number' ? 'list-decimal ml-6' : 'list-disc ml-6'}>
          {listItems.map((li, idx) => (
            <li key={li._key || idx} className="mb-2">
              {li.children?.map((child: any, cidx: number) => (
                <React.Fragment key={cidx}>
                  {renderMarks(child.text, child.marks, li.markDefs)}
                </React.Fragment>
              ))}
            </li>
          ))}
        </Tag>
      )

      i = j - 1
      continue
    }

    if (block._type === 'block') {
      const style = block.style || 'normal'

      const text = block.children?.map((child: any, idx: number) => (
        <React.Fragment key={idx}>{renderMarks(child.text, child.marks, block.markDefs)}</React.Fragment>
      ))

      if (style === 'h1') out.push(<h1 key={i} className="font-display text-4xl font-black">{text}</h1>)
      else if (style === 'h2') out.push(<h2 key={i} className="font-display text-3xl font-bold">{text}</h2>)
      else if (style === 'h3') out.push(<h3 key={i} className="font-display text-2xl font-semibold">{text}</h3>)
      else out.push(<p key={i} className="mb-4 text-base leading-7 text-muted-foreground">{text}</p>)

      continue
    }

    // Images
    if (block._type === 'image' && block.asset) {
      out.push(
        <div key={i} className="my-6 rounded overflow-hidden border border-border">
          <img src={block.asset._ref ? `https://cdn.sanity.io/images/hwtmiha0/production/${block.asset._ref.split('-')[1]}-jpg` : block.url} alt={block.alt || ''} className="w-full object-cover" />
        </div>
      )
      continue
    }

    // Fallback: render JSON
    out.push(<pre key={i} className="text-sm text-muted-foreground">{JSON.stringify(block)}</pre>)
  }

  return <div>{out}</div>
}
