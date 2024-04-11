---
theme: dashboard
title: COFI dashboard
toc: false
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>

<!-- Load and transform the data -->

```js
const cofi = FileAttachment("data/cofi.csv").csv({typed: true});

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


function autoBox() {
    document.body.appendChild(this);
    const {x, y, width, height} = this.getBBox();
    document.body.removeChild(this);
    return [x, y, width, height];
}


```

<div class="hero">
  <h1>Chinese Overseas Finance Inventory</h1>
  <h2>Tracking Chinese investments in the power generation sector in Belt and Road countries</h2>
  <h2><a href="https://www.wri.org/research/china-overseas-finance-inventory-database" target="_blank">Read the technical Note<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>

<div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
  <div>
    <ul>
        <li>The first 10 years of the Belt and Road were dominated by fossil fuel investment by Chinese investor, with $52 billion invested in coal power alone according to the China Overseas Finance Inventory (COFI).
        </li>
        <li>China announced it would cease building new coal plants abroad and instead step-up investment in renewable energy.
        </li>
        <li>Tracking the commitments as well as understanding Chinese investment pattern in the power generation sector are essential efforts to decarbonize the energy sector.
        </li>
        <li>This visualization of the COFI database is an interactive exercise that allows users to filter for Chinese investments in the power sector based on specific fuel type, country, and year.
        </li>
    </ul>
  </div>
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Year vs. Installed Capacity",
      width,
      grid: true,
      x: {label: "Commissioning Year"},
      y: {label: "Installed Capacity (MW)"},
      color: {legend: true},
      marks: [
        Plot.linearRegressionY(cofi, {x: "commissioning_year", y: "installed_capacity", stroke: "region"}),
        Plot.dot(cofi, {x: "commissioning_year", y: "installed_capacity", stroke: "region", tip: true})
      ]
    }))
  }</div>
</div>	
