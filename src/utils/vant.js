import {
  Button,
  Search,
  Form,
  Field,
  CellGroup,
  Toast,
  Tabbar,
  TabbarItem,
  Icon,
  Cell
} from 'vant'

// export function vant (app) {
//   app.use(Button)
//   app.use(Search)
// }

export default {
  install (app) {
    // console.log('a', app)
    app.use(Button)
    app.use(Search)
    app.use(Form)
    app.use(Field)
    app.use(CellGroup)
    app.use(Toast)
    app.use(Tabbar)
    app.use(TabbarItem)
    app.use(Icon)
    app.use(Cell)
  }
}
