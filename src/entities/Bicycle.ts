const areaKeys = ['CYD', 'TYO', 'MNT'] as const;
type Area = typeof areaKeys[number];

export const extractArea = (value: string): Area | undefined => {
  const suffix = value.slice(0, 3);
  if (areaKeys.includes(suffix)) {
    return suffix;
  }
};

export default class Bicycle {
  readonly area: Area;
  readonly num: number;

  constructor({ area, num }: { area: Area; num: number }) {
    this.area = area;
    this.num = num;
  }

  get value(): string {
    return Bicycle.toValue(this.area, this.num);
  }

  static toValue(area: Area, num: number): string {
    return `${area}${num.toString().padStart(4, '0')}`;
  }

  static fromValue(value: string): Bicycle {
    const area = extractArea(value);
    const num = parseInt(value.slice(3), 10);
    if (area && num) {
      return new Bicycle({ area, num });
    }
    throw new Error(`${value} is invalid format, '(CYD|TYO|MNT)00000'`);
  }

  static get areaKeys(): Area[] {
    return areaKeys;
  }
}
