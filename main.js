var app = new Vue({
    el: '#app',
    data: function () {
        return {
        todos: [
          { text : 'Hair', 
              subTodos : [{ text : 'doll/hair1.png'}, { text : 'doll/hair2.png'}, { text : 'doll/hair3.png'}, { text : 'doll/hair4.png'}]
          },
          { text : 'Shirts', 
              subTodos : [{ text : 'doll/shirt1.png'}, { text : 'doll/shirt2.png'}, { text : 'doll/shirt3.png'}, { text : 'doll/shirt4.png'}]
          },
          { text : 'Pants', 
              subTodos : [{ text : 'doll/pants1.png'}, { text : 'doll/pants2.png'}, { text : 'doll/pants3.png'}, { text : 'doll/pants4.png'}]
        },
        { text : 'Shoes', 
              subTodos : [{ text : 'doll/shoe1.png'}, { text : 'doll/shoe2.png'}, { text : 'doll/shoe3.png'}, { text : 'doll/shoe4.png'}]
        },
          { text : 'Accessories', 
                subTodos : [{ text : 'doll/acc1.png'}, { text : 'doll/acc2.png'}, { text : 'doll/acc3.png'}, { text : 'doll/acc4.png'}, { text : 'doll/acc5.png'}, { text : 'doll/acc6.png'}]
          }
        ]
        }
    }
  })