import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Inicio = () => (
  <Card.Group itemsPerRow={4}>
  <Card>
    <Image src='/jaka kid.jpg' size='large' wrapped ui={false} />
    <Card.Content>
      <Card.Header>corte do jaca</Card.Header>
      <Card.Description>
        corte high fade
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <i class="shopping cart icon"></i>
        20 merréis
      </a>
    </Card.Content>
  </Card>
  <Card>
    <Image src='/americas.jpg' size='large' wrapped ui={false} />
    <Card.Content>
      <Card.Header>corte americano</Card.Header>
      <Card.Description>
      <br /> <br />
       Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <i class="shopping cart icon"></i>
        15 merréis
      </a>
    </Card.Content>
  </Card>
  <Card>
    <Image src='/moicas.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>moicano</Card.Header>
      <Card.Description>
       <br /> <br />
       Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <i class="shopping cart icon"></i>
        18 merréis
      </a>
    </Card.Content>
  </Card>
  <Card>
    <Image src='/playba.jpg'  wrapped ui={false} />
    <Card.Content>
      <Card.Header>playboy</Card.Header>
      <Card.Description>
      <br /> <br />
       Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <i class="shopping cart icon"></i>
        50 merréis
      </a>
    </Card.Content>
  </Card>
</Card.Group>
  
)


export default Inicio