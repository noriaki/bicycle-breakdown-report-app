const areaKeys = ['CYD', 'TYO', 'MNT'] as const;
type Area = typeof areaKeys[number];

export const extractArea = (value: string): Area | undefined => {
  const suffix = value.slice(0, 3);
  // ref: https://github.com/microsoft/TypeScript/issues/31018#issuecomment-550956390
  if ((areaKeys as readonly string[]).includes(suffix)) {
    return suffix as Area;
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

  static get areaKeys(): typeof areaKeys {
    return areaKeys;
  }
}
