function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  let variant = 14;
  let table_size = 6;
  let current_cell = 0;
  for (let i = 0; i < table_size; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < table_size; j++) {
      current_cell++;
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      if (current_cell == variant){
        cell.className = "variant";
        //cell.addEventListener("dblclick", (event) => { on_dblclick(tbl,variant,table_size);});
        cell.addEventListener("mouseover", (event) => { changeColor(cell);});
        cell.addEventListener("click", (event) => { 
          if (event.detail == 1){
            timer = setTimeout(() => {
              on_click(cell);
            }, 200)
          }else{
            clearTimeout(timer)
            on_dblclick(tbl,variant,table_size);

          }
        });
      }
      const cellText = document.createTextNode(`${current_cell}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

function changeColor(_cell){
  console.log("over")
  console.log(_cell)
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  _cell.style.backgroundColor = "#" + randomColor;
}

//зміна кольору на обраний з палітри
function on_click(_cell){
  console.log("clck")
  var picker = document.getElementById("colorPick")
  setTimeout(() => picker.click(), 50);
  picker.addEventListener('change', function(e){
    console.log("chh")
    _cell.style.backgroundColor = picker.value;
  }, {once : true});
}

//зміна кольору всіх клітинок прямокутника, утвореного, починаючи з вибраної комірки таблиці; 
function on_dblclick(_table,_var,_tbl_size){
  console.log("clck2")
  var picker = document.getElementById("colorPick")
  setTimeout(() => picker.click(), 50);
    picker.addEventListener('change', function(e){
      
    var my_row = Math.ceil(_var/_tbl_size);
    var my_clmn = _var % _tbl_size  ;
    console.log(my_row)
    console.log(my_clmn)
    if (my_clmn == 0) { my_clmn = _tbl_size}

    for (var i = 0, row; row = _table.rows[i]; i++) {
      if ((i+1) < my_row) { continue }
      for (var j = 0, col; col = row.cells[j]; j++) {
          if ((j+1) < my_clmn) { continue }
          col.style.backgroundColor = picker.value;
      }  
    }
      
  }, {once : true});
}