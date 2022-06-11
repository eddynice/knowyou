import React from 'react'
import {Nav, Navbar, Card ,Container,Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import {getInvoice} from "../header/data"
export const Detail = () => {
  let  {id } = useParams();
  let invoice = getInvoice(parseInt(id.invoiceId, 10));
  return (
    <>
      <h1>Arist Details</h1>
      <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      {invoice.name}
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

</>
    
  )
}
