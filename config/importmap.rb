# Pin npm packages by running ./bin/importmap

pin "application", preload: true

pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true

pin_all_from "app/javascript/controllers",  under: "controllers"
pin_all_from "app/javascript/components",   under: "components"


pin "canvas-confetti", to: "https://ga.jspm.io/npm:canvas-confetti@1.4.0/src/confetti.js"
pin "sortablejs", to: "https://cdn.jsdelivr.net/npm/sortablejs@1.14.0/modular/sortable.esm.js"

pin "@emotion/react", to: "https://ga.jspm.io/npm:@emotion/react@11.7.1/dist/emotion-react.browser.esm.js"
pin "react", to: "https://ga.jspm.io/npm:react@17.0.2/index.js"
pin "react-dom", to: "https://ga.jspm.io/npm:react-dom@17.0.2/index.js"
pin "object-assign", to: "https://ga.jspm.io/npm:object-assign@4.1.1/index.js"
pin "scheduler", to: "https://ga.jspm.io/npm:scheduler@0.20.2/index.js"


pin "vue", to: "https://ga.jspm.io/npm:vue@3.2.26/dist/vue.esm-browser.js"
