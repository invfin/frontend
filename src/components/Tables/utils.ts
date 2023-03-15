// export function annotate(number, maxPlaces, forcePlaces, abbr) {
//   // set places to false to not round
//   var rounded = 0
//   switch (abbr) {
//     case 'T':
//       rounded = number / 1e12
//       break
//     case 'B':
//       rounded = number / 1e9
//       break
//     case 'M':
//       rounded = number / 1e6
//       break
//     case 'K':
//       rounded = number / 1e3
//       break
//     case '':
//       rounded = number
//       break
//   }
//   if (maxPlaces !== false) {
//     var test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$')
//     if (test.test(('' + rounded))) {
//       rounded = rounded.toFixed(maxPlaces)
//     }
//   }
//   if (forcePlaces !== false) {
//     rounded = Number(rounded).toFixed(forcePlaces)
//   }
//   return rounded + abbr
// }

// export function RoundNum(number, maxPlaces, forcePlaces, forceLetter) {
//   number = Number(number)
//   forceLetter = forceLetter || false
//   if (forceLetter !== false) {
//     return annotate(number, maxPlaces, forcePlaces, forceLetter)
//   }
//   var abbr
//   if (number >= 1e12) {
//     abbr = 'T'
//   }
//   else if (number >= 1e9) {
//     abbr = 'B'
//   }
//   else if (number >= 1e6) {
//     abbr = 'M'
//   }
//   else if (number >= 1e3) {
//     abbr = 'K'
//   }
//   else {
//     abbr = ''
//   }
//   return annotate(number, maxPlaces, forcePlaces, abbr)
// }

// export function displayTable(tableDatasets, tableID, loaderID, hasBought) {
//   let currency = ''

//   if (tableDatasets['currency']) {
//     currency = "En " + tableDatasets['currency']
//   }
//   let lables = tableDatasets['labels']
//   let tableData = tableDatasets['fields']

//   let table = '<table class="table table-striped table-hover">';
//   let tableHead = '<thead class="card-header text-center"><tr><th scope="col" class="border-0">' + currency + '</th>';
//   let tableBody = '<tbody>';

//   lables.forEach((data, index) => {
//     tableHead += '<th scope="col" class="border-0">' + data + '</th>';
//   });

//   tableData.forEach((data, index) => {
//     tableBody += '<tr><th scope="row"><a href="' + data.url + '">' + data.title + '</a></th>';

//     let financialData = data['values']
//     let percent = data.percent
//     let short = data.short

//     financialData.forEach((data, index) => {
//       let extra = ""
//       let amount = data

//       if (short === 'true') {
//         amount = RoundNum(amount, 2, false, false)
//         // amount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//       }
//       if (percent === 'true') {
//         extra = "%"
//       }
//       tableBody += '<td>' + amount + extra + '</td>';
//     });
//     tableBody += '<td id="blur">67466</td></tr>';
//   });

//   tableHead += '<th scope="col" class="border-0">'
//   if (hasBought == false) {
//     tableHead += '<button data-bs-toggle="modal" data-bs-target="#NecesitasMembresiaModal" class="btn btn-danger btn-sm">Más años</button>'
//   }
//   tableHead += '</th></tr></thead>'
//   table += tableHead
//   tableBody += '</tbody>';
//   table += tableBody
//   table += "</table>";
//   loaderID.remove();
//   tableID.innerHTML = table;
// }
