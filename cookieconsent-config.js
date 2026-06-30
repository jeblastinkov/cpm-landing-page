CookieConsent.run({
  mode: 'opt-in',
  disablePageInteraction: false,
  cookie: {
    name: 'cpm_cookie_consent',
    expiresAfterDays: 182
  },
  guiOptions: {
    consentModal: {
      layout: 'bar',
      position: 'bottom',
      equalWeightButtons: false,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  categories: {
    necessary: {
      enabled: true,
      readOnly: true
    },
    analytics: {
      enabled: false,
      autoClear: {
        cookies: [
          { name: /^_ga/ },
          { name: '_gid' }
        ]
      }
    }
  },
  language: {
    default: 'sk',
    translations: {
      sk: {
        consentModal: {
          title: 'Cookies',
          description: 'Používame cookies na zaistenie správneho chodu webu a pre skvalitnenie našich služieb.',
          acceptAllBtn: 'Súhlasím',
          acceptNecessaryBtn: 'Len nevyhnutné',
          showPreferencesBtn: 'Nastavenia'
        },
        preferencesModal: {
          title: 'Nastavenia cookies',
          acceptAllBtn: 'Prijať všetko',
          acceptNecessaryBtn: 'Odmietnuť všetko',
          savePreferencesBtn: 'Uložiť výber',
          closeIconLabel: 'Zavrieť',
          serviceCounterLabel: 'Služba|Služby',
          sections: [
            {
              title: 'O cookies',
              description: 'Cookies sú malé textové súbory ukladané vo vašom prehliadači. Môžete si vybrať, ktoré kategórie povolíte.'
            },
            {
              title: 'Nevyhnutné cookies',
              description: 'Potrebné na základné fungovanie stránky vrátane rezervačného kalendára (Microsoft Bookings). Cookies pre rezerváciu nie sú blokované vaším súhlasom s analytikou — fungujú vždy, keď kalendár používate.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytické cookies',
              description: 'Pomáhajú nám pochopiť, ako návštevníci používajú stránku. Nevzťahujú sa na rezervačný kalendár Microsoft Bookings — ten funguje nezávisle od tohto súhlasu.',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Cookie',
                  domain: 'Doména',
                  desc: 'Popis'
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'google.com',
                    desc: 'Rozlišuje používateľov na účely štatistík.'
                  },
                  {
                    name: '_gid',
                    domain: 'google.com',
                    desc: 'Rozlišuje používateľov na účely štatistík.'
                  }
                ]
              }
            },
            {
              title: 'Viac informácií',
              description: 'Ak máte otázky ohľadom cookies, kontaktujte nás na <a href="mailto:info@cpm.online">info@cpm.online</a>.'
            }
          ]
        }
      }
    }
  }
});
