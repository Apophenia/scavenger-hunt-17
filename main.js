Vue.component('todo-item', {
    template: '<img :src={{subtodo.txt}}>',
    props: ['subtodo']
  })
  
  var app = new Vue({
    el: '#app',
    data: function () {
        return {
        todos: [
          { text : 'hair', 
              subTodos : [{ text : 'doll/hair1.png'}, { text : 'doll/hair2.png'}, { text : 'doll/hair3.png'}, { text : 'doll/hair4.png'}]
          },
          { text : 'shirts', 
              subTodos : [{ text : 'shirt'}, { text : 't-shirt'}, { text : 'shirt'}]
          },
          { text : 'maybe accessories here', 
              subTodos : [{ text : 'hat'}, { text : 'accessory'}, { text : 'accessory'}]
          }
        ]
        }
    }
  })