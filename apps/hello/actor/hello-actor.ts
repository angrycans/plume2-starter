import { Actor, Action, IMap } from 'plume2'


export default class HelloActor extends Actor {
  defaultState() {
    return { text: 'hello plume2' }
  }
}