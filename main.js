Vue.component('todo-item', {
    template: '<li>{{subtodo.text}}</li>',
    props: ['subtodo']
  })
  
  var app = new Vue({
    el: '#app',
    data: function () {
        return {
        todos: [
          { text : 'hair', 
              subTodos : [{ text : 'hair1.png'}, { text : 'why am i developing on windows'}, { text : 'Testing'}]
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