import Page from "./base.page";

class Homepage {
    get pageHeader() {return $('h1.heading')};

    get subHeading() {return $('h2')};
}

export default new Homepage()