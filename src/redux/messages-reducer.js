let initialState = {
  names: ["Pavel", "Sasha", "Artem", "Andrey", "Dmitry"],
  messages: [
    { name:"Me", mesage: "Давно выяснено, что при оценке дизайна"},
    { name:"He", mesage: "Композиции читаемый текст мешает сосредоточиться"}
  ]
}

const messagesReduce = (state = initialState, action) => {
  return state;
}

export default messagesReduce;