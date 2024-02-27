class Item {
    image: string;
    title: string;
    size: string;
    color: string;
    price: number;
    numberItems: number;

    constructor(image: string, title: string, size: string, color: string, price: number, numberItems: number) {
        this.image = image;
        this.title = title;
        this.size = size;
        this.color = color;
        this.price = price;
        this.numberItems = numberItems;
    }
}

export default Item;