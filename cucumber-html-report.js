const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumberHTMLReport.html",
  metadata: {
    browser: {
      name: "Microsoft Edge",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows 11",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Practice Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Dec 31st 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Dec 31 2024, 02:56 PM EST" },
    ],
  },
});