package spec

import geb.spock.GebReportingSpec
import spock.lang.*

import pages.*

@Title("Digital Homepage")
@Narrative("I can go to home page ")
@Stepwise
class  A_HomePageSpec extends GebReportingSpec {
  def "I see the home page"(){
    when:"I go to the homepage"
    to HomePage
    then: "I see the page title"
    at HomePage 
  }
}
