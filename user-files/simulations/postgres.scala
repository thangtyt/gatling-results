package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class postgres extends Simulation {

 val httpProtocol = http
		.baseURL("http://localhost:3000")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.(t|o)tf""", """.*\.png"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en,vi;q=0.8,vi-VN;q=0.5,en-US;q=0.3")
		.connection("keep-alive")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:40.0) Gecko/20100101 Firefox/40.0")



    val uri1 = "http://localhost:3000"

	val scn = scenario("dantri-benchmark-test")
		.exec(http("request_0")
			.get("/"))

	setUp(scn.inject(atOnceUsers(1000))).protocols(httpProtocol)
}
