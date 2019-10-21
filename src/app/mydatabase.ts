import Dexie from 'dexie';

class ImageDatabase extends Dexie {

  images:Dexie.Table<IImage, number>;

  constructor() {
    super("DB");
    this.version(1).stores({
      images: '++id, data'
    });

    this.images = this.table("images");
  }
}

interface IImage {
  id?: number,
  data: string
}

const DB = new ImageDatabase();

export default DB;
