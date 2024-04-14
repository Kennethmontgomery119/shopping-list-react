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
        <Form>
    <FormGroup floating  className="item-row col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
      <Input
        id="Item"
        name="item"
        placeholder="item"
        type="text"
        value={item}
        onChange={handleItemChange}
        required/>
      <Label for="Item">
        Item
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating className="item-row col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
      <Input
        id="Quantity"
        name="quantity"
        placeholder="quantity"
        type="number"
        value={num}
        onChange={handleQuantityChange}
        required />
      <Label for="Quantity">
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