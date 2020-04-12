export class Recipe {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  createdDate: Date;

  constructor(id: string, name: string, category: string, shortDesc: string, longDesc: string, createdDate: Date) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.createdDate = createdDate;
  }
}
