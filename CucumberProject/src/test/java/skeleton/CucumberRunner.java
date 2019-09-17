package skeleton;

import org.junit.runner.RunWith;

//import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@io.cucumber.junit.CucumberOptions(plugin= {"pretty","json:src/cucumber-reports/report1.json"},monochrome=true,
features= {"src/test/resources/skeleton/login.feature"},dryRun=false)
public class CucumberRunner {

}
