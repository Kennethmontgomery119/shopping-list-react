import React, {useState} from 'react'; 
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
 
export default function ShoppingForm( {
    submitItem,
    submitButtonText = "Add",
    defaultItem = "",
    defaultQuantity = ""
} ) { 
    const [item, setItem] = useState(defaultItem); 
    const [num, setNum] = useState(defaultQuantity); 

    const handleSubmit = (event) => { 
        event.preventDefault(); 
        submitItem(item, num); 
    }  

 
    function handleItemChange(event) { 
        setItem(event.target.value); 
    } 

 
    function handleQuantityChange(event) { 
        setNum(event.target.value); 
    }     
 
 
    return ( 
        <Form action="#" method="POST" onSubmit={handleSubmit} className="form">
        <FormGroup  className="item col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
          <Input
            id="item"
            name="item"
            placeholder="Item"
            type="text"
            value={item}
            onChange={handleItemChange}
            required />
          <Label for="item">
            Item
          </Label>
        </FormGroup>
        {' '}
        <FormGroup  className="item col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4" >
          <Input
            id="quantity"
            name="quantity"
            placeholder="Quantity"
            type="number"
            value={num}
            onChange={handleQuantityChange}
            required />
          <Label for="quantity">
            Quantity
          </Label>
        </FormGroup>
        {' '}
        <Button type="submit" className="add">
          {submitButtonText}
        </Button>
      </Form>
    
    ); 
} 