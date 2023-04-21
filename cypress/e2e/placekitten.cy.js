describe('Placekitten', () => {
  beforeEach(() => {
    cy.visit('https://placekitten.com/')
  })

  context('Check page elements', () => {
    it('Check title', () => {
      cy.title()
        .should('include', '{placekitten} - Placeholder kitten images for developers')
    })

    it('Check header', () => {
      cy.get('h1')
        .should('have.text', 'placekitten')
    })

    it('Check text', () => {
      cy.get('[title="It fits a gap in the market. "]')
        .find('strong')
        .should('have.text', 'A quick and simple service for getting pictures of kittens for use as placeholders in your designs or code.')
    })

    it('Check links', () => {
      cy.get('[href="/200/300"]')
        .should('have.text', 'http://placekitten.com/200/300')
      cy.get('[href="/g/200/300"]')
        .should('have.text', 'http://placekitten.com/g/200/300')
    })

    it('Check images', () => {
      for (let i = 0; i <= 7; i++) {
        cy.get(`#image-${i}`).should('be.visible');
      }
    })

    it('Check footer', () => {
      cy.get('#footer > p')
        .find('a')
        .should(($links) => {
          expect($links).to.have.length(3);

          const hrefs = ['http://mark.james.name/', 'https://placekitten.com/attribution.html', 'http://placehold.it/'];

          $links.each((index, link) => {
            expect(link.href).to.equal(hrefs[index]);
          });
        });

    })
  })

  context.skip('Links on the homepage', () => {
    it('First link', () => {
      cy.getKitten().as("kitten");

      cy.get("@kitten").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers).to.exist;
        expect(response.headers).to.have.property("content-type").that.contains("image/jpeg");
      }) // error in the response of the website API, I can not fix and do not know how to work around this error.
    })

    it("Second link", () => {
      cy.request("https://placekitten.com/g/200/300").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.headers).to.exist
        expect(response.headers).to.have.property("content-type").that.contains("image/jpeg")
      }) // apparently the same error as the previous one.
    })
  })
})