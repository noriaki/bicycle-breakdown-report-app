type Area = 'CYD' | 'TYO' | 'MNT';

export default class Bicycle {
  readonly id: string;
  readonly area: Area;
  readonly num: number;

  constructor(idOrObj?: string | { area: Area; num: number }) {
    if (idOrObj !== undefined) {
      if (typeof idOrObj === 'string') {
        this.id = idOrObj;
        this.area = idOrObj.slice(0, 3);
        this.num = parseInt(idOrObj.slice(3), 10);
      } else {
        const { area, num } = idOrObj;
        this.id = `${area}${num.toString().padStart(4, 0)}`;
        this.area = area;
        this.num = num;
      }
    }
  }
}
