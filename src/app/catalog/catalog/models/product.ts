export class Product {
  id: number;
  name: string;
  cost: number;
  rating: number;
  description: string;

  constructor(id, name, cost, rating, description) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.rating = rating;
    this.description = description;
  }

}
