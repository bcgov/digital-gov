package pages

import geb.Page
import java.util.regex.*

class HomePage extends Page {
  // TODO: add title
  static at = { title == "CSI Labs" }

  static content = {
    // settings elements as variables using jquery like selectors
    // cardsContainers (wait: true) {$("section[class^='src-components-Cards----Cards-module---CardsContainer']")}
  }
  // sample helpers
  // def cardContainerLinks(index){
  //   cardsContainers[index].find("a", 0).click()
  // }
}
