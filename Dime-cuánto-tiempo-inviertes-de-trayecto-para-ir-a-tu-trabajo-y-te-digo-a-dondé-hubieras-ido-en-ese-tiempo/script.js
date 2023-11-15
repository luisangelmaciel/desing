var vm = new Vue({
  el: '#commute-calculator',
  data: {
    weeks: null,
    days: null,
    travel_time: null },

  computed: {
    minutes: function () {
      let minutes = parseInt(this.travel_time);
      let weeks = parseInt(this.weeks);
      let days = parseInt(this.days);
      let total_time = minutes * 2 * days * weeks;

      return total_time;
    },
    hours: function () {return this.minutes / 60;},

    total_minutes: function () {return addCommas(this.minutes);},
    total_hours: function () {return addCommas(this.minutes / 60);},
    total_days: function () {return addCommas(this.hours / 24);},
    total_nights: function () {return addCommas(this.hours / 7.5);},
    total_sols: function () {return addCommas(this.minutes / 1480);},
    total_neptunes: function () {return addCommas(this.hours / 16);},
    total_weeks: function () {return addCommas(this.hours / 24 / 7);},
    total_Windows_loads: function () {return addCommas(this.minutes / 25);},
    total_podcasts: function () {return addCommas(this.minutes / 23);},
    total_audiobooks: function () {return addCommas(this.hours / 11);},
    total_hangovers: function () {return addCommas(this.hours / 16);},
    total_Friends_shows: function () {return addCommas(this.minutes / 28);},
    total_GoT_finales: function () {return addCommas(this.minutes / 81);},
    total_scaramuccis: function () {return addCommas(this.hours / 24 / 10);},
    total_kardashians: function () {return addCommas(this.hours / 24 / 72);} } });



function addCommas(nStr) {
  nStr = nStr.toFixed(1);
  nStr += '';
  let x = nStr.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {x1 = x1.replace(rgx, '$1' + ',' + '$2');}

  return x1 + x2;
}