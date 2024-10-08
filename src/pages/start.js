import { pageStyle } from "@/lib/utils";
import van from "vanjs-core";
import { Link, navigate } from "vanjs-routing";

const { main, h1, p, a, ol, li, button, br, div } = van.tags;

const Start = () => {
  pageStyle(``);
  return main(
    { class: "c" },
    h1({ class: "center grassetto" }, "BiblioGraph"),
    h1({ class: "center smaller" }, "(pre-release version)"),
    div(
      { style: "/*width:80em;*/" },
      p(
        "BiblioGraph allows you turn a corpus of OpenAlex records into a scientometric landscape, composed of:",
      ),
      ol(
        li(
          "A base map consisting in the network of references that appear together in the records of the corpus",
        ),
        li(
          "A layer of metadata extracted from the records (authors, sources, subﬁelds...) positioned according to their co-occurrence with the references of the base map",
        ),
      ),
      p(
        "(1) Deﬁne your corpus,   (2) set the ﬁlter thresholds and   (3) explore your bibliographic landscape.",
      ),
    ),
    button(
      {
        class: "center-btn btn primary",
        style: "margin: auto;margin-top: 5em",
        onclick: () => navigate("/search"),
      },
      "Start here ⮕ ",
    ),
    a(
      {
        style: "display: block; text-align: center; margin: 2em", href: "https://docs.google.com/document/d/1YOcy9B9VeLpCAfG-gDwSoSma8UUCehzokVoJ2wPJKmM/edit?usp=sharing", target: "_blank"
      },
      "Read the method paper >>",
    ),
    div(
      { class: "credits" },
      "A project by",
      br(),
      "Nils Bonﬁls",
      br(),
      a({ href: "http://www.tommasoventurini.it/wp/", target: "_blank" }, "Tommaso Venturini"),
      br(),
      a({ href: "https://github.com/nbonfils/bibliograph2" , target: "_blank" }, "Fork on Github"),
      br(),
    ),
  );
};

export default Start;
