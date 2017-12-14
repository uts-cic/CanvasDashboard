/**
 * Model of Social Activity, which is used as data for Social Activity Chart
 */
export class SocialActivity {
  id: number;
  values: Value[];
  key: string;
  color: string;
  area: boolean;
}

class Value {
  x: number;
  y: number;
}
