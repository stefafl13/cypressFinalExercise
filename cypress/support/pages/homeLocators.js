var locators = {
    leftArrow: "a.carousel-control-prev",
    rightArrow: "a.carousel-control-next",
    carouselIndicators: "ol.carousel-indicators li",
    activeSlide: "ol li.active"
}

var slide = ""; 

class HomeMethods {
    getSlide(){return slide}
    carouselIndicators(){return cy.get(locators.carouselIndicators)}
    activeSlide(){return cy.get(locators.activeSlide).invoke('attr','data-slide-to')}

    clickRightArrow(){cy.get(locators.rightArrow).click()}
    clickLeftArrow(){cy.get(locators.leftArrow).click()}
    activeItemElement(){
        this.carouselIndicators()
        .then(itm => {         
            slide = Math.floor(Math.random() * Cypress.$(itm).length);
            cy.get(`li[data-slide-to =  "${slide}"]`).click();
        })
    }

    findActiveSlide(){
        // cy.get(locators.activeSlide).then(itm => {
        //     console.log(Cypress.$(itm)["data-slide-to"]);
        //     console.log(typeof(itm))
        // })
        //cy.get(locators.activeSlide).invoke('attr|prop','data-slide-to').should('eq','0')
        //console.log(cy.get(locators.activeSlide).invoke('prop','data-slide-to').as('ss'))
    }

    aaaa(){
        // this.carouselIndicators().then(itm => {
        //     slide = Cypress.$(itm).length;
        //     console.log(slide + " cdcdcdcd");
        //     this.leftArrow().click();
        // })
        //this.leftArrow().click();
        // this.carouselIndicators().then(itm => {
        //     let newSlide = Cypress.$(itm).length;
        //     console.log(slide)
        //     console.log(newSlide)
        //     if(slide==0){
        //         //return (cy.get(`li[data-slide-to =  "${}"]`))
        //         console.log(newSlide - 1);
        //     }else if(slide==newSlide-1){
        //         console.log(newSlide-2)
        //     }else{
        //         console.log(slide-1)
        //     }
        // })
    }


}

export default HomeMethods;