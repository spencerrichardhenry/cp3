let app = new Vue({
  el: '#app',
  data: {
    numAdvisors: 3,
    aSearchInput: '',
    searched: false,
    noAdvisors: false,
    noAdvisorMessage: "There don't seem to be any advisors in that city!",
    advisors: [{
        name: "John Capore",
        specialty: "taxes",
        city: "Provo UT",
        phone: "(801)628-3915",
        email: "johnsTaxes@gmail.com"
      }, {
        name: "Michael Toule",
        specialty: "Credit Card Debt",
        city: "Provo UT",
        phone: "(435)485-1037",
        email: "CCGuruMike@yahoo.com"
      },
      {
        name: "Sarah Gentzer",
        specialty: "Wealth Management",
        city: "Vancouver WA",
        phone: "(360)725-9617",
        email: "SarahG@WealthMGMT.com"
      },
    ],
    advisorsSearched: [],
  },
  computed: {

  },
  methods: {
    advisorSearch() {
      this.searched = true;
      if (this.aSearchInput === "") {
        this.noAdvisorMessage = "Please enter a city and state (ie: Provo UT) and click \"search\""
        console.log("correction message given");
        this.noAdvisors = true;
        return;
      }
      this.noAdvisors = false;
      this.noAdvisorMessage = "There don't seem to be any advisors in that city!";
      for (let i = 0; i < this.numAdvisors; ++i) {
        if (this.advisors[i].city === this.aSearchInput) {
          this.advisorsSearched[i] = (this.advisors[i]);
          console.log("advisor successfully pushed to advisorsSearched[]");
        }
      }
      return;
    }
  }
});