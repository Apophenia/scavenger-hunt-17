var app = new Vue({
    el: '#app',
    data: function () {
        return {
        todos: [
          { text : 'Hair', 
              subTodos : [{ text : 'doll/hair1.png'}, { text : 'doll/hair2.png'}, { text : 'doll/hair3.png'}, { text : 'doll/hair4.png'}]
          },
          { text : 'Shirts', 
              subTodos : [{ text : 'doll/shirt1.png'}, { text : 'doll/shirt2.png'}, { text : 'doll/shirt3.png'}]
          },
          { text : 'Pants', 
              subTodos : [{ text : 'doll/pants1.png'}, { text : 'doll/pants2.png'}, { text : 'doll/pants3.png'}]
        },
          { text : 'Accessories', 
              subTodos : [{ text : 'hat'}, { text : 'accessory'}, { text : 'accessory'}]
          },
        ]
        }
    }
  })