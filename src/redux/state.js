import profileReduce from "./profile-reducer.js";


let store = {
  _state: {
    pageProfile: {
      posts: ["Donec et velit accumsan, dapibus est in, lobortis diam."],
      textvalue: ""
    },
    names: ["Pavel", "Sasha", "Artem", "Andrey", "Dmitry"],
    messages: [
      { name:"Me", mesage: "Давно выяснено, что при оценке дизайна"},
      { name:"He", mesage: "Композиции читаемый текст мешает сосредоточиться"}
    ]
  },
  getState() {
    return this._state;
  },
  renderDOM() {
    console.log("Change")
  },
  
  reloadDOM(observer) {
    this.renderDOM = observer;
  },
  dispatch(action) {
    this._state.pageProfile = profileReduce(this._state.pageProfile, action);
    this.renderDOM(this._state);
  }
}


export default store;
window.store = store;