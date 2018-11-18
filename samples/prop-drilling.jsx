import React from 'react'

const Card = ({theme, title, image}) => (
  <div className={`card card--${theme}`}>
    <CardImage image={image}/>
    <CardTitle title={title}/>
  </div>
)

const Panel = ({theme, cards}) => (
  <div className={`panel panel--${theme}`}>
    {cards.map(c => <Card theme={theme} title={c.title} image={c.image}/>)}
  </div>
)

