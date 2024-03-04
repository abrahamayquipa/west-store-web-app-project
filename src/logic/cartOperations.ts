import Item from '../logic/Item';

const priceEachItem = (price: number, nItems: number) => {
    return price * nItems;
}

const priceTotalItems = (arrayItems: Item[]) => {
    let total = 0;
    arrayItems.forEach((el: Item) => {
        total += priceEachItem(el.price, el.numberItems)
    })
    return total;
}

const discount = (arrayItems: Item[]) => {
    const result = priceTotalItems(arrayItems) * 0.20;
    return result;
}

const finalPrice = (arrayItems: Item[]) => {
    const total = priceTotalItems(arrayItems) - discount(arrayItems) - 15;
    return total;
}

export { priceEachItem, priceTotalItems, discount, finalPrice }