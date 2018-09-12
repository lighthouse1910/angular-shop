export class Item {
  name: string;
  image: string;
  price: string;
  category: string;
  constructor(name: string, image: string, price: string, category: string) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.category = category;
  }
}
