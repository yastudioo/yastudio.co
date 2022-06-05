import React from 'react'
import {ContentList} from './ContentList'
import {Skill} from '../../types'

interface ContentListProps {
  readonly type?: boolean
  readonly content: Skill[]
}

export const ContentListContainer: React.FC<ContentListProps> = ({
  type,
  content
}) => (
  <>
    {content.map(({node}) => (
      <ContentList key={node.fields.slug} type={type} node={node} />
    ))}
  </>
)
