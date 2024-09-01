import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "muffeez-portfolio";

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle(
      "Muhammad Mohsin | AI Engineer | Computer Vision Developer | Embedded Software Engineer"
    );
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          "AI, Computer Vision Developer , MERN/MEAN Stack Development , Embedded Software Engineer",
      },
      {
        name: "description",
        content:
          "As an AI engineer specializing in Deep Learning and Computer Vision, I possess a deep understanding of AI development. My strong foundation in Python enables me to effectively integrate AI and Computer Vision technologies with front-end frameworks like Angular, and back-end frameworks such as Django and Flask.",
      },
    ]);

    AOS.init();
  }
}
