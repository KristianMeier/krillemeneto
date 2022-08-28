const data = [
  {
    id: 1,
    name: 'Billede',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Billede',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Billede',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
]

const sectionCenter = document.querySelector('.section-center')

window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(data)
})

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
      <article class='sandbox-container'>
        <h4 
          class='sandbox-text'>
          ${item.name} ${item.id}
        </h4>
        <img
          class='sandbox-picture'
          src=${item.image}
          alt=${item.name}
        />
      </article>`
  })
  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}
