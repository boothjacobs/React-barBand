'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Albums', [
        {title: "Say Goodbye To Pretty Boy", imgUrl: "https://f4.bcbits.com/img/a2944346038_16.jpg", description: "Say Goodbye to Pretty Boy is Bartees Strange’s debut EP. It reimagines the songs of The National, a genre-defining indie rock staple for people of Bartees' generation. Strange — a black artist from Mustang, Oklahoma — uses everything from the cover art to his reading of the lyrics to allude to how black artists can find room in white spaces. The EP is both a heart-felt homage and a political act of critique. And it sounds like it was made with energy, intelligence & love.", createdAt: new Date(), updatedAt: new Date() },
        {title: "Emotion", imgUrl: "https://f4.bcbits.com/img/a2835557561_16.jpg", description: "EMO-TION is a collaboration by fifteen artists to pay tribute to the ineffable Carly Rae Jepsen's seminal album EMOTION. All proceeds from this compilation will go to Immigration Equality. Since 1994, Immigration Equality has been advocating for and representing lesbian, gay, bisexual, transgender, queer (LGBTQ), and HIV-positive immigrants seeking safety, fair treatment, and freedom.", createdAt: new Date(), updatedAt: new Date() },
        {title: "ReRed", imgUrl: "https://f4.bcbits.com/img/a3907726339_16.jpg", description: "ReRed is a collaboration by 19 artists to pay tribute to the crossover hitmaker Taylor Swift's instant classic album Red. All proceeds will go straight to Equal Justice Initiative, an incredible organization working to end mass incarceration, excessive punishment, and racial inequality.", createdAt: new Date(), updatedAt: new Date() },
        {title: "Don't Stop Now", imgUrl: "https://f4.bcbits.com/img/a0886591079_16.jpg", description: "This compilation is an expression of love, anger, hope and protest on inauguration day. Let it serve as a reminder that the fight for justice is not over, that the celebration of diversity is essential to progress, that we must work together for what is fair and good. Can’t stop. Won’t Stop. Don’t stop now. All proceeds from this compilation benefit the ACLU, an organization that defends individual freedoms in the face of government abuse, including speech and religion, a woman’s right to choose, the right to due process, and citizens rights to privacy. Each dollar donated will help protect the people of the United States, especially those most vulnerable, from the reckless authority of a Trump presidency.", createdAt: new Date(), updatedAt: new Date() },
        {title: "Don't Stop Now: II", imgUrl: "https://f4.bcbits.com/img/a2755082232_16.jpg", description: "This is the second compilation in the Don't Stop Now series. It is still an expression of love, anger, hope and protest. Let it serve as a reminder that the fight for justice is not over, that the celebration of diversity is essential to progress, that we must work together for what is fair and good. Can’t stop. Won’t stop. Don’t stop now. This time around all of the proceeds from this compilation benefit RAICES (Refugee & Immigrant Center for Education & Legal Services) They promote justice by providing free and low-cost legal services to under served immigrant children, families, and refugees in Texas.", createdAt: new Date(), updatedAt: new Date() },
        {title: "The Georgia EP", imgUrl: "https://f4.bcbits.com/img/a3267728222_10.jpg", description: "In celebration of the recent Georgia runoff election results, we have released THE GEORGIA E.P. across all streaming platforms (including re-releasing it here on Bandcamp) The fundraiser for this release has ended. Thank you to everyone who helped us raise over $100,000 for Fair Fight Action! To say that this exceeded our wildest expectations would be an understatement. Really.", createdAt: new Date(), updatedAt: new Date() },
        {title: "Save Stereogum", imgUrl: "https://f4.bcbits.com/img/a3972692566_10.jpg", description: "To help support our newly independent publication, Stereogum produced this 55-track '00s covers album as a crowdfunding campaign reward.", createdAt: new Date(), updatedAt: new Date() },
        {title: "At the End of Every Hard Earned Day People Find Some Reason to Believe", imgUrl: "https://f4.bcbits.com/img/a3569705703_10.jpg", description: "A buncha months ago, when the new normal felt temporary, I thought it would be fun to make a compilation with some artists & friends I play drums for/ worked with/ & admired over the years. Given the circumstances, loneliness, isolation, feeling & focus, Bruce Springsteen’s Nebraska felt like an appropriate cipher for the moment. When I listen to the songs on Nebraska I think about justice & justification; the absence of the former and the ever-churning of the latter, as present as the tape hiss on the Tascam the record was performed on. I think about complicated lives lived by complicated people in complicated situations. I think about peace & fear & hope & a lack of options...", createdAt: new Date(), updatedAt: new Date() },
        {title: "The Old Friends EP", imgUrl: "https://f4.bcbits.com/img/a3138638062_16.jpg", description: "Over the past year, Worriers was asked to participate in a number of benefit livestreams, comps, and other projects that wouldn't normally be possible for us to do when we were on tour all the time. Living in different cities during quarantine, we took these opportunities to keep making music together - from home. Over the past few years, various arrangements of Worriers have played cover sets of bands like Fleetwood Mac, Minor Threat, Green Day, and The Lemonheads, so covers have always been a fun extra-curricular activity for us. This collection brings together songs from some of our favorite and most influential bands.", createdAt: new Date(), updatedAt: new Date() },
        {title: "Talk - Action = Zero: A Compilation Benefitting Black Lives Matter", imgUrl: "https://f4.bcbits.com/img/a1265312378_16.jpg", description: "A compilation benefitting the Black lives matter movement. 100% of the proceeds will go to the Black Visions Collective.", createdAt: new Date(), updatedAt: new Date() },
        {title: "Don't Stop Now III: A Collection of Covers & More.", imgUrl: "https://f4.bcbits.com/img/a3817049920_10.jpg", description: null, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Albums', null, {});
  }
};
