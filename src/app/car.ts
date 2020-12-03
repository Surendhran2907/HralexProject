import { Cars } from './interface/Cars';
export class Car implements Cars {
  public id: number;
  public name: string;
  constructor( id: number, name: string) {
    this.name = name;
    this.id = id;
  }
}