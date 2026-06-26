CookieConsent.run({
  mode: 'opt-in',
  cookie: {
    name: 'cpm_cookie_consent',
    expiresAfterDays: 182
  },
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom center',
      equalWeightButtons: true,
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
      },
      services: {
        ga: {
          label: 'Google Analytics'
        },
        vercel: {
          label: 'Vercel Analytics'
        }
      }
    }
  },
  language: {
    default: 'sk',
    translations: {
      sk: {
        consentModal: {
          title: 'Používame cookies',
          description: 'Táto stránka používa nevyhnutné cookies na správne fungovanie a analytické cookies na pochopenie návštevnosti. Analytické cookies sa aktivujú len s vaším súhlasom.',
          acceptAllBtn: 'Prijať všetko',
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
              description: 'Potrebné na základné fungovanie stránky. Nie je možné ich vypnúť.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytické cookies',
              description: 'Pomáhajú nám pochopiť, ako návštevníci používajú stránku (Google Analytics, Vercel Analytics). Údaje sú anonymizované.',
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
                    desc: 'Rozlišuje používateľov (Google Analytics)'
                  },
                  {
                    name: '_gid',
                    domain: 'google.com',
                    desc: 'Rozlišuje používateľov (Google Analytics)'
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
