import Item from './Item';

const addCartItem = (item: Item) => {
    const existingItems = sessionStorage.getItem('cartItems');
    const itemsArray = existingItems ? JSON.parse(existingItems) : [];

    itemsArray.push(item);
    sessionStorage.setItem('cartItems', JSON.stringify(itemsArray));
};

const getCartItems = () => {
    const existingItems = sessionStorage.getItem('cartItems');
    return existingItems ? JSON.parse(existingItems) : [];
};

const setCartItem = (index: number, item: Item, newQuanty: number) => {
    const existingItems = sessionStorage.getItem('cartItems');
    const itemsArray = existingItems ? JSON.parse(existingItems) : [];

    const { image, title, size, color, price } = item;
    const newNumberItems = newQuanty;

    const newItem = {
        image: image,
        title: title,
        size: size,
        color: color,
        price: price,
        numberItems: newNumberItems
    }

    itemsArray.splice(index - 1, 1);
    itemsArray.push(newItem);
    sessionStorage.setItem('cartItems', JSON.stringify(itemsArray));
}

const deleteCartItems = (index: number) => {
    const existingItems = sessionStorage.getItem('cartItems');
    const itemsArray = existingItems ? JSON.parse(existingItems) : [];

    if (existingItems) {
        itemsArray.splice(index, 1);
        sessionStorage.setItem('cartItems', JSON.stringify(itemsArray));
    }
};

export { addCartItem, getCartItems, setCartItem, deleteCartItems };
