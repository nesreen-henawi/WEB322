window.onload = function() {
    loadListings();
  };
  
  function loadListings(catId) {
    var content = document.querySelector('.main_listings_content');
  
    const rowCount = 3;
    var start = 0;
    var end = rowCount;
    while (start <= rowCount) {
      var slice = rooms.slice(start, end);
      var itemsRow = createItemsRow(slice);
      content.appendChild(itemsRow);
  
      start = end;
      end = end + rowCount;
    }
  }
  
  function createItemsRow(items) {
    var row = createRow();
    var len = items.length;
    for (var i = 0; i < len; i++) {
      var card1 = createCard(items[i]);
      row.appendChild(card1);
    }
    return row;
  }
  
  function createRow() {
    var row = document.createElement('div');
    row.className = 'row';
    return row;
  }
  
  function createCard(item) {
    var column = document.createElement('div');
    column.className = 'item';
  
    var card = document.createElement('div');
    card.className = 'card';
  
    var image = createItemImage(item.images[0]);
  
    image.alt = 0;
    image.addEventListener('click', function() {
      var len = item.images.length;
  
      var next = (Number(image.alt) + 1) % len;
      image.src = item.images[next];
      image.alt = next;
    });
  
    var container = document.createElement('div');
    container.appendChild(image);
  
    card.appendChild(container);
    card.appendChild(createItemDetails(item));
  
    column.appendChild(card);
  
    return column;
  }
  
  function createItemImage(imageSrc) {
    var cellImage = document.createElement('img');
    cellImage.onerror = function() {
      this.style.display = 'none';
    };
    cellImage.src = imageSrc;
    cellImage.className = 'item_image';
  
    return cellImage;
  }
  
  function createItemDetails(item) {
    var table = document.createElement('table');
  
    var tblBody = document.createElement('tbody');
    var row1;
    row1 = createTableHeaderRow(item.title, '$' + item.price, 'th_price');
    var row2 = createRatingTableRow(item);
  
    tblBody.appendChild(row1);
    tblBody.appendChild(row2);
  
    table.appendChild(tblBody);
  
    return table;
  }
  
  function getCategory(catId) {
    var category = cats.find(function(cat) {
      return cat.catId == catId;
    });
  
    return category;
  }
  
  function createTableHeaderRow(text1, text2, texts_css) {
    var row = document.createElement('tr');
    var element1 = getThElement(text1);
    var element2 = getThElement(text2);
    element2.className = texts_css;
  
    row.appendChild(element1);
    row.appendChild(element2);
  
    return row;
  }
  
  function createTableRow(text1, text2) {
    var row = document.createElement('tr');
    var element1 = getTdElement(text1);
    var element2 = getTdElement(text2);
  
    row.appendChild(element1);
    row.appendChild(element2);
  
    return row;
  }
  
  function createRatingTableRow(item) {
    var row = document.createElement('tr');
    var ratingStars = createRating(item);
    row.appendChild(ratingStars);
    return row;
  }

  function getThElement(text) {
    var cell = document.createElement('th');
    var cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    return cell;
  }
  
  function getTdElement(text) {
    var cell = document.createElement('td');
    var cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    return cell;
  }

  function createRating(item) {
    var cell = document.createElement('td');
    var count = document.createElement('lable');
    var starts= [
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span')
    ]

    for(var i=0;i<5;i++) {
      starts[i].className = "fa fa-star";
    }

    var r = Math.round(item.rating_avg);
    count.innerHTML = " " + item.rating_count.toString();

    for(var i=0; i< r; i++) {
      starts[i].className = "fa fa-star checked";
    }

    for(var i=0; i< 5; i++) {
      cell.appendChild(starts[i]);
    }

    cell.appendChild(count);

    return cell;

  }