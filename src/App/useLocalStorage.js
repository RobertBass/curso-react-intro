import React from 'react';

function useLocalStorage(itemName, initialValue){
  
    const storagedItem = localStorage.getItem(itemName);
    let parsedItem;
    if (!storagedItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(storagedItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem]
  }

  export { useLocalStorage };