//Vue intro
const messages = Vue.createApp({
    data() {
        return {
            messageTexto: 'Hello Kelly', 
        }
    }
})
messages.mount('#messages')

//Vue directives
const directive = Vue.createApp({
    data() {
        return {
            vueClass: 'pinkBG'
        }
    }
})
directive.mount('#directive')

//v-bind
const vBind = Vue.createApp({
    data() {
        return {
            url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png?20170311074507',
            height: Math.floor(Math.random() * (50 - 25) + 25),
            size: 30,
            isImportant: true
        }
    }
})
vBind.mount('#v-bind')

//v-if
const vIf = Vue.createApp({
    data() {
        return {
            typewriterCount: Math.floor(Math.random() * (10 - (-10)) + (-10)),
        }
    }
})
vIf.mount('#v-if')

//v-show
const vShow = Vue.createApp({
    data() {
        return {
            showDiv: true
        }
    }
})
vShow.mount('#v-show')

//v-for
const vFor = Vue.createApp({
    data() {
        return {
            fruits: ['Manzana', 'Pera', 'Naranja', 'melon', 'Guanabana']
        }
    }
})
vFor.mount('#v-for')

//v-on
const vOn = Vue.createApp({
    data() {
        return {
            count: 0
        }
    }
})
vOn.mount('#v-on')

//vue methods
const vueMethods = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addMoose(number) {
            this.count+=number
        },
        removeMoose(number) {
            this.count-=number
        }
    }
})
vueMethods.mount('#vue-methods')

//vue modifiers
const vueModifiers = Vue.createApp({
    data() {
        return {
            bgColor: 0
        }
    },
    methods: {
        changeColor() {
            this.bgColor+=50
        }
    }
})
vueModifiers.mount('#vue-modifiers')

//vue modifiers image
const vueModifiersImage = Vue.createApp({
    data() {
        return {
            imgUrlIndex: 0,
            imgUrl: 'https://cdn.pixabay.com/photo/2015/03/30/20/02/ford-700112_1280.jpg',
            images: [
              'https://cdn.pixabay.com/photo/2015/03/30/20/02/ford-700112_1280.jpg',
              'https://www.motor.com.co/__export/1692384732164/sites/motor/img/2023/08/18/ford_mustang_gtd_2024_01.jpeg_1104993014.jpeg',
              'https://www.revistaturbo.com/wp-content/uploads/2018/08/mercedesbenz.jpg'
            ]
          }
    },
    methods: {
        changeImg() {
            this.imgUrlIndex++
            if(this.imgUrlIndex>=3){
                this.imgUrlIndex=0
            }
            this.imgUrl = this.images[this.imgUrlIndex]
        }
    }
})
vueModifiersImage.mount('#vue-modifiers-image')

//vue form
const vueForm = Vue.createApp({
    data() {
        return {
          itemName: null,
          itemNumber: null,
          shoppingList: [
            { name: 'tomates', number: 5 }
          ]
        }
    },
    methods: {
        addItem() {
          let item = {
            name: this.itemName,
            number: this.itemNumber
          }
          this.shoppingList.push(item)
          this.itemName = null
          this.itemNumber = null
        }
    }
})
vueForm.mount('#vue-form')

//v-model
const vModel = Vue.createApp({
    data() {
        return {
          itemName: null,
          itemNumber: null,
          important: false,
          shoppingList: [
            { name: 'YAMAHA', number: 10, important: false, found: false }
          ]
        }
    },
    methods: {
        addItem() {
        let item = {
            name: this.itemName,
            number: this.itemNumber,
            important: this.itemImportant,
            found: false
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null
        this.itemImportant = false
        }
    }
})
vModel.mount('#v-model')

//vue css bindings
const vueCssBindings = Vue.createApp({
    data() {
        return {
            isImportant: true
        }
    }
})
vueCssBindings.mount('#vue-css-binding')

//vue computed properties
const vueComputedProperties = Vue.createApp({
    data() {
        return {
          chbxVal: false
        }
      },
      computed: {
        isImportant() {
          if(this.chbxVal){
            return 'Si'
          }
          else {
            return 'No'
          }
        }
      }
})
vueComputedProperties.mount('#vue-computed-properties')

//vue watchers
const vueWatchers = Vue.createApp({
    data() {
        return {
            inpAddress: '',
            feedbackText: '',
            myClass: 'invalid'
        }
    },
    watch: {
        inpAddress(newVal, oldVal) {
            if(!newVal.includes('@')){
                this.feedbackText = 'El e-mail no es valido';
                this.myClass = 'invalid';
            }
            else if(!oldVal.includes('@') && newVal.includes('@')) {
                this.feedbackText = 'Perfecto!';
                this.myClass = 'valid'
            }
            else {
                this.feedbackText = 'El e-mail es valido :)';
            }
        }
    }
})
vueWatchers.mount('#vue-watchers')
